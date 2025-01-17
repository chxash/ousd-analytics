""" Trigger for timelock admin changes """
from datetime import datetime
from django.db.models import Q
from eth_utils import decode_hex
from eth_abi import decode_single

from core.blockchain.addresses import (
    CONTRACT_ADDR_TO_NAME,
    COMPOUND_GOVERNOR_BRAVO,
)
from core.blockchain.decode import decode_calls
from core.blockchain.sigs import (
    SIG_EVENT_PROPOSAL_CREATED,
    SIG_EVENT_PROPOSAL_CANCELED,
    SIG_EVENT_PROPOSAL_QUEUED,
    SIG_EVENT_PROPOSAL_EXECUTED,
    SIG_EVENT_VOTE_CAST,
)
from core.common import truncate_elipsis
from notify.events import event_high

DISCORD_EMBED_DESCRIPTION_LIMIT = 2048


def get_events(logs):
    """ Get Mint/Redeem events """
    return logs.filter(address=COMPOUND_GOVERNOR_BRAVO).filter(
        Q(topic_0=SIG_EVENT_PROPOSAL_CREATED)
        | Q(topic_0=SIG_EVENT_PROPOSAL_CANCELED)
        | Q(topic_0=SIG_EVENT_PROPOSAL_QUEUED)
        | Q(topic_0=SIG_EVENT_PROPOSAL_EXECUTED)
        | Q(topic_0=SIG_EVENT_VOTE_CAST)
    ).order_by('block_number')


def create_prop_details(proposal_id, description, proposer, targets,
                        signatures, calldatas, start_block, end_block):
    return (
        "A new proposal ({}) has been submitted for Compound Governor"
        "\n\n"
        "**Description**: \n\n{}\n\n"
        "**Proposer**: {}\n"
        "**Targets**: {}\n"
        "**Calls**: \n - {}\n"
        "**Block Range**: {}".format(
            proposal_id,
            description,
            proposer,
            ', '.join([
                CONTRACT_ADDR_TO_NAME.get(target, target)
                for target in set(targets)
            ]),
            '\n - '.join(decode_calls(signatures, calldatas)),
            '{} - {}'.format(start_block, end_block),
        )
    )


def run_trigger(new_logs):
    """ Compound Timelock changes """
    events = []

    for ev in get_events(new_logs):

        if ev.topic_0 == SIG_EVENT_PROPOSAL_CREATED:
            # ProposalCreated(uint id, address proposer, address[] targets, uint[] values, string[] signatures, bytes[] calldatas, uint startBlock, uint endBlock, string description)
            (
                proposal_id,
                proposer,
                targets,
                values,
                signatures,
                calldatas,
                start_block,
                end_block,
                description
            ) = decode_single(
                "(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
                decode_hex(ev.data)
            )

            details = create_prop_details(
                proposal_id,
                description,
                proposer,
                targets,
                signatures,
                calldatas,
                start_block,
                end_block,
            )

            # If the message is too long, truncate description only
            if len(details) > DISCORD_EMBED_DESCRIPTION_LIMIT:
                diff = len(details) - DISCORD_EMBED_DESCRIPTION_LIMIT
                details = create_prop_details(
                    proposal_id,
                    truncate_elipsis(
                        description,
                        max_length=len(description) - diff
                    ),
                    proposer,
                    targets,
                    signatures,
                    calldatas,
                    start_block,
                    end_block,
                )

            events.append(event_high(
                "Compound Governor Proposal Created ({})   🗳️ 🆕".format(
                    proposal_id
                ),
                details,
                log_model=ev
            ))

        elif ev.topic_0 == SIG_EVENT_PROPOSAL_CANCELED:
            proposal_id = decode_single("(uint256)", decode_hex(ev.data))[0]

            events.append(event_high(
                "Compound GovernorBravo proposed cancelled   🗳️ ❌",
                "Compound GovernorBravo proposal #{} has been canceled".format(
                    proposal_id
                ),
                log_model=ev
            ))

        elif ev.topic_0 == SIG_EVENT_PROPOSAL_QUEUED:
            proposal_id, eta_stamp = decode_single(
                "(uint256,uint256)",
                decode_hex(ev.data)
            )

            eta = datetime.utcfromtimestamp(eta_stamp)

            events.append(event_high(
                "Compound GovernorBravo proposed queued   🗳️ 📥",
                "Compound GovernorBravo proposal #{} has been queued "
                "for {} UTC".format(
                    proposal_id,
                    eta,
                ),
                log_model=ev
            ))

        elif ev.topic_0 == SIG_EVENT_PROPOSAL_EXECUTED:
            proposal_id = decode_single("(uint256)", decode_hex(ev.data))[0]

            events.append(event_high(
                "Compound GovernorBravo proposed executed   🗳️ ⚙️",
                "Compound GovernorBravo proposal #{} has been executed".format(
                    proposal_id,
                ),
                log_model=ev
            ))

        # This is a ton of noise that's probably irrelevant to us.  Will leave
        # it here in case we change our minds.
        #
        # elif ev.topic_0 == SIG_EVENT_VOTE_CAST:
        #     # VoteCast(address voter, uint proposalId, bool support, uint votes)
        #     (
        #         voter,
        #         proposal_id,
        #         support,
        #         votes
        #     ) = decode_single(
        #         "(address,uint256,bool,uint256)",
        #         decode_hex(ev.data)
        #     )

        #     events.append(event_low(
        #         "Compound GovernorBravo vote   🗳️",
        #         "{} has voted {} of proposal #{}".format(
        #             voter,
        #             "in support ✔️" if support else "in opposition ❌",
        #             proposal_id,
        #         )
        #     ))

    return events
