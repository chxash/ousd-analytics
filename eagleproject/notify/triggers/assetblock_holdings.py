from decimal import Decimal

from core.common import format_decimal
from core.logging import get_logger

from notify.events import event_critical, event_high, event_low

from core.blockchain.metastrategies import METASTRATEGIES

log = get_logger(__name__)

ASSET_BLOCK_SYMBOLS = ["DAI", "USDC", "USDT"]
PERCENT_CRITICAL = Decimal(0.25)
PERCENT_WARNING = Decimal(0.1)
PERCENT_INFO = Decimal(0.05)


def run_trigger(snapshot_cursor, latest_asset_blocks, last_week_asset_blocks):
    """ Template trigger """
    events = []

    known_strategies = [
        ("vault_holding", "Vault Holding"),
        ("compstrat_holding", "Compound Strategy Holding"),
        ("threepoolstrat_holding", "3Pool Strategy Holding"),
        ("aavestrat_holding", "Aave Strategy Holding"),
    ]

    known_strategies_keys = [k for k in known_strategies]

    # Include meta strategies
    known_strategies.extend([
        (strat["KEY"], strat["NAME"] + " Holdings") for strat in METASTRATEGIES
    ])

    for symbol in ASSET_BLOCK_SYMBOLS:
        current = None
        previous = None

        last_week = None
        latest = list(latest_asset_blocks.filter(symbol=symbol))
        last_week = list(last_week_asset_blocks.filter(symbol=symbol))

        if len(latest) < 1:
            log.debug("No recent asset blocks, skipping")
            continue

        elif len(latest) > 1:
            previous = latest[1]

        else:
            if len(last_week) < 1:
                log.debug("No asset blocks for last week, skipping")
                continue

            previous = last_week[-1]

        current = latest[0]

        current_meta_holdings = getattr(current, 'metastrat_holdings')
        previous_meta_holdings = getattr(previous, 'metastrat_holdings')

        for prop, name in known_strategies:
            current_holding = getattr(current, prop) if prop in known_strategies_keys else current_meta_holdings.get(prop, 0)
            previous_holding = getattr(previous, prop) if prop in known_strategies_keys else previous_meta_holdings.get(prop, 0)

            diff = current_holding - previous_holding
            absdiff = abs(diff)

            # No change
            if absdiff < 1:
                log.debug("No change in holding, skipping")
                continue

            critical_threshold = current_holding * PERCENT_CRITICAL
            warning_threshold = current_holding * PERCENT_WARNING
            info_threshold = current_holding * PERCENT_INFO

            event_func = event_low
            threshold_percent = 0
            change_string = ""

            if absdiff > critical_threshold:
                change_string = "Large"
                if diff < 0:
                    event_func = event_critical
                threshold_percent = round(PERCENT_CRITICAL * Decimal(100))
            elif absdiff > warning_threshold:
                change_string = "Medium"
                if diff < 0:
                    event_func = event_high
                threshold_percent = round(PERCENT_WARNING * Decimal(100))
            elif absdiff > info_threshold:
                change_string = ""
                event_func = event_low
                threshold_percent = round(PERCENT_INFO * Decimal(100))

            if threshold_percent:
                events.append(event_func(
                    "{} {} {}".format(
                        change_string,
                        name,
                        'Gain' if diff > 0 else 'Loss',
                    ),
                    "OUSD Bot just saw a change of {}% in {} ({})\n\n"
                    "**Previous**: {} (block {})\n"
                    "**Current**: {} (block {})\n"
                    "**Change**: {}".format(
                        threshold_percent,
                        name,
                        symbol,
                        format_decimal(previous_holding, 4),
                        previous.block_number,
                        format_decimal(current_holding, 4),
                        current.block_number,
                        format_decimal(diff, 4),
                    )
                ))

    return events
