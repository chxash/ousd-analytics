from eth_hash.auto import keccak
from eth_utils import encode_hex

# getPrice(address source, string calldata key)
OPEN_ORACLE_GET_PRICE = encode_hex(keccak(b"getPrice(address,string)"))
# price(string calldata symbol)
OPEN_ORACLE_PRICE = encode_hex(keccak(b"price(string)"))
# ethUsdPrice() - uint256 (6-decimal USD)
CHAINLINK_ETH_USD_PRICE = encode_hex(keccak(b"ethUsdPrice()"))
# tokEthPrice(string calldata symbol)
CHAINLINK_TOK_ETH_PRICE = encode_hex(keccak(b"tokEthPrice(string)"))
# tokUsdPrice(string calldata symbol)
CHAINLINK_TOK_USD_PRICE = encode_hex(keccak(b"tokUsdPrice(string)"))

########
# Events
########
TRANSFER = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"

# OGN Staking
SIG_EVENT_STAKED = encode_hex(keccak(b"Staked(address,uint256)"))
SIG_EVENT_WITHDRAWN = encode_hex(keccak(b"Withdrawn(address,uint256)"))

# OUSD
SIG_EVENT_TOTAL_SUPPLY_UPDATED = encode_hex(
    keccak(b"TotalSupplyUpdated(uint256,uint256,uint256)")
)

# Vault
SIG_EVENT_MINT = encode_hex(keccak(b"Mint(address,uint256)"))
SIG_EVENT_REDEEM = encode_hex(keccak(b"Redeem(address,uint256)"))
SIG_EVENT_CAPITAL_PAUSED = encode_hex(keccak(b"CapitalPaused()"))
SIG_EVENT_CAPITAL_UNPAUSED = encode_hex(keccak(b"CapitalUnpaused()"))
SIG_EVENT_REBASE_PAUSED = encode_hex(keccak(b"RebasePaused()"))
SIG_EVENT_REBASE_UNPAUSED = encode_hex(keccak(b"RebaseUnpaused()"))
SIG_EVENT_STRATEGY_ADDED = encode_hex(keccak(b"StrategyAdded(address)"))
SIG_EVENT_STRATEGY_REMOVED = encode_hex(keccak(b"StrategyRemoved(address)"))
SIG_EVENT_WEIGHTS_UPDATED = encode_hex(keccak(b"StrategyWeightsUpdated(address[],uint256[])"))
SIG_EVENT_ASSET_SUPPORTED = encode_hex(keccak(b"AssetSupported(address)"))

# Governable
SIG_EVENT_PENDING_TRANSFER = encode_hex(keccak(b"PendingGovernorshipTransfer(address,address)"))
SIG_EVENT_TRANSFER = encode_hex(keccak(b"GovernorshipTransferred(address,address)"))

# Proxy
SIG_EVENT_UPGRADED = encode_hex(keccak(b"Upgraded(address)"))

# Timelock
SIG_EVENT_NEW_ADMIN = encode_hex(keccak(b"NewAdmin(address)"))
SIG_EVENT_NEW_PENDING_ADMIN = encode_hex(keccak(b"NewPendingAdmin(address)"))
SIG_EVENT_DELAY = encode_hex(keccak(b"NewDelay(uint256)"))

