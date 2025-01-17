"""
Example Strategy Config:
  # UUID as key (Storing using this key in DB)
  "compstrat_holding": {

    # Shown in the Dashboard
    "NAME": "Compound Strategy", 

    # Contract address
    "ADDRESS": "0x89eb88fedc50fc77ae8a18aad1ca0ac27f777a90",

    # Block to listen events from
    "FROM_BLOCK": 15896478,

    # True for all strategies with data stored in a separate column in AssetBlocks model
    "HARDCODED": True,

    # Hidden from Dashboard if set to true
    "HIDDEN": True,

    # Supported assets
    "SUPPORTED_ASSETS": ("USDC", "USDT", "DAI"),

    # True for all strategies that are fork of Compound
    "IS_COMPOUND_COMPATIBLE": False,

    "ICON_NAME": "Icon file name"
  },
"""

DEFAULT_ASSETS = ("USDC", "USDT", "DAI")

VAULT = "0xe75d77b1865ae93c7eaa3040b038d7aa7bc02f70"
STRATCOMP = "0x9c459eeb3fa179a40329b81c1635525e9a0ef094"
STRATCONVEX = "0xea2ef2e2e5a749d4a66b41db9ad85a38aa264cb3"
STRATAAVE = "0x5e3646a1db86993f73e6b74a57d8640b69f7e259"
MORPHO = "0x5a4eee58744d1430876d5ca93cab5ccb763c037d"
OUSD_METASTRAT = "0x89eb88fedc50fc77ae8a18aad1ca0ac27f777a90"

STRATEGIES = {
  "vault_holding": {
    "NAME": "Vault",
    "ADDRESS": VAULT,
    "HARDCODED": True,
    "SUPPORTED_ASSETS": ("USDC", "USDT", "DAI", "COMP", "OUSD"),
    "ICON_NAME": "ousd-icon.svg",
  },
  "compstrat_holding": {
    "NAME": "Compound Strategy",
    "ADDRESS": STRATCOMP,
    "HARDCODED": True,
    "SUPPORTED_ASSETS": ("USDC", "USDT", "DAI", "COMP"),
    "ICON_NAME": "comp-icon.svg",
  },
  "threepoolstrat_holding": {
    "NAME": "Convex Strategy",
    "ADDRESS": STRATCONVEX,
    "HARDCODED": True,
    "HIDDEN": True,
    "SUPPORTED_ASSETS": DEFAULT_ASSETS,
    "ICON_NAME": "convex.png",
  },
  "aavestrat_holding": {
    "NAME": "Aave Strategy",
    "ADDRESS": STRATAAVE,
    "HARDCODED": True,
    "SUPPORTED_ASSETS": DEFAULT_ASSETS,
    "ICON_NAME": "aave-icon.svg",
  },
  "morpho_strat": {
    "NAME": "Morpho Strategy",
    "ADDRESS": MORPHO,
    "FROM_BLOCK": 15949661,
    "SUPPORTED_ASSETS": ("USDC", "USDT", "DAI", "COMP"),
    "IS_COMPOUND_COMPATIBLE": True,
    "ICON_NAME": "morpho.png",
  },
  "ousd_metastrat": {
    "NAME": "OUSD MetaStrategy",
    "ADDRESS": OUSD_METASTRAT,
    "FROM_BLOCK": 15896478,
    "SUPPORTED_ASSETS": ("USDC", "USDT", "DAI", "OUSD"),
    "IS_OUSD_META": True,
    "ICON_NAME": "buffer-icon.svg",
  },
}
