ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"

# Assets
USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7"
USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
DAI = "0x6b175474e89094c44da98b954eedeac495271d0f"
COMP = "0xc00e94cb662c3520282e6f5717214004a7f26888"
CDAI = "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643"
CUSDC = "0x39aa39c021dfbae8fac545936693ac917d5e7563"
CUSDT = "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9"
ADAI_V1 = "0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d"
ADAI_V2 = "0x028171bca77440897b824ca71d1c56cac55b68a3"
AUSDC = "0xbcca60bb61934080951369a648fb03df4f96263c"
AUSDT = "0x3ed3b47dd13ec9a98b44e6204a523e766b225811"

THREEPOOL = "0x6c3f90f043a72fa612cbac8115ee7e52bde6e490"

# OUSD
GOVERNOR = "0x8e7bdfecd1164c46ad51b58e49a611f954d23377"
OUSD = "0x2a8e1e676ec238d8a992307b495b45b3feaa5e86"
VAULT = "0xe75d77b1865ae93c7eaa3040b038d7aa7bc02f70"
TIMELOCK = "0x52bebd3d7f37ec4284853fd5861ae71253a7f428"
COMPENSATION_CLAIMS = "0x9c94df9d594ba1eb94430c006c269c314b1a8281"

# OGN
OGN = "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26"
OGN_STAKING = "0x501804b374ef06fa9c427476147ac09f1551b9a0"

# Strategies
STRATCOMP = "0xd5433168ed0b1f7714819646606db509d9d8ec1f"
STRATAAVEDAI = "0x9f2b18751376cf6a3432eb158ba5f9b1abd2f7ce"
STRAT3POOL = "0x3c5fe0a3922777343cbd67d3732fcdc9f2fa6f2f"

OUSD_USDT_UNISWAP = "0xcc01d9d54d06b6a0b6d09a9f79c3a6438e505f71"
OUSD_USDT_SUSHI = "0xe4455fdec181561e9ffe909dde46aaeaedc55283"
SNOWSWAP = "0x7c2fa8c30db09e8b3c147ac67947829447bf07bd"

# Oracles
MIX_ORACLE = "0x4d4f5e7a1fe57f5ceb38bfce8653effa5e584458"  # Meta oracle
OPEN_ORACLE = "0x922018674c12a7f0d394ebeef9b58f186cde13c1"  # Token prices
CHAINLINK_ORACLE = "0x8de3ac42f800a1186b6d70cb91e0d6876cc36759"  # Tokens

CHAINLINK_ETH_USD_FEED = "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419"  # ETH
CHAINLINK_DAI_ETH_FEED = "0x773616e4d11a78f511299002da57a0a94577f1f4"
CHAINLINK_USDC_ETH_FEED = "0x986b5e1e1755e3c2440e960477f25201b0a8bbd4"
CHAINLINK_USDT_ETH_FEED = "0xee9f2375b4bdf6387aa8265dd4fb8f16512a1d46"

# Compound
COMPOUND_GOVERNOR_ALPHA = "0xc0da01a04c3f3e0be433606045bb7017a7323e38"
COMPOUND_TIMELOCK = "0x6d903f6003cca6255d85cca4d3b5e5146dc33925"

COMPOUND_COMPTROLLER = "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b"
COMPOUND_COMPTROLLER_G7 = "0xbe7616b06f71e363a310aa8ce8ad99654401ead7"

# Aave v1
AAVE_LENDING_POOL_V1 = "0x398ec7346dcd622edc5ae82352f02be94c62d119"
AAVE_LENDING_POOL_CORE_V1 = "0x3dfd23a6c5e8bbcfc9581d2e864a68feb6a076d3"
AAVE_PROTO_GOVERNANCE_V1 = "0x8a2efd9a790199f4c94c6effe210fce0b4724f52"

# Aave v2
AAVE_LENDING_POOL_V2 = "0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9"

# Curve
CURVE_CRV_TOKEN = "0xd533a949740bb3306d119cc777fa900ba034cd52"
CURVE_3CRV_TOKEN = "0x6c3f90f043a72fa612cbac8115ee7e52bde6e490"
CURVE_3POOL = "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7"

# Name resolution
CONTRACT_ADDR_TO_NAME = {
    OUSD: 'OUSD Token',
    COMP: 'COMP Token',
    VAULT: 'Vault',
    MIX_ORACLE: 'MixOracle',
    CHAINLINK_ORACLE: 'ChainlinkOracle',
    OGN_STAKING: 'OGN Staking',
    STRATCOMP: 'Compound Strategy',
    STRATAAVEDAI: 'Aave Strategy',
    STRAT3POOL: '3Pool Strategy',
    COMPOUND_TIMELOCK: 'Compound Timelock',
    COMPOUND_GOVERNOR_ALPHA: 'Compound GovernorAlpha',
    COMPOUND_COMPTROLLER: 'Compound Comptroller/Unitroller',
    COMPOUND_COMPTROLLER_G7: 'StdComptrollerG7',
    CDAI: 'cDAI',
    CUSDT: 'cUSDT',
    CUSDC: 'cUSDC',
    COMPENSATION_CLAIMS: 'Compensation Claims',
    CURVE_CRV_TOKEN: 'CRV Token',
    CURVE_3CRV_TOKEN: '3CRV Token',
    CURVE_3POOL: '3Pool Swap Contract',
}
