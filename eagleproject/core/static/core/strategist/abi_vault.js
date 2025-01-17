const abiVault = {
  "address": "0x6bd6CC9605Ae43B424cB06363255b061A84DfFD3",
  "abi": [
    {
      "inputs": [],
      "name": "harvestAndSwap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_strategyAddr",
          "type": "address"
        }
      ],
      "name": "harvestAndSwap",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpauseRebase",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "redeemFeeBps",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "governor",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_strategyAddr",
          "type": "address"
        }
      ],
      "name": "harvest",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_asset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "uniswapAddr",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "removeStrategy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "vaultBuffer",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "priceUSDRedeem",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_priceProvider",
          "type": "address"
        }
      ],
      "name": "setPriceProvider",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "approveStrategy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pauseCapital",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "harvest",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_priceProvider",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_ousd",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_asset",
          "type": "address"
        }
      ],
      "name": "supportAsset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "rebaseThreshold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "rebasePaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "strategistAddr",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "claimGovernance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maxSupplyDiff",
          "type": "uint256"
        }
      ],
      "name": "setMaxSupplyDiff",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "priceUSDMint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "setStrategistAddr",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_strategyFromAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_strategyToAddress",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "_assets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_amounts",
          "type": "uint256[]"
        }
      ],
      "name": "reallocate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "maxSupplyDiff",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_vaultBuffer",
          "type": "uint256"
        }
      ],
      "name": "setVaultBuffer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpauseCapital",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "autoAllocateThreshold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "assetDefaultStrategies",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "setUniswapAddr",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_threshold",
          "type": "uint256"
        }
      ],
      "name": "setAutoAllocateThreshold",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "priceProvider",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_threshold",
          "type": "uint256"
        }
      ],
      "name": "setRebaseThreshold",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_asset",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_strategy",
          "type": "address"
        }
      ],
      "name": "setAssetDefaultStrategy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pauseRebase",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isGovernor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_newGovernor",
          "type": "address"
        }
      ],
      "name": "transferGovernance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "capitalPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_redeemFeeBps",
          "type": "uint256"
        }
      ],
      "name": "setRedeemFeeBps",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newImpl",
          "type": "address"
        }
      ],
      "name": "setAdminImpl",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_asset",
          "type": "address"
        }
      ],
      "name": "AssetSupported",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_asset",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_strategy",
          "type": "address"
        }
      ],
      "name": "AssetDefaultStrategyUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "StrategyApproved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "StrategyRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Redeem",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "CapitalPaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "CapitalUnpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "RebasePaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "RebaseUnpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_vaultBuffer",
          "type": "uint256"
        }
      ],
      "name": "VaultBufferUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_redeemFeeBps",
          "type": "uint256"
        }
      ],
      "name": "RedeemFeeUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_priceProvider",
          "type": "address"
        }
      ],
      "name": "PriceProviderUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_threshold",
          "type": "uint256"
        }
      ],
      "name": "AllocateThresholdUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_threshold",
          "type": "uint256"
        }
      ],
      "name": "RebaseThresholdUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "UniswapUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "StrategistUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maxSupplyDiff",
          "type": "uint256"
        }
      ],
      "name": "MaxSupplyDiffChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousGovernor",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newGovernor",
          "type": "address"
        }
      ],
      "name": "PendingGovernorshipTransfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousGovernor",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newGovernor",
          "type": "address"
        }
      ],
      "name": "GovernorshipTransferred",
      "type": "event"
    }
  ],
  "transactionHash": "0xb49aed199923e8cfcfc42f4be68b34546c21203d358488b72a2c38ce98511957",
  "receipt": {
    "to": null,
    "from": "0x71F78361537A6f7B6818e7A760c8bC0146D93f50",
    "contractAddress": "0x6bd6CC9605Ae43B424cB06363255b061A84DfFD3",
    "transactionIndex": 58,
    "gasUsed": "2679029",
    "logsBloom": "0x00000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000008000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000100000020000000000000000000800000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000010000000000000000000000200000000000000000020000000000000000000000000000002000000000000000000000000000000000000",
    "blockHash": "0x3505007feace192d7c7e405160d31ba2cf13caa357d5a3e2be4f995ba09c90ff",
    "transactionHash": "0xb49aed199923e8cfcfc42f4be68b34546c21203d358488b72a2c38ce98511957",
    "logs": [
      {
        "transactionIndex": 58,
        "blockNumber": 11551799,
        "transactionHash": "0xb49aed199923e8cfcfc42f4be68b34546c21203d358488b72a2c38ce98511957",
        "address": "0x6bd6CC9605Ae43B424cB06363255b061A84DfFD3",
        "topics": [
          "0xc7c0c772add429241571afb3805861fb3cfa2af374534088b76cdb4325a87e9a",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x00000000000000000000000071f78361537a6f7b6818e7a760c8bc0146d93f50"
        ],
        "data": "0x",
        "logIndex": 79,
        "blockHash": "0x3505007feace192d7c7e405160d31ba2cf13caa357d5a3e2be4f995ba09c90ff"
      }
    ],
    "blockNumber": 11551799,
    "cumulativeGasUsed": "5891601",
    "status": 1,
    "byzantium": true
  },
  "args": [],
  "solcInputHash": "d641aaf0ed5d604d73e8f53c6d96978e",
  "metadata": "{\"compiler\":{\"version\":\"0.5.11+commit.22be8592.mod\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[],\"name\":\"unpauseRebase\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"redeemFeeBps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"governor\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_strategyAddr\",\"type\":\"address\"}],\"name\":\"harvest\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_asset\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferToken\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"uniswapAddr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"removeStrategy\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"vaultBuffer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"name\":\"priceUSDRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_priceProvider\",\"type\":\"address\"}],\"name\":\"setPriceProvider\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"approveStrategy\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"pauseCapital\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"harvest\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_priceProvider\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_ousd\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_asset\",\"type\":\"address\"}],\"name\":\"supportAsset\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebaseThreshold\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebasePaused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"strategistAddr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"claimGovernance\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maxSupplyDiff\",\"type\":\"uint256\"}],\"name\":\"setMaxSupplyDiff\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"name\":\"priceUSDMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"setStrategistAddr\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_strategyFromAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_strategyToAddress\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"_assets\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_amounts\",\"type\":\"uint256[]\"}],\"name\":\"reallocate\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"maxSupplyDiff\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_vaultBuffer\",\"type\":\"uint256\"}],\"name\":\"setVaultBuffer\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"unpauseCapital\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"autoAllocateThreshold\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"assetDefaultStrategies\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"setUniswapAddr\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_threshold\",\"type\":\"uint256\"}],\"name\":\"setAutoAllocateThreshold\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"priceProvider\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_threshold\",\"type\":\"uint256\"}],\"name\":\"setRebaseThreshold\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_asset\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_strategy\",\"type\":\"address\"}],\"name\":\"setAssetDefaultStrategy\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"pauseRebase\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isGovernor\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newGovernor\",\"type\":\"address\"}],\"name\":\"transferGovernance\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"capitalPaused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_redeemFeeBps\",\"type\":\"uint256\"}],\"name\":\"setRedeemFeeBps\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImpl\",\"type\":\"address\"}],\"name\":\"setAdminImpl\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_asset\",\"type\":\"address\"}],\"name\":\"AssetSupported\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_asset\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_strategy\",\"type\":\"address\"}],\"name\":\"AssetDefaultStrategyUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"StrategyApproved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"StrategyRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Redeem\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"CapitalPaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"CapitalUnpaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"RebasePaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"RebaseUnpaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_vaultBuffer\",\"type\":\"uint256\"}],\"name\":\"VaultBufferUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_redeemFeeBps\",\"type\":\"uint256\"}],\"name\":\"RedeemFeeUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_priceProvider\",\"type\":\"address\"}],\"name\":\"PriceProviderUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_threshold\",\"type\":\"uint256\"}],\"name\":\"AllocateThresholdUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_threshold\",\"type\":\"uint256\"}],\"name\":\"RebaseThresholdUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"UniswapUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"StrategistUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxSupplyDiff\",\"type\":\"uint256\"}],\"name\":\"MaxSupplyDiffChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousGovernor\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernor\",\"type\":\"address\"}],\"name\":\"PendingGovernorshipTransfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousGovernor\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernor\",\"type\":\"address\"}],\"name\":\"GovernorshipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"approveStrategy(address)\":{\"details\":\"Add a strategy to the Vault.\",\"params\":{\"_addr\":\"Address of the strategy to add\"}},\"claimGovernance()\":{\"details\":\"Claim Governance of the contract to a new account (`newGovernor`). Can only be called by the new Governor.\"},\"governor()\":{\"details\":\"Returns the address of the current Governor.\"},\"harvest()\":{\"details\":\"Collect reward tokens from all strategies and swap for supported     stablecoin via Uniswap\"},\"harvest(address)\":{\"details\":\"Collect reward tokens for a specific strategy and swap for supported     stablecoin via Uniswap\",\"params\":{\"_strategyAddr\":\"Address of the strategy to collect rewards from\"}},\"isGovernor()\":{\"details\":\"Returns true if the caller is the current Governor.\"},\"pauseCapital()\":{\"details\":\"Set the deposit paused flag to true to prevent capital movement.\"},\"pauseRebase()\":{\"details\":\"Set the deposit paused flag to true to prevent rebasing.\"},\"priceUSDMint(string)\":{\"details\":\"Returns the total price in 18 digit USD for a given asset.     Using Min since min is what we use for mint pricing\",\"params\":{\"symbol\":\"String symbol of the asset\"},\"return\":\"uint256 USD price of 1 of the asset\"},\"priceUSDRedeem(string)\":{\"details\":\"Returns the total price in 18 digit USD for a given asset.     Using Max since max is what we use for redeem pricing\",\"params\":{\"symbol\":\"String symbol of the asset\"},\"return\":\"uint256 USD price of 1 of the asset\"},\"reallocate(address,address,address[],uint256[])\":{\"params\":{\"_amounts\":\"Array of amounts of each corresponding asset to move.\",\"_assets\":\"Array of asset address that will be moved\",\"_strategyFromAddress\":\"Address of Strategy to move assets from.\",\"_strategyToAddress\":\"Address of Strategy to move assets to.\"}},\"removeStrategy(address)\":{\"details\":\"Remove a strategy from the Vault. Removes all invested assets and returns them to the Vault.\",\"params\":{\"_addr\":\"Address of the strategy to remove\"}},\"setAdminImpl(address)\":{\"details\":\"set the implementation for the admin, this needs to be in a base class else we cannot set it\",\"params\":{\"newImpl\":\"address pf the implementation\"}},\"setAssetDefaultStrategy(address,address)\":{\"details\":\"Set the default Strategy for an asset, i.e. the one which the asset will be automatically allocated to and withdrawn from\",\"params\":{\"_asset\":\"Address of the asset\",\"_strategy\":\"Address of the Strategy\"}},\"setAutoAllocateThreshold(uint256)\":{\"details\":\"Sets the minimum amount of OUSD in a mint to trigger an automatic allocation of funds afterwords.\",\"params\":{\"_threshold\":\"OUSD amount with 18 fixed decimals.\"}},\"setMaxSupplyDiff(uint256)\":{\"details\":\"Sets the maximum allowable difference between total supply and backing assets' value.\"},\"setPriceProvider(address)\":{\"details\":\"Set address of price provider.\",\"params\":{\"_priceProvider\":\"Address of price provider\"}},\"setRebaseThreshold(uint256)\":{\"details\":\"Set a minimum amount of OUSD in a mint or redeem that triggers a rebase\",\"params\":{\"_threshold\":\"OUSD amount with 18 fixed decimals.\"}},\"setRedeemFeeBps(uint256)\":{\"details\":\"Set a fee in basis points to be charged for a redeem.\",\"params\":{\"_redeemFeeBps\":\"Basis point fee to be charged\"}},\"setStrategistAddr(address)\":{\"details\":\"Set address of Strategist\",\"params\":{\"_address\":\"Address of Strategist\"}},\"setUniswapAddr(address)\":{\"details\":\"Set address of Uniswap for performing liquidation of strategy reward tokens\",\"params\":{\"_address\":\"Address of Uniswap\"}},\"setVaultBuffer(uint256)\":{\"details\":\"Set a buffer of assets to keep in the Vault to handle most redemptions without needing to spend gas unwinding assets from a Strategy.\",\"params\":{\"_vaultBuffer\":\"Percentage using 18 decimals. 100% = 1e18.\"}},\"supportAsset(address)\":{\"details\":\"Add a supported asset to the contract, i.e. one that can be        to mint OUSD.\",\"params\":{\"_asset\":\"Address of asset\"}},\"transferGovernance(address)\":{\"details\":\"Transfers Governance of the contract to a new account (`newGovernor`). Can only be called by the current Governor. Must be claimed for this to complete\",\"params\":{\"_newGovernor\":\"Address of the new Governor\"}},\"transferToken(address,uint256)\":{\"details\":\"Transfer token to governor. Intended for recovering tokens stuck in     contract, i.e. mistaken sends.\",\"params\":{\"_amount\":\"Amount of the asset to transfer\",\"_asset\":\"Address for the asset\"}},\"unpauseCapital()\":{\"details\":\"Set the deposit paused flag to false to enable capital movement.\"},\"unpauseRebase()\":{\"details\":\"Set the deposit paused flag to true to allow rebasing.\"}}},\"userdoc\":{\"methods\":{\"reallocate(address,address,address[],uint256[])\":{\"notice\":\"Move assets from one Strategy to another\"}}}},\"settings\":{\"compilationTarget\":{\"contracts/vault/Vault.sol\":\"Vault\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"metadata\":{\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/math/SafeMath.sol\":{\"content\":\"pragma solidity ^0.5.0;\\n\\n/**\\n * @dev Wrappers over Solidity's arithmetic operations with added overflow\\n * checks.\\n *\\n * Arithmetic operations in Solidity wrap on overflow. This can easily result\\n * in bugs, because programmers usually assume that an overflow raises an\\n * error, which is the standard behavior in high level programming languages.\\n * `SafeMath` restores this intuition by reverting the transaction when an\\n * operation overflows.\\n *\\n * Using this library instead of the unchecked operations eliminates an entire\\n * class of bugs, so it's recommended to use it always.\\n */\\nlibrary SafeMath {\\n    /**\\n     * @dev Returns the addition of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `+` operator.\\n     *\\n     * Requirements:\\n     * - Addition cannot overflow.\\n     */\\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\\n        uint256 c = a + b;\\n        require(c >= a, \\\"SafeMath: addition overflow\\\");\\n\\n        return c;\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting on\\n     * overflow (when the result is negative).\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     * - Subtraction cannot overflow.\\n     */\\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return sub(a, b, \\\"SafeMath: subtraction overflow\\\");\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\\n     * overflow (when the result is negative).\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     * - Subtraction cannot overflow.\\n     *\\n     * _Available since v2.4.0._\\n     */\\n    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\\n        require(b <= a, errorMessage);\\n        uint256 c = a - b;\\n\\n        return c;\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `*` operator.\\n     *\\n     * Requirements:\\n     * - Multiplication cannot overflow.\\n     */\\n    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\\n        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the\\n        // benefit is lost if 'b' is also tested.\\n        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\\n        if (a == 0) {\\n            return 0;\\n        }\\n\\n        uint256 c = a * b;\\n        require(c / a == b, \\\"SafeMath: multiplication overflow\\\");\\n\\n        return c;\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers. Reverts on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\\n     * uses an invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     * - The divisor cannot be zero.\\n     */\\n    function div(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return div(a, b, \\\"SafeMath: division by zero\\\");\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\\n     * uses an invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     * - The divisor cannot be zero.\\n     *\\n     * _Available since v2.4.0._\\n     */\\n    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\\n        // Solidity only automatically asserts when dividing by 0\\n        require(b > 0, errorMessage);\\n        uint256 c = a / b;\\n        // assert(a == b * c + a % b); // There is no case in which this doesn't hold\\n\\n        return c;\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * Reverts when dividing by zero.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     * - The divisor cannot be zero.\\n     */\\n    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return mod(a, b, \\\"SafeMath: modulo by zero\\\");\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * Reverts with custom message when dividing by zero.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     * - The divisor cannot be zero.\\n     *\\n     * _Available since v2.4.0._\\n     */\\n    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\\n        require(b != 0, errorMessage);\\n        return a % b;\\n    }\\n}\\n\",\"keccak256\":\"0x640b6dee7a4b830bdfd52b5031a07fc2b12209f5b2e29e5d364a7d37f69d8076\"},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"content\":\"pragma solidity ^0.5.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP. Does not include\\n * the optional functions; to access them see {ERC20Detailed}.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n}\\n\",\"keccak256\":\"0xe5bb0f57cff3e299f360052ba50f1ea0fff046df2be070b6943e0e3c3fdad8a9\"},\"@openzeppelin/contracts/token/ERC20/SafeERC20.sol\":{\"content\":\"pragma solidity ^0.5.0;\\n\\nimport \\\"./IERC20.sol\\\";\\nimport \\\"../../math/SafeMath.sol\\\";\\nimport \\\"../../utils/Address.sol\\\";\\n\\n/**\\n * @title SafeERC20\\n * @dev Wrappers around ERC20 operations that throw on failure (when the token\\n * contract returns false). Tokens that return no value (and instead revert or\\n * throw on failure) are also supported, non-reverting calls are assumed to be\\n * successful.\\n * To use this library you can add a `using SafeERC20 for ERC20;` statement to your contract,\\n * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\\n */\\nlibrary SafeERC20 {\\n    using SafeMath for uint256;\\n    using Address for address;\\n\\n    function safeTransfer(IERC20 token, address to, uint256 value) internal {\\n        callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));\\n    }\\n\\n    function safeTransferFrom(IERC20 token, address from, address to, uint256 value) internal {\\n        callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));\\n    }\\n\\n    function safeApprove(IERC20 token, address spender, uint256 value) internal {\\n        // safeApprove should only be called when setting an initial allowance,\\n        // or when resetting it to zero. To increase and decrease it, use\\n        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'\\n        // solhint-disable-next-line max-line-length\\n        require((value == 0) || (token.allowance(address(this), spender) == 0),\\n            \\\"SafeERC20: approve from non-zero to non-zero allowance\\\"\\n        );\\n        callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));\\n    }\\n\\n    function safeIncreaseAllowance(IERC20 token, address spender, uint256 value) internal {\\n        uint256 newAllowance = token.allowance(address(this), spender).add(value);\\n        callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n    }\\n\\n    function safeDecreaseAllowance(IERC20 token, address spender, uint256 value) internal {\\n        uint256 newAllowance = token.allowance(address(this), spender).sub(value, \\\"SafeERC20: decreased allowance below zero\\\");\\n        callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n    }\\n\\n    /**\\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\\n     * @param token The token targeted by the call.\\n     * @param data The call data (encoded using abi.encode or one of its variants).\\n     */\\n    function callOptionalReturn(IERC20 token, bytes memory data) private {\\n        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since\\n        // we're implementing it ourselves.\\n\\n        // A Solidity high level call has three parts:\\n        //  1. The target address is checked to verify it contains contract code\\n        //  2. The call itself is made, and success asserted\\n        //  3. The return value is decoded, which in turn checks the size of the returned data.\\n        // solhint-disable-next-line max-line-length\\n        require(address(token).isContract(), \\\"SafeERC20: call to non-contract\\\");\\n\\n        // solhint-disable-next-line avoid-low-level-calls\\n        (bool success, bytes memory returndata) = address(token).call(data);\\n        require(success, \\\"SafeERC20: low-level call failed\\\");\\n\\n        if (returndata.length > 0) { // Return data is optional\\n            // solhint-disable-next-line max-line-length\\n            require(abi.decode(returndata, (bool)), \\\"SafeERC20: ERC20 operation did not succeed\\\");\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x6f2c9955d65c522b80f4b8792f076512d2df947d2112cbc4d98a4781ed42ede2\"},\"@openzeppelin/contracts/utils/Address.sol\":{\"content\":\"pragma solidity ^0.5.5;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following \\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // According to EIP-1052, 0x0 is the value returned for not-yet created accounts\\n        // and 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470 is returned\\n        // for accounts without code, i.e. `keccak256('')`\\n        bytes32 codehash;\\n        bytes32 accountHash = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;\\n        // solhint-disable-next-line no-inline-assembly\\n        assembly { codehash := extcodehash(account) }\\n        return (codehash != accountHash && codehash != 0x0);\\n    }\\n\\n    /**\\n     * @dev Converts an `address` into `address payable`. Note that this is\\n     * simply a type cast: the actual underlying value is not changed.\\n     *\\n     * _Available since v2.4.0._\\n     */\\n    function toPayable(address account) internal pure returns (address payable) {\\n        return address(uint160(account));\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     *\\n     * _Available since v2.4.0._\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        // solhint-disable-next-line avoid-call-value\\n        (bool success, ) = recipient.call.value(amount)(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n}\\n\",\"keccak256\":\"0x1a8e5072509c5ea7365eb1d48030b9be865140c8fb779968da0a459a0e174a11\"},\"@openzeppelin/upgrades/contracts/Initializable.sol\":{\"content\":\"pragma solidity >=0.4.24 <0.7.0;\\n\\n\\n/**\\n * @title Initializable\\n *\\n * @dev Helper contract to support initializer functions. To use it, replace\\n * the constructor with a function that has the `initializer` modifier.\\n * WARNING: Unlike constructors, initializer functions must be manually\\n * invoked. This applies both to deploying an Initializable contract, as well\\n * as extending an Initializable contract via inheritance.\\n * WARNING: When used with inheritance, manual care must be taken to not invoke\\n * a parent initializer twice, or ensure that all initializers are idempotent,\\n * because this is not dealt with automatically as with constructors.\\n */\\ncontract Initializable {\\n\\n  /**\\n   * @dev Indicates that the contract has been initialized.\\n   */\\n  bool private initialized;\\n\\n  /**\\n   * @dev Indicates that the contract is in the process of being initialized.\\n   */\\n  bool private initializing;\\n\\n  /**\\n   * @dev Modifier to use in the initializer function of a contract.\\n   */\\n  modifier initializer() {\\n    require(initializing || isConstructor() || !initialized, \\\"Contract instance has already been initialized\\\");\\n\\n    bool isTopLevelCall = !initializing;\\n    if (isTopLevelCall) {\\n      initializing = true;\\n      initialized = true;\\n    }\\n\\n    _;\\n\\n    if (isTopLevelCall) {\\n      initializing = false;\\n    }\\n  }\\n\\n  /// @dev Returns true if and only if the function is running in the constructor\\n  function isConstructor() private view returns (bool) {\\n    // extcodesize checks the size of the code stored in an address, and\\n    // address returns the current address. Since the code is still not\\n    // deployed when running a constructor, any checks on its code size will\\n    // yield zero, making it an effective way to detect if a contract is\\n    // under construction or not.\\n    address self = address(this);\\n    uint256 cs;\\n    assembly { cs := extcodesize(self) }\\n    return cs == 0;\\n  }\\n\\n  // Reserved storage space to allow for layout changes in the future.\\n  uint256[50] private ______gap;\\n}\\n\",\"keccak256\":\"0x9bfec92e36234ecc99b5d37230acb6cd1f99560233753162204104a4897e8721\"},\"contracts/governance/Governable.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\n/**\\n * @title OUSD Governable Contract\\n * @dev Copy of the openzeppelin Ownable.sol contract with nomenclature change\\n *      from owner to governor and renounce methods removed. Does not use\\n *      Context.sol like Ownable.sol does for simplification.\\n * @author Origin Protocol Inc\\n */\\ncontract Governable {\\n    // Storage position of the owner and pendingOwner of the contract\\n    // keccak256(\\\"OUSD.governor\\\");\\n    bytes32\\n        private constant governorPosition = 0x7bea13895fa79d2831e0a9e28edede30099005a50d652d8957cf8a607ee6ca4a;\\n\\n    // keccak256(\\\"OUSD.pending.governor\\\");\\n    bytes32\\n        private constant pendingGovernorPosition = 0x44c4d30b2eaad5130ad70c3ba6972730566f3e6359ab83e800d905c61b1c51db;\\n\\n    // keccak256(\\\"OUSD.reentry.status\\\");\\n    bytes32\\n        private constant reentryStatusPosition = 0x53bf423e48ed90e97d02ab0ebab13b2a235a6bfbe9c321847d5c175333ac4535;\\n\\n    // See OpenZeppelin ReentrancyGuard implementation\\n    uint256 constant _NOT_ENTERED = 1;\\n    uint256 constant _ENTERED = 2;\\n\\n    event PendingGovernorshipTransfer(\\n        address indexed previousGovernor,\\n        address indexed newGovernor\\n    );\\n\\n    event GovernorshipTransferred(\\n        address indexed previousGovernor,\\n        address indexed newGovernor\\n    );\\n\\n    /**\\n     * @dev Initializes the contract setting the deployer as the initial Governor.\\n     */\\n    constructor() internal {\\n        _setGovernor(msg.sender);\\n        emit GovernorshipTransferred(address(0), _governor());\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current Governor.\\n     */\\n    function governor() public view returns (address) {\\n        return _governor();\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current Governor.\\n     */\\n    function _governor() internal view returns (address governorOut) {\\n        bytes32 position = governorPosition;\\n        assembly {\\n            governorOut := sload(position)\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the address of the pending Governor.\\n     */\\n    function _pendingGovernor()\\n        internal\\n        view\\n        returns (address pendingGovernor)\\n    {\\n        bytes32 position = pendingGovernorPosition;\\n        assembly {\\n            pendingGovernor := sload(position)\\n        }\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the Governor.\\n     */\\n    modifier onlyGovernor() {\\n        require(isGovernor(), \\\"Caller is not the Governor\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns true if the caller is the current Governor.\\n     */\\n    function isGovernor() public view returns (bool) {\\n        return msg.sender == _governor();\\n    }\\n\\n    function _setGovernor(address newGovernor) internal {\\n        bytes32 position = governorPosition;\\n        assembly {\\n            sstore(position, newGovernor)\\n        }\\n    }\\n\\n    /**\\n     * @dev Prevents a contract from calling itself, directly or indirectly.\\n     * Calling a `nonReentrant` function from another `nonReentrant`\\n     * function is not supported. It is possible to prevent this from happening\\n     * by making the `nonReentrant` function external, and make it call a\\n     * `private` function that does the actual work.\\n     */\\n    modifier nonReentrant() {\\n        bytes32 position = reentryStatusPosition;\\n        uint256 _reentry_status;\\n        assembly {\\n            _reentry_status := sload(position)\\n        }\\n\\n        // On the first call to nonReentrant, _notEntered will be true\\n        require(_reentry_status != _ENTERED, \\\"Reentrant call\\\");\\n\\n        // Any calls to nonReentrant after this point will fail\\n        assembly {\\n            sstore(position, _ENTERED)\\n        }\\n\\n        _;\\n\\n        // By storing the original value once again, a refund is triggered (see\\n        // https://eips.ethereum.org/EIPS/eip-2200)\\n        assembly {\\n            sstore(position, _NOT_ENTERED)\\n        }\\n    }\\n\\n    function _setPendingGovernor(address newGovernor) internal {\\n        bytes32 position = pendingGovernorPosition;\\n        assembly {\\n            sstore(position, newGovernor)\\n        }\\n    }\\n\\n    /**\\n     * @dev Transfers Governance of the contract to a new account (`newGovernor`).\\n     * Can only be called by the current Governor. Must be claimed for this to complete\\n     * @param _newGovernor Address of the new Governor\\n     */\\n    function transferGovernance(address _newGovernor) external onlyGovernor {\\n        _setPendingGovernor(_newGovernor);\\n        emit PendingGovernorshipTransfer(_governor(), _newGovernor);\\n    }\\n\\n    /**\\n     * @dev Claim Governance of the contract to a new account (`newGovernor`).\\n     * Can only be called by the new Governor.\\n     */\\n    function claimGovernance() external {\\n        require(\\n            msg.sender == _pendingGovernor(),\\n            \\\"Only the pending Governor can complete the claim\\\"\\n        );\\n        _changeGovernor(msg.sender);\\n    }\\n\\n    /**\\n     * @dev Change Governance of the contract to a new account (`newGovernor`).\\n     * @param _newGovernor Address of the new Governor\\n     */\\n    function _changeGovernor(address _newGovernor) internal {\\n        require(_newGovernor != address(0), \\\"New Governor is address(0)\\\");\\n        emit GovernorshipTransferred(_governor(), _newGovernor);\\n        _setGovernor(_newGovernor);\\n    }\\n}\\n\",\"keccak256\":\"0x3e51ea48102945bf4b305bf9722a07514a585a29555d92f8c84352d1a4cfcee1\"},\"contracts/interfaces/IBasicToken.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\ninterface IBasicToken {\\n    function symbol() external view returns (string memory);\\n\\n    function decimals() external view returns (uint8);\\n}\\n\",\"keccak256\":\"0x01eab42b6d54fa5389598e0663c24680ecc017e2da848e8ea1c40aeaa8225eef\"},\"contracts/interfaces/IMinMaxOracle.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\ninterface IMinMaxOracle {\\n    //Assuming 8 decimals\\n    function priceMin(string calldata symbol) external view returns (uint256);\\n\\n    function priceMax(string calldata symbol) external view returns (uint256);\\n}\\n\",\"keccak256\":\"0x164c8759ca5a8e39bbe1de6b2504098c543b2f15663c9d452e083418f8313f48\"},\"contracts/interfaces/IStrategy.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\n/**\\n * @title Platform interface to integrate with lending platform like Compound, AAVE etc.\\n */\\ninterface IStrategy {\\n    /**\\n     * @dev Deposit the given asset to Lending platform.\\n     * @param _asset asset address\\n     * @param _amount Amount to deposit\\n     */\\n    function deposit(address _asset, uint256 _amount) external;\\n\\n    /**\\n     * @dev Withdraw given asset from Lending platform\\n     */\\n    function withdraw(\\n        address _recipient,\\n        address _asset,\\n        uint256 _amount\\n    ) external;\\n\\n    /**\\n     * @dev Liquidate all assets in strategy and return them to Vault.\\n     */\\n    function withdrawAll() external;\\n\\n    /**\\n     * @dev Returns the current balance of the given asset.\\n     */\\n    function checkBalance(address _asset)\\n        external\\n        view\\n        returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns bool indicating whether strategy supports asset.\\n     */\\n    function supportsAsset(address _asset) external view returns (bool);\\n\\n    /**\\n     * @dev Collect reward tokens from the Strategy.\\n     */\\n    function collectRewardToken() external;\\n\\n    /**\\n     * @dev The address of the reward token for the Strategy.\\n     */\\n    function rewardTokenAddress() external pure returns (address);\\n\\n    /**\\n     * @dev The threshold (denominated in the reward token) over which the\\n     * vault will auto harvest on allocate calls.\\n     */\\n    function rewardLiquidationThreshold() external pure returns (uint256);\\n}\\n\",\"keccak256\":\"0xa9ef9546d60635c630e3446f270bc93f34593f5c77db8c671146f6c1eb0b2774\"},\"contracts/interfaces/uniswap/IUniswapV2Router02.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\ninterface IUniswapV2Router {\\n    function WETH() external pure returns (address);\\n\\n    function swapExactTokensForTokens(\\n        uint256 amountIn,\\n        uint256 amountOutMin,\\n        address[] calldata path,\\n        address to,\\n        uint256 deadline\\n    ) external returns (uint256[] memory amounts);\\n\\n    function addLiquidity(\\n        address tokenA,\\n        address tokenB,\\n        uint256 amountADesired,\\n        uint256 amountBDesired,\\n        uint256 amountAMin,\\n        uint256 amountBMin,\\n        address to,\\n        uint256 deadline\\n    )\\n        external\\n        returns (\\n            uint256 amountA,\\n            uint256 amountB,\\n            uint256 liquidity\\n        );\\n}\\n\",\"keccak256\":\"0x33943cfab99996faa745df3c21b95b3ed49783b4c3392e4c71e25f6712af509b\"},\"contracts/token/OUSD.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\n/**\\n * @title OUSD Token Contract\\n * @dev ERC20 compatible contract for OUSD\\n * @dev Implements an elastic supply\\n * @author Origin Protocol Inc\\n */\\nimport { SafeMath } from \\\"@openzeppelin/contracts/math/SafeMath.sol\\\";\\nimport {\\n    Initializable\\n} from \\\"@openzeppelin/upgrades/contracts/Initializable.sol\\\";\\nimport { Address } from \\\"@openzeppelin/contracts/utils/Address.sol\\\";\\n\\nimport {\\n    InitializableERC20Detailed\\n} from \\\"../utils/InitializableERC20Detailed.sol\\\";\\nimport { StableMath } from \\\"../utils/StableMath.sol\\\";\\nimport { Governable } from \\\"../governance/Governable.sol\\\";\\n\\n/**\\n * NOTE that this is an ERC20 token but the invariant that the sum of\\n * balanceOf(x) for all x is not >= totalSupply(). This is a consequence of the\\n * rebasing design. Any integrations with OUSD should be aware.\\n */\\n\\ncontract OUSD is Initializable, InitializableERC20Detailed, Governable {\\n    using SafeMath for uint256;\\n    using StableMath for uint256;\\n\\n    event TotalSupplyUpdated(\\n        uint256 totalSupply,\\n        uint256 rebasingCredits,\\n        uint256 rebasingCreditsPerToken\\n    );\\n\\n    // MAX_SUPPLY is chosen to guarantee applied changes to _totalSupply in\\n    // changeSupply(_newTotalSupply) deviate from the value provided in\\n    // _newTotalSupply by < 1\\n    uint256 private constant MAX_SUPPLY = ~uint128(0); // (2^128) - 1\\n\\n    uint256 public _totalSupply;\\n    uint256 public rebasingCredits;\\n    // Exchange rate between internal credits and OUSD\\n    uint256 public rebasingCreditsPerToken;\\n\\n    mapping(address => uint256) private _deprecated_creditBalances;\\n\\n    // Allowances denominated in OUSD\\n    mapping(address => mapping(address => uint256)) private _allowances;\\n\\n    address public vaultAddress = address(0);\\n\\n    // Frozen address/credits are non rebasing (value is held in contracts which\\n    // do not receive yield unless they explicitly opt in)\\n    uint256 public _deprecated_nonRebasingCredits;\\n    uint256 public nonRebasingSupply;\\n    mapping(address => uint256) public nonRebasingCreditsPerToken;\\n    enum RebaseOptions { NotSet, OptOut, OptIn }\\n    mapping(address => RebaseOptions) public rebaseState;\\n\\n    mapping(address => uint256) private _creditBalances;\\n\\n    function initialize(\\n        string calldata _nameArg,\\n        string calldata _symbolArg,\\n        address _vaultAddress\\n    ) external onlyGovernor initializer {\\n        InitializableERC20Detailed._initialize(_nameArg, _symbolArg, 18);\\n        rebasingCreditsPerToken = 1e18;\\n        vaultAddress = _vaultAddress;\\n    }\\n\\n    /**\\n     * @dev Verifies that the caller is the Savings Manager contract\\n     */\\n    modifier onlyVault() {\\n        require(vaultAddress == msg.sender, \\\"Caller is not the Vault\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @return The total supply of OUSD.\\n     */\\n    function totalSupply() public view returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     * @dev Gets the balance of the specified address.\\n     * @param _account Address to query the balance of.\\n     * @return A uint256 representing the _amount of base units owned by the\\n     *         specified address.\\n     */\\n    function balanceOf(address _account) public view returns (uint256) {\\n        if (_creditBalances[_account] == 0) return 0;\\n        return\\n            _creditBalances[_account].divPrecisely(_creditsPerToken(_account));\\n    }\\n\\n    /**\\n     * @dev Gets the credits balance of the specified address.\\n     * @param _account The address to query the balance of.\\n     * @return (uint256, uint256) Credit balance and credits per token of the\\n     *         address\\n     */\\n    function creditsBalanceOf(address _account)\\n        public\\n        view\\n        returns (uint256, uint256)\\n    {\\n        return (_creditBalances[_account], _creditsPerToken(_account));\\n    }\\n\\n    /**\\n     * @dev Transfer tokens to a specified address.\\n     * @param _to the address to transfer to.\\n     * @param _value the _amount to be transferred.\\n     * @return true on success.\\n     */\\n    function transfer(address _to, uint256 _value) public returns (bool) {\\n        require(_to != address(0), \\\"Transfer to zero address\\\");\\n        require(\\n            _value <= balanceOf(msg.sender),\\n            \\\"Transfer greater than balance\\\"\\n        );\\n\\n        _executeTransfer(msg.sender, _to, _value);\\n\\n        emit Transfer(msg.sender, _to, _value);\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Transfer tokens from one address to another.\\n     * @param _from The address you want to send tokens from.\\n     * @param _to The address you want to transfer to.\\n     * @param _value The _amount of tokens to be transferred.\\n     */\\n    function transferFrom(\\n        address _from,\\n        address _to,\\n        uint256 _value\\n    ) public returns (bool) {\\n        require(_to != address(0), \\\"Transfer to zero address\\\");\\n        require(_value <= balanceOf(_from), \\\"Transfer greater than balance\\\");\\n\\n        _allowances[_from][msg.sender] = _allowances[_from][msg.sender].sub(\\n            _value\\n        );\\n\\n        _executeTransfer(_from, _to, _value);\\n\\n        emit Transfer(_from, _to, _value);\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Update the count of non rebasing credits in response to a transfer\\n     * @param _from The address you want to send tokens from.\\n     * @param _to The address you want to transfer to.\\n     * @param _value Amount of OUSD to transfer\\n     */\\n    function _executeTransfer(\\n        address _from,\\n        address _to,\\n        uint256 _value\\n    ) internal {\\n        bool isNonRebasingTo = _isNonRebasingAccount(_to);\\n        bool isNonRebasingFrom = _isNonRebasingAccount(_from);\\n\\n        // Credits deducted and credited might be different due to the\\n        // differing creditsPerToken used by each account\\n        uint256 creditsCredited = _value.mulTruncate(_creditsPerToken(_to));\\n        uint256 creditsDeducted = _value.mulTruncate(_creditsPerToken(_from));\\n\\n        _creditBalances[_from] = _creditBalances[_from].sub(\\n            creditsDeducted,\\n            \\\"Transfer amount exceeds balance\\\"\\n        );\\n        _creditBalances[_to] = _creditBalances[_to].add(creditsCredited);\\n\\n        if (isNonRebasingTo && !isNonRebasingFrom) {\\n            // Transfer to non-rebasing account from rebasing account, credits\\n            // are removed from the non rebasing tally\\n            nonRebasingSupply = nonRebasingSupply.add(_value);\\n            // Update rebasingCredits by subtracting the deducted amount\\n            rebasingCredits = rebasingCredits.sub(creditsDeducted);\\n        } else if (!isNonRebasingTo && isNonRebasingFrom) {\\n            // Transfer to rebasing account from non-rebasing account\\n            // Decreasing non-rebasing credits by the amount that was sent\\n            nonRebasingSupply = nonRebasingSupply.sub(_value);\\n            // Update rebasingCredits by adding the credited amount\\n            rebasingCredits = rebasingCredits.add(creditsCredited);\\n        }\\n    }\\n\\n    /**\\n     * @dev Function to check the _amount of tokens that an owner has allowed to a _spender.\\n     * @param _owner The address which owns the funds.\\n     * @param _spender The address which will spend the funds.\\n     * @return The number of tokens still available for the _spender.\\n     */\\n    function allowance(address _owner, address _spender)\\n        public\\n        view\\n        returns (uint256)\\n    {\\n        return _allowances[_owner][_spender];\\n    }\\n\\n    /**\\n     * @dev Approve the passed address to spend the specified _amount of tokens on behalf of\\n     * msg.sender. This method is included for ERC20 compatibility.\\n     * increaseAllowance and decreaseAllowance should be used instead.\\n     * Changing an allowance with this method brings the risk that someone may transfer both\\n     * the old and the new allowance - if they are both greater than zero - if a transfer\\n     * transaction is mined before the later approve() call is mined.\\n     *\\n     * @param _spender The address which will spend the funds.\\n     * @param _value The _amount of tokens to be spent.\\n     */\\n    function approve(address _spender, uint256 _value) public returns (bool) {\\n        _allowances[msg.sender][_spender] = _value;\\n        emit Approval(msg.sender, _spender, _value);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Increase the _amount of tokens that an owner has allowed to a _spender.\\n     * This method should be used instead of approve() to avoid the double approval vulnerability\\n     * described above.\\n     * @param _spender The address which will spend the funds.\\n     * @param _addedValue The _amount of tokens to increase the allowance by.\\n     */\\n    function increaseAllowance(address _spender, uint256 _addedValue)\\n        public\\n        returns (bool)\\n    {\\n        _allowances[msg.sender][_spender] = _allowances[msg.sender][_spender]\\n            .add(_addedValue);\\n        emit Approval(msg.sender, _spender, _allowances[msg.sender][_spender]);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Decrease the _amount of tokens that an owner has allowed to a _spender.\\n     * @param _spender The address which will spend the funds.\\n     * @param _subtractedValue The _amount of tokens to decrease the allowance by.\\n     */\\n    function decreaseAllowance(address _spender, uint256 _subtractedValue)\\n        public\\n        returns (bool)\\n    {\\n        uint256 oldValue = _allowances[msg.sender][_spender];\\n        if (_subtractedValue >= oldValue) {\\n            _allowances[msg.sender][_spender] = 0;\\n        } else {\\n            _allowances[msg.sender][_spender] = oldValue.sub(_subtractedValue);\\n        }\\n        emit Approval(msg.sender, _spender, _allowances[msg.sender][_spender]);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Mints new tokens, increasing totalSupply.\\n     */\\n    function mint(address _account, uint256 _amount) external onlyVault {\\n        return _mint(_account, _amount);\\n    }\\n\\n    /**\\n     * @dev Creates `_amount` tokens and assigns them to `_account`, increasing\\n     * the total supply.\\n     *\\n     * Emits a {Transfer} event with `from` set to the zero address.\\n     *\\n     * Requirements\\n     *\\n     * - `to` cannot be the zero address.\\n     */\\n    function _mint(address _account, uint256 _amount) internal nonReentrant {\\n        require(_account != address(0), \\\"Mint to the zero address\\\");\\n\\n        bool isNonRebasingAccount = _isNonRebasingAccount(_account);\\n\\n        uint256 creditAmount = _amount.mulTruncate(_creditsPerToken(_account));\\n        _creditBalances[_account] = _creditBalances[_account].add(creditAmount);\\n\\n        // If the account is non rebasing and doesn't have a set creditsPerToken\\n        // then set it i.e. this is a mint from a fresh contract\\n        if (isNonRebasingAccount) {\\n            nonRebasingSupply = nonRebasingSupply.add(_amount);\\n        } else {\\n            rebasingCredits = rebasingCredits.add(creditAmount);\\n        }\\n\\n        _totalSupply = _totalSupply.add(_amount);\\n\\n        require(_totalSupply < MAX_SUPPLY, \\\"Max supply\\\");\\n\\n        emit Transfer(address(0), _account, _amount);\\n    }\\n\\n    /**\\n     * @dev Burns tokens, decreasing totalSupply.\\n     */\\n    function burn(address account, uint256 amount) external onlyVault {\\n        return _burn(account, amount);\\n    }\\n\\n    /**\\n     * @dev Destroys `_amount` tokens from `_account`, reducing the\\n     * total supply.\\n     *\\n     * Emits a {Transfer} event with `to` set to the zero address.\\n     *\\n     * Requirements\\n     *\\n     * - `_account` cannot be the zero address.\\n     * - `_account` must have at least `_amount` tokens.\\n     */\\n    function _burn(address _account, uint256 _amount) internal nonReentrant {\\n        require(_account != address(0), \\\"Burn from the zero address\\\");\\n\\n        bool isNonRebasingAccount = _isNonRebasingAccount(_account);\\n        uint256 creditAmount = _amount.mulTruncate(_creditsPerToken(_account));\\n        uint256 currentCredits = _creditBalances[_account];\\n\\n        // Remove the credits, burning rounding errors\\n        if (\\n            currentCredits == creditAmount || currentCredits - 1 == creditAmount\\n        ) {\\n            // Handle dust from rounding\\n            _creditBalances[_account] = 0;\\n        } else if (currentCredits > creditAmount) {\\n            _creditBalances[_account] = _creditBalances[_account].sub(\\n                creditAmount\\n            );\\n        } else {\\n            revert(\\\"Remove exceeds balance\\\");\\n        }\\n\\n        // Remove from the credit tallies and non-rebasing supply\\n        if (isNonRebasingAccount) {\\n            nonRebasingSupply = nonRebasingSupply.sub(_amount);\\n        } else {\\n            rebasingCredits = rebasingCredits.sub(creditAmount);\\n        }\\n\\n        _totalSupply = _totalSupply.sub(_amount);\\n\\n        emit Transfer(_account, address(0), _amount);\\n    }\\n\\n    /**\\n     * @dev Get the credits per token for an account. Returns a fixed amount\\n     *      if the account is non-rebasing.\\n     * @param _account Address of the account.\\n     */\\n    function _creditsPerToken(address _account)\\n        internal\\n        view\\n        returns (uint256)\\n    {\\n        if (nonRebasingCreditsPerToken[_account] != 0) {\\n            return nonRebasingCreditsPerToken[_account];\\n        } else {\\n            return rebasingCreditsPerToken;\\n        }\\n    }\\n\\n    /**\\n     * @dev Is an accounts balance non rebasing, i.e. does not alter with rebases\\n     * @param _account Address of the account.\\n     */\\n    function _isNonRebasingAccount(address _account) internal returns (bool) {\\n        if (Address.isContract(_account)) {\\n            // Contracts by default opt out\\n            if (rebaseState[_account] == RebaseOptions.OptIn) {\\n                // If they've opted in explicitly it is not a non rebasing\\n                // address\\n                return false;\\n            }\\n            // Is a non rebasing account because no explicit opt in\\n            // Make sure the rebasing/non-rebasing supply is updated and\\n            // fixed credits per token is set for this account\\n            _ensureRebasingMigration(_account);\\n            return true;\\n        } else {\\n            // EOAs by default opt in\\n            // Check for explicit opt out\\n            return rebaseState[_account] == RebaseOptions.OptOut;\\n        }\\n    }\\n\\n    /**\\n     * @dev Ensures internal account for rebasing and non-rebasing credits and\\n     *      supply is updated following deployment of frozen yield change.\\n     */\\n    function _ensureRebasingMigration(address _account) internal {\\n        if (nonRebasingCreditsPerToken[_account] == 0) {\\n            // Set fixed credits per token for this account\\n            nonRebasingCreditsPerToken[_account] = rebasingCreditsPerToken;\\n            // Update non rebasing supply\\n            nonRebasingSupply = nonRebasingSupply.add(balanceOf(_account));\\n            // Update credit tallies\\n            rebasingCredits = rebasingCredits.sub(_creditBalances[_account]);\\n        }\\n    }\\n\\n    /**\\n     * @dev Add a contract address to the non rebasing exception list. I.e. the\\n     * address's balance will be part of rebases so the account will be exposed\\n     * to upside and downside.\\n     */\\n    function rebaseOptIn() public nonReentrant {\\n        require(_isNonRebasingAccount(msg.sender), \\\"Account has not opted out\\\");\\n\\n        // Convert balance into the same amount at the current exchange rate\\n        uint256 newCreditBalance = _creditBalances[msg.sender]\\n            .mul(rebasingCreditsPerToken)\\n            .div(_creditsPerToken(msg.sender));\\n\\n        // Decreasing non rebasing supply\\n        nonRebasingSupply = nonRebasingSupply.sub(balanceOf(msg.sender));\\n\\n        _creditBalances[msg.sender] = newCreditBalance;\\n\\n        // Increase rebasing credits, totalSupply remains unchanged so no\\n        // adjustment necessary\\n        rebasingCredits = rebasingCredits.add(_creditBalances[msg.sender]);\\n\\n        rebaseState[msg.sender] = RebaseOptions.OptIn;\\n\\n        // Delete any fixed credits per token\\n        delete nonRebasingCreditsPerToken[msg.sender];\\n    }\\n\\n    /**\\n     * @dev Remove a contract address to the non rebasing exception list.\\n     */\\n    function rebaseOptOut() public nonReentrant {\\n        require(!_isNonRebasingAccount(msg.sender), \\\"Account has not opted in\\\");\\n\\n        // Increase non rebasing supply\\n        nonRebasingSupply = nonRebasingSupply.add(balanceOf(msg.sender));\\n        // Set fixed credits per token\\n        nonRebasingCreditsPerToken[msg.sender] = rebasingCreditsPerToken;\\n\\n        // Decrease rebasing credits, total supply remains unchanged so no\\n        // adjustment necessary\\n        rebasingCredits = rebasingCredits.sub(_creditBalances[msg.sender]);\\n\\n        // Mark explicitly opted out of rebasing\\n        rebaseState[msg.sender] = RebaseOptions.OptOut;\\n    }\\n\\n    /**\\n     * @dev Modify the supply without minting new tokens. This uses a change in\\n     *      the exchange rate between \\\"credits\\\" and OUSD tokens to change balances.\\n     * @param _newTotalSupply New total supply of OUSD.\\n     * @return uint256 representing the new total supply.\\n     */\\n    function changeSupply(uint256 _newTotalSupply)\\n        external\\n        onlyVault\\n        nonReentrant\\n    {\\n        require(_totalSupply > 0, \\\"Cannot increase 0 supply\\\");\\n\\n        if (_totalSupply == _newTotalSupply) {\\n            emit TotalSupplyUpdated(\\n                _totalSupply,\\n                rebasingCredits,\\n                rebasingCreditsPerToken\\n            );\\n            return;\\n        }\\n\\n        _totalSupply = _newTotalSupply > MAX_SUPPLY\\n            ? MAX_SUPPLY\\n            : _newTotalSupply;\\n\\n        rebasingCreditsPerToken = rebasingCredits.divPrecisely(\\n            _totalSupply.sub(nonRebasingSupply)\\n        );\\n\\n        require(rebasingCreditsPerToken > 0, \\\"Invalid change in supply\\\");\\n\\n        _totalSupply = rebasingCredits\\n            .divPrecisely(rebasingCreditsPerToken)\\n            .add(nonRebasingSupply);\\n\\n        emit TotalSupplyUpdated(\\n            _totalSupply,\\n            rebasingCredits,\\n            rebasingCreditsPerToken\\n        );\\n    }\\n}\\n\",\"keccak256\":\"0x18d15a386750d93a6252becc33d8df577a397c0ea44135a7208ce33bb65233c6\"},\"contracts/utils/Helpers.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\nimport { IBasicToken } from \\\"../interfaces/IBasicToken.sol\\\";\\n\\nlibrary Helpers {\\n    /**\\n     * @notice Fetch the `symbol()` from an ERC20 token\\n     * @dev Grabs the `symbol()` from a contract\\n     * @param _token Address of the ERC20 token\\n     * @return string Symbol of the ERC20 token\\n     */\\n    function getSymbol(address _token) internal view returns (string memory) {\\n        string memory symbol = IBasicToken(_token).symbol();\\n        return symbol;\\n    }\\n\\n    /**\\n     * @notice Fetch the `decimals()` from an ERC20 token\\n     * @dev Grabs the `decimals()` from a contract and fails if\\n     *      the decimal value does not live within a certain range\\n     * @param _token Address of the ERC20 token\\n     * @return uint256 Decimals of the ERC20 token\\n     */\\n    function getDecimals(address _token) internal view returns (uint256) {\\n        uint256 decimals = IBasicToken(_token).decimals();\\n        require(\\n            decimals >= 4 && decimals <= 18,\\n            \\\"Token must have sufficient decimal places\\\"\\n        );\\n\\n        return decimals;\\n    }\\n}\\n\",\"keccak256\":\"0xd2ca92e0af883dc1aec5b22caced274e59829e0e30a9e955dcc48b8d921f5cdc\"},\"contracts/utils/InitializableERC20Detailed.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\nimport { IERC20 } from \\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\";\\n\\n/**\\n * @dev Optional functions from the ERC20 standard.\\n * Converted from openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\\n */\\ncontract InitializableERC20Detailed is IERC20 {\\n    // Ignore these, they are present to align storage slots correctly after\\n    // upgrade\\n    mapping(address => uint256) private __gap1;\\n    mapping(address => mapping(address => uint256)) private __gap2;\\n    uint256 private constant __gap3 = 0;\\n\\n    string private _name;\\n    string private _symbol;\\n    uint8 private _decimals;\\n\\n    /**\\n     * @dev Sets the values for `name`, `symbol`, and `decimals`. All three of\\n     * these values are immutable: they can only be set once during\\n     * construction.\\n     * @notice To avoid variable shadowing appended `Arg` after arguments name.\\n     */\\n    function _initialize(\\n        string memory nameArg,\\n        string memory symbolArg,\\n        uint8 decimalsArg\\n    ) internal {\\n        _name = nameArg;\\n        _symbol = symbolArg;\\n        _decimals = decimalsArg;\\n    }\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() public view returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() public view returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5,05` (`505 / 10 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei.\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\n     */\\n    function decimals() public view returns (uint8) {\\n        return _decimals;\\n    }\\n}\\n\",\"keccak256\":\"0xdb555620ce66bb4a07890e352683b0e6777fb06585935e5ce3ab80e6282c96ce\"},\"contracts/utils/StableMath.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\nimport { SafeMath } from \\\"@openzeppelin/contracts/math/SafeMath.sol\\\";\\n\\n// Based on StableMath from Stability Labs Pty. Ltd.\\n// https://github.com/mstable/mStable-contracts/blob/master/contracts/shared/StableMath.sol\\n\\nlibrary StableMath {\\n    using SafeMath for uint256;\\n\\n    /**\\n     * @dev Scaling unit for use in specific calculations,\\n     * where 1 * 10**18, or 1e18 represents a unit '1'\\n     */\\n    uint256 private constant FULL_SCALE = 1e18;\\n\\n    /***************************************\\n                    Helpers\\n    ****************************************/\\n\\n    /**\\n     * @dev Adjust the scale of an integer\\n     * @param adjustment Amount to adjust by e.g. scaleBy(1e18, -1) == 1e17\\n     */\\n    function scaleBy(uint256 x, int8 adjustment)\\n        internal\\n        pure\\n        returns (uint256)\\n    {\\n        if (adjustment > 0) {\\n            x = x.mul(10**uint256(adjustment));\\n        } else if (adjustment < 0) {\\n            x = x.div(10**uint256(adjustment * -1));\\n        }\\n        return x;\\n    }\\n\\n    /***************************************\\n               Precise Arithmetic\\n    ****************************************/\\n\\n    /**\\n     * @dev Multiplies two precise units, and then truncates by the full scale\\n     * @param x Left hand input to multiplication\\n     * @param y Right hand input to multiplication\\n     * @return Result after multiplying the two inputs and then dividing by the shared\\n     *         scale unit\\n     */\\n    function mulTruncate(uint256 x, uint256 y) internal pure returns (uint256) {\\n        return mulTruncateScale(x, y, FULL_SCALE);\\n    }\\n\\n    /**\\n     * @dev Multiplies two precise units, and then truncates by the given scale. For example,\\n     * when calculating 90% of 10e18, (10e18 * 9e17) / 1e18 = (9e36) / 1e18 = 9e18\\n     * @param x Left hand input to multiplication\\n     * @param y Right hand input to multiplication\\n     * @param scale Scale unit\\n     * @return Result after multiplying the two inputs and then dividing by the shared\\n     *         scale unit\\n     */\\n    function mulTruncateScale(\\n        uint256 x,\\n        uint256 y,\\n        uint256 scale\\n    ) internal pure returns (uint256) {\\n        // e.g. assume scale = fullScale\\n        // z = 10e18 * 9e17 = 9e36\\n        uint256 z = x.mul(y);\\n        // return 9e38 / 1e18 = 9e18\\n        return z.div(scale);\\n    }\\n\\n    /**\\n     * @dev Multiplies two precise units, and then truncates by the full scale, rounding up the result\\n     * @param x Left hand input to multiplication\\n     * @param y Right hand input to multiplication\\n     * @return Result after multiplying the two inputs and then dividing by the shared\\n     *          scale unit, rounded up to the closest base unit.\\n     */\\n    function mulTruncateCeil(uint256 x, uint256 y)\\n        internal\\n        pure\\n        returns (uint256)\\n    {\\n        // e.g. 8e17 * 17268172638 = 138145381104e17\\n        uint256 scaled = x.mul(y);\\n        // e.g. 138145381104e17 + 9.99...e17 = 138145381113.99...e17\\n        uint256 ceil = scaled.add(FULL_SCALE.sub(1));\\n        // e.g. 13814538111.399...e18 / 1e18 = 13814538111\\n        return ceil.div(FULL_SCALE);\\n    }\\n\\n    /**\\n     * @dev Precisely divides two units, by first scaling the left hand operand. Useful\\n     *      for finding percentage weightings, i.e. 8e18/10e18 = 80% (or 8e17)\\n     * @param x Left hand input to division\\n     * @param y Right hand input to division\\n     * @return Result after multiplying the left operand by the scale, and\\n     *         executing the division on the right hand input.\\n     */\\n    function divPrecisely(uint256 x, uint256 y)\\n        internal\\n        pure\\n        returns (uint256)\\n    {\\n        // e.g. 8e18 * 1e18 = 8e36\\n        uint256 z = x.mul(FULL_SCALE);\\n        // e.g. 8e36 / 10e18 = 8e17\\n        return z.div(y);\\n    }\\n}\\n\",\"keccak256\":\"0xa77fccf850feb6d54ba3a6530f92554caef8a67a1ceb573d4f8a5d1bf64ff9d2\"},\"contracts/vault/Vault.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\n/**\\n * @title OUSD VaultInitializer Contract\\n * @notice The VaultInitializer sets up the initial contract.\\n * @author Origin Protocol Inc\\n */\\nimport { VaultInitializer } from \\\"./VaultInitializer.sol\\\";\\nimport { VaultAdmin } from \\\"./VaultAdmin.sol\\\";\\n\\ncontract Vault is VaultInitializer, VaultAdmin {}\\n\",\"keccak256\":\"0xaea51ff625d7c1581fde21141efda6548dcc0190f65c8a712f6b5099a8f5b4ea\"},\"contracts/vault/VaultAdmin.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\n/**\\n * @title OUSD Vault Admin Contract\\n * @notice The VaultAdmin contract makes configuration and admin calls on the vault.\\n * @author Origin Protocol Inc\\n */\\n\\nimport \\\"./VaultStorage.sol\\\";\\nimport { IMinMaxOracle } from \\\"../interfaces/IMinMaxOracle.sol\\\";\\nimport { IUniswapV2Router } from \\\"../interfaces/uniswap/IUniswapV2Router02.sol\\\";\\n\\ncontract VaultAdmin is VaultStorage {\\n    /**\\n     * @dev Verifies that the caller is the Vault or Governor.\\n     */\\n    modifier onlyVaultOrGovernor() {\\n        require(\\n            msg.sender == address(this) || isGovernor(),\\n            \\\"Caller is not the Vault or Governor\\\"\\n        );\\n        _;\\n    }\\n\\n    modifier onlyGovernorOrStrategist() {\\n        require(\\n            msg.sender == strategistAddr || isGovernor(),\\n            \\\"Caller is not the Strategist or Governor\\\"\\n        );\\n        _;\\n    }\\n\\n    /***************************************\\n                 Configuration\\n    ****************************************/\\n\\n    /**\\n     * @dev Set address of price provider.\\n     * @param _priceProvider Address of price provider\\n     */\\n    function setPriceProvider(address _priceProvider) external onlyGovernor {\\n        priceProvider = _priceProvider;\\n        emit PriceProviderUpdated(_priceProvider);\\n    }\\n\\n    /**\\n     * @dev Set a fee in basis points to be charged for a redeem.\\n     * @param _redeemFeeBps Basis point fee to be charged\\n     */\\n    function setRedeemFeeBps(uint256 _redeemFeeBps) external onlyGovernor {\\n        redeemFeeBps = _redeemFeeBps;\\n        emit RedeemFeeUpdated(_redeemFeeBps);\\n    }\\n\\n    /**\\n     * @dev Set a buffer of assets to keep in the Vault to handle most\\n     * redemptions without needing to spend gas unwinding assets from a Strategy.\\n     * @param _vaultBuffer Percentage using 18 decimals. 100% = 1e18.\\n     */\\n    function setVaultBuffer(uint256 _vaultBuffer) external onlyGovernor {\\n        require(_vaultBuffer <= 1e18, \\\"Invalid value\\\");\\n        vaultBuffer = _vaultBuffer;\\n        emit VaultBufferUpdated(_vaultBuffer);\\n    }\\n\\n    /**\\n     * @dev Sets the minimum amount of OUSD in a mint to trigger an\\n     * automatic allocation of funds afterwords.\\n     * @param _threshold OUSD amount with 18 fixed decimals.\\n     */\\n    function setAutoAllocateThreshold(uint256 _threshold)\\n        external\\n        onlyGovernor\\n    {\\n        autoAllocateThreshold = _threshold;\\n        emit AllocateThresholdUpdated(_threshold);\\n    }\\n\\n    /**\\n     * @dev Set a minimum amount of OUSD in a mint or redeem that triggers a\\n     * rebase\\n     * @param _threshold OUSD amount with 18 fixed decimals.\\n     */\\n    function setRebaseThreshold(uint256 _threshold) external onlyGovernor {\\n        rebaseThreshold = _threshold;\\n        emit RebaseThresholdUpdated(_threshold);\\n    }\\n\\n    /**\\n     * @dev Set address of Uniswap for performing liquidation of strategy reward\\n     * tokens\\n     * @param _address Address of Uniswap\\n     */\\n    function setUniswapAddr(address _address) external onlyGovernor {\\n        uniswapAddr = _address;\\n        emit UniswapUpdated(_address);\\n    }\\n\\n    /**\\n     * @dev Set address of Strategist\\n     * @param _address Address of Strategist\\n     */\\n    function setStrategistAddr(address _address) external onlyGovernor {\\n        strategistAddr = _address;\\n        emit StrategistUpdated(_address);\\n    }\\n\\n    /**\\n     * @dev Set the default Strategy for an asset, i.e. the one which the asset\\n            will be automatically allocated to and withdrawn from\\n     * @param _asset Address of the asset\\n     * @param _strategy Address of the Strategy\\n     */\\n    function setAssetDefaultStrategy(address _asset, address _strategy)\\n        external\\n        onlyGovernorOrStrategist\\n    {\\n        emit AssetDefaultStrategyUpdated(_asset, _strategy);\\n        require(strategies[_strategy].isSupported, \\\"Strategy not approved\\\");\\n        IStrategy strategy = IStrategy(_strategy);\\n        require(assets[_asset].isSupported, \\\"Asset is not supported\\\");\\n        require(\\n            strategy.supportsAsset(_asset),\\n            \\\"Asset not supported by Strategy\\\"\\n        );\\n        assetDefaultStrategies[_asset] = _strategy;\\n    }\\n\\n    /**\\n     * @dev Add a supported asset to the contract, i.e. one that can be\\n     *         to mint OUSD.\\n     * @param _asset Address of asset\\n     */\\n    function supportAsset(address _asset) external onlyGovernor {\\n        require(!assets[_asset].isSupported, \\\"Asset already supported\\\");\\n\\n        assets[_asset] = Asset({ isSupported: true });\\n        allAssets.push(_asset);\\n\\n        emit AssetSupported(_asset);\\n    }\\n\\n    /**\\n     * @dev Add a strategy to the Vault.\\n     * @param _addr Address of the strategy to add\\n     */\\n    function approveStrategy(address _addr) external onlyGovernor {\\n        require(!strategies[_addr].isSupported, \\\"Strategy already approved\\\");\\n        strategies[_addr] = Strategy({ isSupported: true, _deprecated: 0 });\\n        allStrategies.push(_addr);\\n        emit StrategyApproved(_addr);\\n    }\\n\\n    /**\\n     * @dev Remove a strategy from the Vault. Removes all invested assets and\\n     * returns them to the Vault.\\n     * @param _addr Address of the strategy to remove\\n     */\\n\\n    function removeStrategy(address _addr) external onlyGovernor {\\n        require(strategies[_addr].isSupported, \\\"Strategy not approved\\\");\\n\\n        // Initialize strategyIndex with out of bounds result so function will\\n        // revert if no valid index found\\n        uint256 strategyIndex = allStrategies.length;\\n        for (uint256 i = 0; i < allStrategies.length; i++) {\\n            if (allStrategies[i] == _addr) {\\n                strategyIndex = i;\\n                break;\\n            }\\n        }\\n\\n        if (strategyIndex < allStrategies.length) {\\n            allStrategies[strategyIndex] = allStrategies[allStrategies.length -\\n                1];\\n            allStrategies.pop();\\n\\n            // Withdraw all assets\\n            IStrategy strategy = IStrategy(_addr);\\n            strategy.withdrawAll();\\n            // Call harvest after withdraw in case withdraw triggers\\n            // distribution of additional reward tokens (true for Compound)\\n            _harvest(_addr);\\n            emit StrategyRemoved(_addr);\\n        }\\n\\n        // Clean up struct in mapping, this can be removed later\\n        // See https://github.com/OriginProtocol/origin-dollar/issues/324\\n        strategies[_addr].isSupported = false;\\n    }\\n\\n    /**\\n     * @notice Move assets from one Strategy to another\\n     * @param _strategyFromAddress Address of Strategy to move assets from.\\n     * @param _strategyToAddress Address of Strategy to move assets to.\\n     * @param _assets Array of asset address that will be moved\\n     * @param _amounts Array of amounts of each corresponding asset to move.\\n     */\\n    function reallocate(\\n        address _strategyFromAddress,\\n        address _strategyToAddress,\\n        address[] calldata _assets,\\n        uint256[] calldata _amounts\\n    ) external onlyGovernorOrStrategist {\\n        require(\\n            strategies[_strategyFromAddress].isSupported,\\n            \\\"Invalid from Strategy\\\"\\n        );\\n        require(\\n            strategies[_strategyToAddress].isSupported,\\n            \\\"Invalid to Strategy\\\"\\n        );\\n        require(_assets.length == _amounts.length, \\\"Parameter length mismatch\\\");\\n\\n        IStrategy strategyFrom = IStrategy(_strategyFromAddress);\\n        IStrategy strategyTo = IStrategy(_strategyToAddress);\\n\\n        for (uint256 i = 0; i < _assets.length; i++) {\\n            require(strategyTo.supportsAsset(_assets[i]), \\\"Asset unsupported\\\");\\n            // Withdraw from Strategy and pass other Strategy as recipient\\n            strategyFrom.withdraw(address(strategyTo), _assets[i], _amounts[i]);\\n            // Tell new Strategy to deposit into protocol\\n            strategyTo.deposit(_assets[i], _amounts[i]);\\n        }\\n    }\\n\\n    /**\\n     * @dev Sets the maximum allowable difference between\\n     * total supply and backing assets' value.\\n     */\\n    function setMaxSupplyDiff(uint256 _maxSupplyDiff) external onlyGovernor {\\n        maxSupplyDiff = _maxSupplyDiff;\\n        emit MaxSupplyDiffChanged(_maxSupplyDiff);\\n    }\\n\\n    /***************************************\\n                    Pause\\n    ****************************************/\\n\\n    /**\\n     * @dev Set the deposit paused flag to true to prevent rebasing.\\n     */\\n    function pauseRebase() external onlyGovernor {\\n        rebasePaused = true;\\n        emit RebasePaused();\\n    }\\n\\n    /**\\n     * @dev Set the deposit paused flag to true to allow rebasing.\\n     */\\n    function unpauseRebase() external onlyGovernor {\\n        rebasePaused = false;\\n        emit RebaseUnpaused();\\n    }\\n\\n    /**\\n     * @dev Set the deposit paused flag to true to prevent capital movement.\\n     */\\n    function pauseCapital() external onlyGovernorOrStrategist {\\n        capitalPaused = true;\\n        emit CapitalPaused();\\n    }\\n\\n    /**\\n     * @dev Set the deposit paused flag to false to enable capital movement.\\n     */\\n    function unpauseCapital() external onlyGovernorOrStrategist {\\n        capitalPaused = false;\\n        emit CapitalUnpaused();\\n    }\\n\\n    /***************************************\\n                    Rewards\\n    ****************************************/\\n\\n    /**\\n     * @dev Transfer token to governor. Intended for recovering tokens stuck in\\n     *      contract, i.e. mistaken sends.\\n     * @param _asset Address for the asset\\n     * @param _amount Amount of the asset to transfer\\n     */\\n    function transferToken(address _asset, uint256 _amount)\\n        external\\n        onlyGovernor\\n    {\\n        IERC20(_asset).safeTransfer(governor(), _amount);\\n    }\\n\\n    /**\\n     * @dev Collect reward tokens from all strategies and swap for supported\\n     *      stablecoin via Uniswap\\n     */\\n    function harvest() external onlyGovernor {\\n        for (uint256 i = 0; i < allStrategies.length; i++) {\\n            _harvest(allStrategies[i]);\\n        }\\n    }\\n\\n    /**\\n     * @dev Collect reward tokens for a specific strategy and swap for supported\\n     *      stablecoin via Uniswap\\n     * @param _strategyAddr Address of the strategy to collect rewards from\\n     */\\n    function harvest(address _strategyAddr)\\n        external\\n        onlyVaultOrGovernor\\n        returns (uint256[] memory)\\n    {\\n        return _harvest(_strategyAddr);\\n    }\\n\\n    /**\\n     * @dev Collect reward tokens from a single strategy and swap them for a\\n     *      supported stablecoin via Uniswap\\n     * @param _strategyAddr Address of the strategy to collect rewards from\\n     */\\n    function _harvest(address _strategyAddr)\\n        internal\\n        returns (uint256[] memory)\\n    {\\n        IStrategy strategy = IStrategy(_strategyAddr);\\n        address rewardTokenAddress = strategy.rewardTokenAddress();\\n        if (rewardTokenAddress != address(0)) {\\n            strategy.collectRewardToken();\\n\\n            if (uniswapAddr != address(0)) {\\n                IERC20 rewardToken = IERC20(strategy.rewardTokenAddress());\\n                uint256 rewardTokenAmount = rewardToken.balanceOf(\\n                    address(this)\\n                );\\n                if (rewardTokenAmount > 0) {\\n                    // Give Uniswap full amount allowance\\n                    rewardToken.safeApprove(uniswapAddr, 0);\\n                    rewardToken.safeApprove(uniswapAddr, rewardTokenAmount);\\n\\n                    // Uniswap redemption path\\n                    address[] memory path = new address[](3);\\n                    path[0] = strategy.rewardTokenAddress();\\n                    path[1] = IUniswapV2Router(uniswapAddr).WETH();\\n                    path[2] = allAssets[1]; // USDT\\n\\n                    return\\n                        IUniswapV2Router(uniswapAddr).swapExactTokensForTokens(\\n                            rewardTokenAmount,\\n                            uint256(0),\\n                            path,\\n                            address(this),\\n                            now.add(1800)\\n                        );\\n                }\\n            }\\n        }\\n    }\\n\\n    /***************************************\\n                    Pricing\\n    ****************************************/\\n\\n    /**\\n     * @dev Returns the total price in 18 digit USD for a given asset.\\n     *      Using Min since min is what we use for mint pricing\\n     * @param symbol String symbol of the asset\\n     * @return uint256 USD price of 1 of the asset\\n     */\\n    function priceUSDMint(string calldata symbol)\\n        external\\n        view\\n        returns (uint256)\\n    {\\n        return _priceUSDMint(symbol);\\n    }\\n\\n    /**\\n     * @dev Returns the total price in 18 digit USD for a given asset.\\n     *      Using Min since min is what we use for mint pricing\\n     * @param symbol String symbol of the asset\\n     * @return uint256 USD price of 1 of the asset\\n     */\\n    function _priceUSDMint(string memory symbol)\\n        internal\\n        view\\n        returns (uint256)\\n    {\\n        // Price from Oracle is returned with 8 decimals\\n        // scale to 18 so 18-8=10\\n        return IMinMaxOracle(priceProvider).priceMin(symbol).scaleBy(10);\\n    }\\n\\n    /**\\n     * @dev Returns the total price in 18 digit USD for a given asset.\\n     *      Using Max since max is what we use for redeem pricing\\n     * @param symbol String symbol of the asset\\n     * @return uint256 USD price of 1 of the asset\\n     */\\n    function priceUSDRedeem(string calldata symbol)\\n        external\\n        view\\n        returns (uint256)\\n    {\\n        // Price from Oracle is returned with 8 decimals\\n        // scale to 18 so 18-8=10\\n        return _priceUSDRedeem(symbol);\\n    }\\n\\n    /**\\n     * @dev Returns the total price in 18 digit USD for a given asset.\\n     *      Using Max since max is what we use for redeem pricing\\n     * @param symbol String symbol of the asset\\n     * @return uint256 USD price of 1 of the asset\\n     */\\n    function _priceUSDRedeem(string memory symbol)\\n        internal\\n        view\\n        returns (uint256)\\n    {\\n        // Price from Oracle is returned with 8 decimals\\n        // scale to 18 so 18-8=10\\n        return IMinMaxOracle(priceProvider).priceMax(symbol).scaleBy(10);\\n    }\\n}\\n\",\"keccak256\":\"0xc15dc0850c03de953945eb2675d6f50a87b86499b89121f93e2b93afbf1f2238\"},\"contracts/vault/VaultInitializer.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\n/**\\n * @title OUSD VaultInitializer Contract\\n * @notice The Vault contract initializes the vault.\\n * @author Origin Protocol Inc\\n */\\n\\nimport \\\"./VaultStorage.sol\\\";\\n\\ncontract VaultInitializer is VaultStorage {\\n    function initialize(address _priceProvider, address _ousd)\\n        external\\n        onlyGovernor\\n        initializer\\n    {\\n        require(_priceProvider != address(0), \\\"PriceProvider address is zero\\\");\\n        require(_ousd != address(0), \\\"oUSD address is zero\\\");\\n\\n        oUSD = OUSD(_ousd);\\n\\n        priceProvider = _priceProvider;\\n\\n        rebasePaused = false;\\n        capitalPaused = true;\\n\\n        // Initial redeem fee of 0 basis points\\n        redeemFeeBps = 0;\\n        // Initial Vault buffer of 0%\\n        vaultBuffer = 0;\\n        // Initial allocate threshold of 25,000 OUSD\\n        autoAllocateThreshold = 25000e18;\\n        // Threshold for rebasing\\n        rebaseThreshold = 1000e18;\\n    }\\n}\\n\",\"keccak256\":\"0x91d44cd4bfb92dd7307ce6c006d2287b069ca48d913b372d048deb131be0e82a\"},\"contracts/vault/VaultStorage.sol\":{\"content\":\"pragma solidity 0.5.11;\\n\\n/**\\n * @title OUSD VaultStorage Contract\\n * @notice The VaultStorage contract defines the storage for the Vault contracts\\n * @author Origin Protocol Inc\\n */\\n\\nimport { IERC20 } from \\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\";\\nimport { SafeERC20 } from \\\"@openzeppelin/contracts/token/ERC20/SafeERC20.sol\\\";\\nimport { SafeMath } from \\\"@openzeppelin/contracts/math/SafeMath.sol\\\";\\nimport {\\n    Initializable\\n} from \\\"@openzeppelin/upgrades/contracts/Initializable.sol\\\";\\n\\nimport { IStrategy } from \\\"../interfaces/IStrategy.sol\\\";\\nimport { Governable } from \\\"../governance/Governable.sol\\\";\\nimport { OUSD } from \\\"../token/OUSD.sol\\\";\\nimport \\\"../utils/Helpers.sol\\\";\\nimport { StableMath } from \\\"../utils/StableMath.sol\\\";\\n\\ncontract VaultStorage is Initializable, Governable {\\n    using SafeMath for uint256;\\n    using StableMath for uint256;\\n    using SafeMath for int256;\\n    using SafeERC20 for IERC20;\\n\\n    event AssetSupported(address _asset);\\n    event AssetDefaultStrategyUpdated(address _asset, address _strategy);\\n    event StrategyApproved(address _addr);\\n    event StrategyRemoved(address _addr);\\n    event Mint(address _addr, uint256 _value);\\n    event Redeem(address _addr, uint256 _value);\\n    event CapitalPaused();\\n    event CapitalUnpaused();\\n    event RebasePaused();\\n    event RebaseUnpaused();\\n    event VaultBufferUpdated(uint256 _vaultBuffer);\\n    event RedeemFeeUpdated(uint256 _redeemFeeBps);\\n    event PriceProviderUpdated(address _priceProvider);\\n    event AllocateThresholdUpdated(uint256 _threshold);\\n    event RebaseThresholdUpdated(uint256 _threshold);\\n    event UniswapUpdated(address _address);\\n    event StrategistUpdated(address _address);\\n    event MaxSupplyDiffChanged(uint256 maxSupplyDiff);\\n\\n    // Assets supported by the Vault, i.e. Stablecoins\\n    struct Asset {\\n        bool isSupported;\\n    }\\n    mapping(address => Asset) assets;\\n    address[] allAssets;\\n\\n    // Strategies approved for use by the Vault\\n    struct Strategy {\\n        bool isSupported;\\n        uint256 _deprecated; // Deprecated storage slot\\n    }\\n    mapping(address => Strategy) strategies;\\n    address[] allStrategies;\\n\\n    // Address of the Oracle price provider contract\\n    address public priceProvider;\\n    // Pausing bools\\n    bool public rebasePaused = false;\\n    bool public capitalPaused = true;\\n    // Redemption fee in basis points\\n    uint256 public redeemFeeBps;\\n    // Buffer of assets to keep in Vault to handle (most) withdrawals\\n    uint256 public vaultBuffer;\\n    // Mints over this amount automatically allocate funds. 18 decimals.\\n    uint256 public autoAllocateThreshold;\\n    // Mints over this amount automatically rebase. 18 decimals.\\n    uint256 public rebaseThreshold;\\n\\n    OUSD oUSD;\\n\\n    //keccak256(\\\"OUSD.vault.governor.admin.impl\\\");\\n    bytes32 constant adminImplPosition = 0xa2bd3d3cf188a41358c8b401076eb59066b09dec5775650c0de4c55187d17bd9;\\n\\n    // Address of the contract responsible for post rebase syncs with AMMs\\n    address private _deprecated_rebaseHooksAddr = address(0);\\n\\n    // Address of Uniswap\\n    address public uniswapAddr = address(0);\\n\\n    // Address of the Strategist\\n    address public strategistAddr = address(0);\\n\\n    // Mapping of asset address to the Strategy that they should automatically\\n    // be allocated to\\n    mapping(address => address) public assetDefaultStrategies;\\n\\n    uint256 public maxSupplyDiff;\\n\\n    /**\\n     * @dev set the implementation for the admin, this needs to be in a base class else we cannot set it\\n     * @param newImpl address pf the implementation\\n     */\\n    function setAdminImpl(address newImpl) external onlyGovernor {\\n        bytes32 position = adminImplPosition;\\n        assembly {\\n            sstore(position, newImpl)\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x2e47ddd6070edf156bfe8be58f3f8fc677935f81ee5076c1b95444eed05eac33\"}},\"version\":1}",
  "bytecode": "0x60806040526037805461ffff60a01b19167501000000000000000000000000000000000000000000179055603d80546001600160a01b0319908116909155603e805482169055603f8054909116905562000062336001600160e01b03620000bb16565b620000756001600160e01b03620000ce16565b6001600160a01b031660006001600160a01b03167fc7c0c772add429241571afb3805861fb3cfa2af374534088b76cdb4325a87e9a60405160405180910390a3620000e2565b60008051602062002f8283398151915255565b60008051602062002f828339815191525490565b612e9080620000f26000396000f3fe608060405234801561001057600080fd5b506004361061023d5760003560e01c8063663e64ce1161013b578063b2c9336d116100b8578063c7af33521161007c578063c7af335214610735578063d38bfff41461073d578063e6cc543214610763578063eb03654b1461076b578063fc0cfeee146107885761023d565b8063b2c9336d146106bd578063b888879e146106da578063b890ebf6146106e2578063bc90106b146106ff578063c5f008411461072d5761023d565b80638ec489a2116100ff5780638ec489a21461064457806394828ffd146106615780639fa1826e14610669578063a403e4d514610671578063aea173d5146106975761023d565b8063663e64ce146104b4578063686b37ca146104d1578063773540b31461053f5780637fe2d393146105655780638e510b521461063c5761023d565b8063372aa224116101c95780634cd55c2d1161018d5780634cd55c2d1461045a57806352d38e5d1461048057806353ca9f2414610488578063570d8e1d146104a45780635d36b190146104ac5761023d565b8063372aa224146103d05780633b8ae397146103f65780633dbc911f1461041c5780634641257d14610424578063485cc9551461042c5761023d565b80631072cbea116102105780631072cbea14610300578063128a8b051461032c578063175188e8146103345780631edfe3da1461035a57806329a903ec146103625761023d565b806309f49bf51461024257806309f6442c1461024c5780630c340a24146102665780630e5c011e1461028a575b600080fd5b61024a6107ae565b005b61025461082d565b60408051918252519081900360200190f35b61026e610833565b604080516001600160a01b039092168252519081900360200190f35b6102b0600480360360208110156102a057600080fd5b50356001600160a01b0316610842565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156102ec5781810151838201526020016102d4565b505050509050019250505060405180910390f35b61024a6004803603604081101561031657600080fd5b506001600160a01b0381351690602001356108a1565b61026e61090e565b61024a6004803603602081101561034a57600080fd5b50356001600160a01b031661091d565b610254610b81565b6102546004803603602081101561037857600080fd5b810190602081018135600160201b81111561039257600080fd5b8201836020820111156103a457600080fd5b803590602001918460018302840111600160201b831117156103c557600080fd5b509092509050610b87565b61024a600480360360208110156103e657600080fd5b50356001600160a01b0316610bd1565b61024a6004803603602081101561040c57600080fd5b50356001600160a01b0316610c6c565b61024a610dd9565b61024a610e6e565b61024a6004803603604081101561044257600080fd5b506001600160a01b0381358116916020013516610ef8565b61024a6004803603602081101561047057600080fd5b50356001600160a01b03166110f4565b610254611251565b610490611257565b604080519115158252519081900360200190f35b61026e611267565b61024a611276565b61024a600480360360208110156104ca57600080fd5b50356112d8565b610254600480360360208110156104e757600080fd5b810190602081018135600160201b81111561050157600080fd5b82018360208201111561051357600080fd5b803590602001918460018302840111600160201b8311171561053457600080fd5b50909250905061135a565b61024a6004803603602081101561055557600080fd5b50356001600160a01b031661139b565b61024a6004803603608081101561057b57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156105ae57600080fd5b8201836020820111156105c057600080fd5b803590602001918460208302840111600160201b831117156105e157600080fd5b919390929091602081019035600160201b8111156105fe57600080fd5b82018360208201111561061057600080fd5b803590602001918460208302840111600160201b8311171561063157600080fd5b509092509050611436565b610254611813565b61024a6004803603602081101561065a57600080fd5b5035611819565b61024a6118e8565b610254611977565b61026e6004803603602081101561068757600080fd5b50356001600160a01b031661197d565b61024a600480360360208110156106ad57600080fd5b50356001600160a01b0316611998565b61024a600480360360208110156106d357600080fd5b5035611a33565b61026e611ab5565b61024a600480360360208110156106f857600080fd5b5035611ac4565b61024a6004803603604081101561071557600080fd5b506001600160a01b0381358116916020013516611b46565b61024a611db1565b610490611e36565b61024a6004803603602081101561075357600080fd5b50356001600160a01b0316611e59565b610490611ef3565b61024a6004803603602081101561078157600080fd5b5035611f03565b61024a6004803603602081101561079e57600080fd5b50356001600160a01b0316611f85565b6107b6611e36565b6107f5576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b6037805460ff60a01b191690556040517fbc044409505c95b6b851433df96e1beae715c909d8e7c1d6d7ab783300d4e3b990600090a1565b60385481565b600061083d611ff0565b905090565b6060333014806108555750610855611e36565b6108905760405162461bcd60e51b8152600401808060200182810382526023815260200180612d126023913960400191505060405180910390fd5b61089982612015565b90505b919050565b6108a9611e36565b6108e8576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b61090a6108f3610833565b6001600160a01b038416908363ffffffff61255316565b5050565b603e546001600160a01b031681565b610925611e36565b610964576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526035602052604090205460ff166109c9576040805162461bcd60e51b815260206004820152601560248201527414dd1c985d1959de481b9bdd08185c1c1c9bdd9959605a1b604482015290519081900360640190fd5b60365460005b603654811015610a1b57826001600160a01b0316603682815481106109f057fe5b6000918252602090912001546001600160a01b03161415610a1357809150610a1b565b6001016109cf565b50603654811015610b5f57603680546000198101908110610a3857fe5b600091825260209091200154603680546001600160a01b039092169183908110610a5e57fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506036805480610a9757fe5b6001900381819060005260206000200160006101000a8154906001600160a01b03021916905590556000829050806001600160a01b031663853828b66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610aff57600080fd5b505af1158015610b13573d6000803e3d6000fd5b50505050610b2083612015565b50604080516001600160a01b038516815290517f09a1db4b80c32706328728508c941a6b954f31eb5affd32f236c1fd405f8fea49181900360200190a1505b506001600160a01b03166000908152603560205260409020805460ff19169055565b60395481565b6000610bc883838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506125a592505050565b90505b92915050565b610bd9611e36565b610c18576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b603780546001600160a01b0383166001600160a01b0319909116811790915560408051918252517fb266add5f3044b17d27db796af992cecbe413921b4e8aaaee03c719e16b9806a9181900360200190a150565b610c74611e36565b610cb3576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526035602052604090205460ff1615610d21576040805162461bcd60e51b815260206004820152601960248201527f537472617465677920616c726561647920617070726f76656400000000000000604482015290519081900360640190fd5b6040805180820182526001808252600060208084018281526001600160a01b038716808452603583528684209551865460ff19169015151786559051948401949094556036805493840181559091527f4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b890910180546001600160a01b03191683179055825191825291517f960dd94cbb79169f09a4e445d58b895df2d9bffa5b31055d0932d801724a20d1929181900390910190a150565b603f546001600160a01b0316331480610df55750610df5611e36565b610e305760405162461bcd60e51b8152600401808060200182810382526028815260200180612d356028913960400191505060405180910390fd5b6037805460ff60a81b1916600160a81b1790556040517f71f0e5b62f846a22e0b4d159e516e62fa9c2b8eb570be15f83e67d98a2ee51e090600090a1565b610e76611e36565b610eb5576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b60005b603654811015610ef557610eec60368281548110610ed257fe5b6000918252602090912001546001600160a01b0316612015565b50600101610eb8565b50565b610f00611e36565b610f3f576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b600054610100900460ff1680610f585750610f58612692565b80610f66575060005460ff16155b610fa15760405162461bcd60e51b815260040180806020018281038252602e815260200180612d9e602e913960400191505060405180910390fd5b600054610100900460ff16158015610fcc576000805460ff1961ff0019909116610100171660011790555b6001600160a01b038316611027576040805162461bcd60e51b815260206004820152601d60248201527f507269636550726f76696465722061646472657373206973207a65726f000000604482015290519081900360640190fd5b6001600160a01b038216611079576040805162461bcd60e51b81526020600482015260146024820152736f5553442061646472657373206973207a65726f60601b604482015290519081900360640190fd5b603c80546001600160a01b038085166001600160a01b0319928316179092556037805461ffff60a01b1993871692169190911791909116600160a81b1790556000603881905560395569054b40b1f852bda00000603a55683635c9adc5dea00000603b5580156110ef576000805461ff00191690555b505050565b6110fc611e36565b61113b576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526033602052604090205460ff16156111a9576040805162461bcd60e51b815260206004820152601760248201527f417373657420616c726561647920737570706f72746564000000000000000000604482015290519081900360640190fd5b604080516020808201835260018083526001600160a01b0385166000818152603384528581209451855460ff1916901515179094556034805492830181559093527f46bddb1178e94d7f2892ff5f366840eb658911794f2c3a44c450aa2c505186c10180546001600160a01b03191683179055825191825291517f4f1ac48525e50059cc1cc6e0e1940ece0dd653a4db4841538d6aef036be2fb7b929181900390910190a150565b603b5481565b603754600160a01b900460ff1681565b603f546001600160a01b031681565b61127e612698565b6001600160a01b0316336001600160a01b0316146112cd5760405162461bcd60e51b8152600401808060200182810382526030815260200180612e2c6030913960400191505060405180910390fd5b6112d6336126bd565b565b6112e0611e36565b61131f576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b60418190556040805182815290517f95201f9c21f26877223b1ff4073936a6484c35495649e60e55730497aeb60d939181900360200190a150565b6000610bc883838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061276892505050565b6113a3611e36565b6113e2576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b603f80546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f869e0abd13cc3a975de7b93be3df1cb2255c802b1cead85963cc79d99f131bee9181900360200190a150565b603f546001600160a01b03163314806114525750611452611e36565b61148d5760405162461bcd60e51b8152600401808060200182810382526028815260200180612d356028913960400191505060405180910390fd5b6001600160a01b03861660009081526035602052604090205460ff166114f2576040805162461bcd60e51b8152602060048201526015602482015274496e76616c69642066726f6d20537472617465677960581b604482015290519081900360640190fd5b6001600160a01b03851660009081526035602052604090205460ff16611555576040805162461bcd60e51b8152602060048201526013602482015272496e76616c696420746f20537472617465677960681b604482015290519081900360640190fd5b8281146115a9576040805162461bcd60e51b815260206004820152601960248201527f506172616d65746572206c656e677468206d69736d6174636800000000000000604482015290519081900360640190fd5b858560005b8581101561180857816001600160a01b031663aa388af68888848181106115d157fe5b905060200201356001600160a01b03166040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561162757600080fd5b505afa15801561163b573d6000803e3d6000fd5b505050506040513d602081101561165157600080fd5b5051611698576040805162461bcd60e51b8152602060048201526011602482015270105cdcd95d081d5b9cdd5c1c1bdc9d1959607a1b604482015290519081900360640190fd5b826001600160a01b031663d9caed12838989858181106116b457fe5b905060200201356001600160a01b03168888868181106116d057fe5b905060200201356040518463ffffffff1660e01b815260040180846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b031681526020018281526020019350505050600060405180830381600087803b15801561173f57600080fd5b505af1158015611753573d6000803e3d6000fd5b50505050816001600160a01b03166347e7ef2488888481811061177257fe5b905060200201356001600160a01b031687878581811061178e57fe5b905060200201356040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156117e457600080fd5b505af11580156117f8573d6000803e3d6000fd5b5050600190920191506115ae9050565b505050505050505050565b60415481565b611821611e36565b611860576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b670de0b6b3a76400008111156118ad576040805162461bcd60e51b815260206004820152600d60248201526c496e76616c69642076616c756560981b604482015290519081900360640190fd5b60398190556040805182815290517f41ecb23a0e7865b25f38c268b7c3012220d822929e9edff07326e89d5bb822b59181900360200190a150565b603f546001600160a01b03163314806119045750611904611e36565b61193f5760405162461bcd60e51b8152600401808060200182810382526028815260200180612d356028913960400191505060405180910390fd5b6037805460ff60a81b191690556040517f891ebab18da80ebeeea06b1b1cede098329c4c008906a98370c2ac7a80b571cb90600090a1565b603a5481565b6040602081905260009182529020546001600160a01b031681565b6119a0611e36565b6119df576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b603e80546001600160a01b0383166001600160a01b0319909116811790915560408051918252517fca20db57f4368388dd6766259da48cd22a485cba21ee6ec8c519007cb66dfd039181900360200190a150565b611a3b611e36565b611a7a576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b603a8190556040805182815290517f2ec5fb5a3d2703edc461252d92ccd2799c3c74f01d97212b20388207fa17ae459181900360200190a150565b6037546001600160a01b031681565b611acc611e36565b611b0b576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b603b8190556040805182815290517f39367850377ac04920a9a670f2180e7a94d83b15ad302e59875ec58fd10bd37d9181900360200190a150565b603f546001600160a01b0316331480611b625750611b62611e36565b611b9d5760405162461bcd60e51b8152600401808060200182810382526028815260200180612d356028913960400191505060405180910390fd5b604080516001600160a01b0380851682528316602082015281517fba58ce12801c949fa65f41c46ed108671c219baf945fa48d21026cea99ff252a929181900390910190a16001600160a01b03811660009081526035602052604090205460ff16611c47576040805162461bcd60e51b815260206004820152601560248201527414dd1c985d1959de481b9bdd08185c1c1c9bdd9959605a1b604482015290519081900360640190fd5b6001600160a01b038216600090815260336020526040902054819060ff16611caf576040805162461bcd60e51b8152602060048201526016602482015275105cdcd95d081a5cc81b9bdd081cdd5c1c1bdc9d195960521b604482015290519081900360640190fd5b806001600160a01b031663aa388af6846040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015611d0557600080fd5b505afa158015611d19573d6000803e3d6000fd5b505050506040513d6020811015611d2f57600080fd5b5051611d82576040805162461bcd60e51b815260206004820152601f60248201527f4173736574206e6f7420737570706f7274656420627920537472617465677900604482015290519081900360640190fd5b506001600160a01b03918216600090815260406020819052902080546001600160a01b03191691909216179055565b611db9611e36565b611df8576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b6037805460ff60a01b1916600160a01b1790556040517f8cff26a5985614b3d30629cc4ab83824bf115aec971b718d8f2f99562032e97290600090a1565b6000611e40611ff0565b6001600160a01b0316336001600160a01b031614905090565b611e61611e36565b611ea0576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b611ea9816127d0565b806001600160a01b0316611ebb611ff0565b6001600160a01b03167fa39cc5eb22d0f34d8beaefee8a3f17cc229c1a1d1ef87a5ad47313487b1c4f0d60405160405180910390a350565b603754600160a81b900460ff1681565b611f0b611e36565b611f4a576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b60388190556040805182815290517fd6c7508d6658ccee36b7b7d7fd72e5cbaeefb40c64eff24e9ae7470e846304ee9181900360200190a150565b611f8d611e36565b611fcc576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b7fa2bd3d3cf188a41358c8b401076eb59066b09dec5775650c0de4c55187d17bd955565b7f7bea13895fa79d2831e0a9e28edede30099005a50d652d8957cf8a607ee6ca4a5490565b606060008290506000816001600160a01b031663125f9e336040518163ffffffff1660e01b815260040160206040518083038186803b15801561205757600080fd5b505afa15801561206b573d6000803e3d6000fd5b505050506040513d602081101561208157600080fd5b505190506001600160a01b0381161561254c57816001600160a01b0316630242241d6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156120cf57600080fd5b505af11580156120e3573d6000803e3d6000fd5b5050603e546001600160a01b031615915061254c9050576000826001600160a01b031663125f9e336040518163ffffffff1660e01b815260040160206040518083038186803b15801561213557600080fd5b505afa158015612149573d6000803e3d6000fd5b505050506040513d602081101561215f57600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038416916370a08231916024808301926020929190829003018186803b1580156121ad57600080fd5b505afa1580156121c1573d6000803e3d6000fd5b505050506040513d60208110156121d757600080fd5b50519050801561254957603e54612202906001600160a01b038481169116600063ffffffff6127f416565b603e54612222906001600160a01b0384811691168363ffffffff6127f416565b60408051600380825260808201909252606091602082018380388339019050509050846001600160a01b031663125f9e336040518163ffffffff1660e01b815260040160206040518083038186803b15801561227d57600080fd5b505afa158015612291573d6000803e3d6000fd5b505050506040513d60208110156122a757600080fd5b5051815182906000906122b657fe5b6001600160a01b03928316602091820292909201810191909152603e54604080516315ab88c960e31b81529051919093169263ad5c4648926004808301939192829003018186803b15801561230a57600080fd5b505afa15801561231e573d6000803e3d6000fd5b505050506040513d602081101561233457600080fd5b505181518290600190811061234557fe5b60200260200101906001600160a01b031690816001600160a01b031681525050603460018154811061237357fe5b9060005260206000200160009054906101000a90046001600160a01b03168160028151811061239e57fe5b6001600160a01b039283166020918202929092010152603e54166338ed173983600084306123d44261070863ffffffff61290716565b6040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03166001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b8381101561244d578181015183820152602001612435565b505050509050019650505050505050600060405180830381600087803b15801561247657600080fd5b505af115801561248a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156124b357600080fd5b8101908080516040519392919084600160201b8211156124d257600080fd5b9083019060208201858111156124e757600080fd5b82518660208202830111600160201b8211171561250357600080fd5b82525081516020918201928201910280838360005b83811015612530578181015183820152602001612518565b505050509050016040525050509550505050505061089c565b50505b5050919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526110ef908490612961565b603754604051637bf0c21560e01b815260206004820181815284516024840152845160009461089994600a946001600160a01b0390921693637bf0c21593899391928392604490910191908501908083838d5b838110156126105781810151838201526020016125f8565b50505050905090810190601f16801561263d5780820380516001836020036101000a031916815260200191505b509250505060206040518083038186803b15801561265a57600080fd5b505afa15801561266e573d6000803e3d6000fd5b505050506040513d602081101561268457600080fd5b50519063ffffffff612b1f16565b303b1590565b7f44c4d30b2eaad5130ad70c3ba6972730566f3e6359ab83e800d905c61b1c51db5490565b6001600160a01b038116612718576040805162461bcd60e51b815260206004820152601a60248201527f4e657720476f7665726e6f722069732061646472657373283029000000000000604482015290519081900360640190fd5b806001600160a01b031661272a611ff0565b6001600160a01b03167fc7c0c772add429241571afb3805861fb3cfa2af374534088b76cdb4325a87e9a60405160405180910390a3610ef581612b79565b60375460405163019af6bf60e41b815260206004820181815284516024840152845160009461089994600a946001600160a01b03909216936319af6bf093899391928392604490910191908501908083838d83156126105781810151838201526020016125f8565b7f44c4d30b2eaad5130ad70c3ba6972730566f3e6359ab83e800d905c61b1c51db55565b80158061287a575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561284c57600080fd5b505afa158015612860573d6000803e3d6000fd5b505050506040513d602081101561287657600080fd5b5051155b6128b55760405162461bcd60e51b8152600401808060200182810382526036815260200180612df66036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526110ef908490612961565b600082820183811015610bc8576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b612973826001600160a01b0316612b9d565b6129c4576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b60208310612a025780518252601f1990920191602091820191016129e3565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612a64576040519150601f19603f3d011682016040523d82523d6000602084013e612a69565b606091505b509150915081612ac0576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115612b1957808060200190516020811015612adc57600080fd5b5051612b195760405162461bcd60e51b815260040180806020018281038252602a815260200180612dcc602a913960400191505060405180910390fd5b50505050565b6000808260000b1315612b4a57612b4383600084900b600a0a63ffffffff612bd916565b9250612b72565b60008260000b1215612b7257612b6f836000848103900b600a0a63ffffffff612c3216565b92505b5090919050565b7f7bea13895fa79d2831e0a9e28edede30099005a50d652d8957cf8a607ee6ca4a55565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590612bd157508115155b949350505050565b600082612be857506000610bcb565b82820282848281612bf557fe5b0414610bc85760405162461bcd60e51b8152600401808060200182810382526021815260200180612d7d6021913960400191505060405180910390fd5b6000610bc883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060008183612cfb5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612cc0578181015183820152602001612ca8565b50505050905090810190601f168015612ced5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581612d0757fe5b049594505050505056fe43616c6c6572206973206e6f7420746865205661756c74206f7220476f7665726e6f7243616c6c6572206973206e6f74207468652053747261746567697374206f7220476f7665726e6f7243616c6c6572206973206e6f742074686520476f7665726e6f72000000000000536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65645361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e63654f6e6c79207468652070656e64696e6720476f7665726e6f722063616e20636f6d706c6574652074686520636c61696da265627a7a723158200cd58e5a07f1adf969108f1135f24230beb0cc32b7b8cb82033279bd201d13f664736f6c634300050b00327bea13895fa79d2831e0a9e28edede30099005a50d652d8957cf8a607ee6ca4a",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061023d5760003560e01c8063663e64ce1161013b578063b2c9336d116100b8578063c7af33521161007c578063c7af335214610735578063d38bfff41461073d578063e6cc543214610763578063eb03654b1461076b578063fc0cfeee146107885761023d565b8063b2c9336d146106bd578063b888879e146106da578063b890ebf6146106e2578063bc90106b146106ff578063c5f008411461072d5761023d565b80638ec489a2116100ff5780638ec489a21461064457806394828ffd146106615780639fa1826e14610669578063a403e4d514610671578063aea173d5146106975761023d565b8063663e64ce146104b4578063686b37ca146104d1578063773540b31461053f5780637fe2d393146105655780638e510b521461063c5761023d565b8063372aa224116101c95780634cd55c2d1161018d5780634cd55c2d1461045a57806352d38e5d1461048057806353ca9f2414610488578063570d8e1d146104a45780635d36b190146104ac5761023d565b8063372aa224146103d05780633b8ae397146103f65780633dbc911f1461041c5780634641257d14610424578063485cc9551461042c5761023d565b80631072cbea116102105780631072cbea14610300578063128a8b051461032c578063175188e8146103345780631edfe3da1461035a57806329a903ec146103625761023d565b806309f49bf51461024257806309f6442c1461024c5780630c340a24146102665780630e5c011e1461028a575b600080fd5b61024a6107ae565b005b61025461082d565b60408051918252519081900360200190f35b61026e610833565b604080516001600160a01b039092168252519081900360200190f35b6102b0600480360360208110156102a057600080fd5b50356001600160a01b0316610842565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156102ec5781810151838201526020016102d4565b505050509050019250505060405180910390f35b61024a6004803603604081101561031657600080fd5b506001600160a01b0381351690602001356108a1565b61026e61090e565b61024a6004803603602081101561034a57600080fd5b50356001600160a01b031661091d565b610254610b81565b6102546004803603602081101561037857600080fd5b810190602081018135600160201b81111561039257600080fd5b8201836020820111156103a457600080fd5b803590602001918460018302840111600160201b831117156103c557600080fd5b509092509050610b87565b61024a600480360360208110156103e657600080fd5b50356001600160a01b0316610bd1565b61024a6004803603602081101561040c57600080fd5b50356001600160a01b0316610c6c565b61024a610dd9565b61024a610e6e565b61024a6004803603604081101561044257600080fd5b506001600160a01b0381358116916020013516610ef8565b61024a6004803603602081101561047057600080fd5b50356001600160a01b03166110f4565b610254611251565b610490611257565b604080519115158252519081900360200190f35b61026e611267565b61024a611276565b61024a600480360360208110156104ca57600080fd5b50356112d8565b610254600480360360208110156104e757600080fd5b810190602081018135600160201b81111561050157600080fd5b82018360208201111561051357600080fd5b803590602001918460018302840111600160201b8311171561053457600080fd5b50909250905061135a565b61024a6004803603602081101561055557600080fd5b50356001600160a01b031661139b565b61024a6004803603608081101561057b57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156105ae57600080fd5b8201836020820111156105c057600080fd5b803590602001918460208302840111600160201b831117156105e157600080fd5b919390929091602081019035600160201b8111156105fe57600080fd5b82018360208201111561061057600080fd5b803590602001918460208302840111600160201b8311171561063157600080fd5b509092509050611436565b610254611813565b61024a6004803603602081101561065a57600080fd5b5035611819565b61024a6118e8565b610254611977565b61026e6004803603602081101561068757600080fd5b50356001600160a01b031661197d565b61024a600480360360208110156106ad57600080fd5b50356001600160a01b0316611998565b61024a600480360360208110156106d357600080fd5b5035611a33565b61026e611ab5565b61024a600480360360208110156106f857600080fd5b5035611ac4565b61024a6004803603604081101561071557600080fd5b506001600160a01b0381358116916020013516611b46565b61024a611db1565b610490611e36565b61024a6004803603602081101561075357600080fd5b50356001600160a01b0316611e59565b610490611ef3565b61024a6004803603602081101561078157600080fd5b5035611f03565b61024a6004803603602081101561079e57600080fd5b50356001600160a01b0316611f85565b6107b6611e36565b6107f5576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b6037805460ff60a01b191690556040517fbc044409505c95b6b851433df96e1beae715c909d8e7c1d6d7ab783300d4e3b990600090a1565b60385481565b600061083d611ff0565b905090565b6060333014806108555750610855611e36565b6108905760405162461bcd60e51b8152600401808060200182810382526023815260200180612d126023913960400191505060405180910390fd5b61089982612015565b90505b919050565b6108a9611e36565b6108e8576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b61090a6108f3610833565b6001600160a01b038416908363ffffffff61255316565b5050565b603e546001600160a01b031681565b610925611e36565b610964576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526035602052604090205460ff166109c9576040805162461bcd60e51b815260206004820152601560248201527414dd1c985d1959de481b9bdd08185c1c1c9bdd9959605a1b604482015290519081900360640190fd5b60365460005b603654811015610a1b57826001600160a01b0316603682815481106109f057fe5b6000918252602090912001546001600160a01b03161415610a1357809150610a1b565b6001016109cf565b50603654811015610b5f57603680546000198101908110610a3857fe5b600091825260209091200154603680546001600160a01b039092169183908110610a5e57fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506036805480610a9757fe5b6001900381819060005260206000200160006101000a8154906001600160a01b03021916905590556000829050806001600160a01b031663853828b66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610aff57600080fd5b505af1158015610b13573d6000803e3d6000fd5b50505050610b2083612015565b50604080516001600160a01b038516815290517f09a1db4b80c32706328728508c941a6b954f31eb5affd32f236c1fd405f8fea49181900360200190a1505b506001600160a01b03166000908152603560205260409020805460ff19169055565b60395481565b6000610bc883838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506125a592505050565b90505b92915050565b610bd9611e36565b610c18576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b603780546001600160a01b0383166001600160a01b0319909116811790915560408051918252517fb266add5f3044b17d27db796af992cecbe413921b4e8aaaee03c719e16b9806a9181900360200190a150565b610c74611e36565b610cb3576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526035602052604090205460ff1615610d21576040805162461bcd60e51b815260206004820152601960248201527f537472617465677920616c726561647920617070726f76656400000000000000604482015290519081900360640190fd5b6040805180820182526001808252600060208084018281526001600160a01b038716808452603583528684209551865460ff19169015151786559051948401949094556036805493840181559091527f4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b890910180546001600160a01b03191683179055825191825291517f960dd94cbb79169f09a4e445d58b895df2d9bffa5b31055d0932d801724a20d1929181900390910190a150565b603f546001600160a01b0316331480610df55750610df5611e36565b610e305760405162461bcd60e51b8152600401808060200182810382526028815260200180612d356028913960400191505060405180910390fd5b6037805460ff60a81b1916600160a81b1790556040517f71f0e5b62f846a22e0b4d159e516e62fa9c2b8eb570be15f83e67d98a2ee51e090600090a1565b610e76611e36565b610eb5576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b60005b603654811015610ef557610eec60368281548110610ed257fe5b6000918252602090912001546001600160a01b0316612015565b50600101610eb8565b50565b610f00611e36565b610f3f576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b600054610100900460ff1680610f585750610f58612692565b80610f66575060005460ff16155b610fa15760405162461bcd60e51b815260040180806020018281038252602e815260200180612d9e602e913960400191505060405180910390fd5b600054610100900460ff16158015610fcc576000805460ff1961ff0019909116610100171660011790555b6001600160a01b038316611027576040805162461bcd60e51b815260206004820152601d60248201527f507269636550726f76696465722061646472657373206973207a65726f000000604482015290519081900360640190fd5b6001600160a01b038216611079576040805162461bcd60e51b81526020600482015260146024820152736f5553442061646472657373206973207a65726f60601b604482015290519081900360640190fd5b603c80546001600160a01b038085166001600160a01b0319928316179092556037805461ffff60a01b1993871692169190911791909116600160a81b1790556000603881905560395569054b40b1f852bda00000603a55683635c9adc5dea00000603b5580156110ef576000805461ff00191690555b505050565b6110fc611e36565b61113b576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526033602052604090205460ff16156111a9576040805162461bcd60e51b815260206004820152601760248201527f417373657420616c726561647920737570706f72746564000000000000000000604482015290519081900360640190fd5b604080516020808201835260018083526001600160a01b0385166000818152603384528581209451855460ff1916901515179094556034805492830181559093527f46bddb1178e94d7f2892ff5f366840eb658911794f2c3a44c450aa2c505186c10180546001600160a01b03191683179055825191825291517f4f1ac48525e50059cc1cc6e0e1940ece0dd653a4db4841538d6aef036be2fb7b929181900390910190a150565b603b5481565b603754600160a01b900460ff1681565b603f546001600160a01b031681565b61127e612698565b6001600160a01b0316336001600160a01b0316146112cd5760405162461bcd60e51b8152600401808060200182810382526030815260200180612e2c6030913960400191505060405180910390fd5b6112d6336126bd565b565b6112e0611e36565b61131f576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b60418190556040805182815290517f95201f9c21f26877223b1ff4073936a6484c35495649e60e55730497aeb60d939181900360200190a150565b6000610bc883838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061276892505050565b6113a3611e36565b6113e2576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b603f80546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f869e0abd13cc3a975de7b93be3df1cb2255c802b1cead85963cc79d99f131bee9181900360200190a150565b603f546001600160a01b03163314806114525750611452611e36565b61148d5760405162461bcd60e51b8152600401808060200182810382526028815260200180612d356028913960400191505060405180910390fd5b6001600160a01b03861660009081526035602052604090205460ff166114f2576040805162461bcd60e51b8152602060048201526015602482015274496e76616c69642066726f6d20537472617465677960581b604482015290519081900360640190fd5b6001600160a01b03851660009081526035602052604090205460ff16611555576040805162461bcd60e51b8152602060048201526013602482015272496e76616c696420746f20537472617465677960681b604482015290519081900360640190fd5b8281146115a9576040805162461bcd60e51b815260206004820152601960248201527f506172616d65746572206c656e677468206d69736d6174636800000000000000604482015290519081900360640190fd5b858560005b8581101561180857816001600160a01b031663aa388af68888848181106115d157fe5b905060200201356001600160a01b03166040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561162757600080fd5b505afa15801561163b573d6000803e3d6000fd5b505050506040513d602081101561165157600080fd5b5051611698576040805162461bcd60e51b8152602060048201526011602482015270105cdcd95d081d5b9cdd5c1c1bdc9d1959607a1b604482015290519081900360640190fd5b826001600160a01b031663d9caed12838989858181106116b457fe5b905060200201356001600160a01b03168888868181106116d057fe5b905060200201356040518463ffffffff1660e01b815260040180846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b031681526020018281526020019350505050600060405180830381600087803b15801561173f57600080fd5b505af1158015611753573d6000803e3d6000fd5b50505050816001600160a01b03166347e7ef2488888481811061177257fe5b905060200201356001600160a01b031687878581811061178e57fe5b905060200201356040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156117e457600080fd5b505af11580156117f8573d6000803e3d6000fd5b5050600190920191506115ae9050565b505050505050505050565b60415481565b611821611e36565b611860576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b670de0b6b3a76400008111156118ad576040805162461bcd60e51b815260206004820152600d60248201526c496e76616c69642076616c756560981b604482015290519081900360640190fd5b60398190556040805182815290517f41ecb23a0e7865b25f38c268b7c3012220d822929e9edff07326e89d5bb822b59181900360200190a150565b603f546001600160a01b03163314806119045750611904611e36565b61193f5760405162461bcd60e51b8152600401808060200182810382526028815260200180612d356028913960400191505060405180910390fd5b6037805460ff60a81b191690556040517f891ebab18da80ebeeea06b1b1cede098329c4c008906a98370c2ac7a80b571cb90600090a1565b603a5481565b6040602081905260009182529020546001600160a01b031681565b6119a0611e36565b6119df576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b603e80546001600160a01b0383166001600160a01b0319909116811790915560408051918252517fca20db57f4368388dd6766259da48cd22a485cba21ee6ec8c519007cb66dfd039181900360200190a150565b611a3b611e36565b611a7a576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b603a8190556040805182815290517f2ec5fb5a3d2703edc461252d92ccd2799c3c74f01d97212b20388207fa17ae459181900360200190a150565b6037546001600160a01b031681565b611acc611e36565b611b0b576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b603b8190556040805182815290517f39367850377ac04920a9a670f2180e7a94d83b15ad302e59875ec58fd10bd37d9181900360200190a150565b603f546001600160a01b0316331480611b625750611b62611e36565b611b9d5760405162461bcd60e51b8152600401808060200182810382526028815260200180612d356028913960400191505060405180910390fd5b604080516001600160a01b0380851682528316602082015281517fba58ce12801c949fa65f41c46ed108671c219baf945fa48d21026cea99ff252a929181900390910190a16001600160a01b03811660009081526035602052604090205460ff16611c47576040805162461bcd60e51b815260206004820152601560248201527414dd1c985d1959de481b9bdd08185c1c1c9bdd9959605a1b604482015290519081900360640190fd5b6001600160a01b038216600090815260336020526040902054819060ff16611caf576040805162461bcd60e51b8152602060048201526016602482015275105cdcd95d081a5cc81b9bdd081cdd5c1c1bdc9d195960521b604482015290519081900360640190fd5b806001600160a01b031663aa388af6846040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015611d0557600080fd5b505afa158015611d19573d6000803e3d6000fd5b505050506040513d6020811015611d2f57600080fd5b5051611d82576040805162461bcd60e51b815260206004820152601f60248201527f4173736574206e6f7420737570706f7274656420627920537472617465677900604482015290519081900360640190fd5b506001600160a01b03918216600090815260406020819052902080546001600160a01b03191691909216179055565b611db9611e36565b611df8576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b6037805460ff60a01b1916600160a01b1790556040517f8cff26a5985614b3d30629cc4ab83824bf115aec971b718d8f2f99562032e97290600090a1565b6000611e40611ff0565b6001600160a01b0316336001600160a01b031614905090565b611e61611e36565b611ea0576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b611ea9816127d0565b806001600160a01b0316611ebb611ff0565b6001600160a01b03167fa39cc5eb22d0f34d8beaefee8a3f17cc229c1a1d1ef87a5ad47313487b1c4f0d60405160405180910390a350565b603754600160a81b900460ff1681565b611f0b611e36565b611f4a576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b60388190556040805182815290517fd6c7508d6658ccee36b7b7d7fd72e5cbaeefb40c64eff24e9ae7470e846304ee9181900360200190a150565b611f8d611e36565b611fcc576040805162461bcd60e51b815260206004820152601a6024820152600080516020612d5d833981519152604482015290519081900360640190fd5b7fa2bd3d3cf188a41358c8b401076eb59066b09dec5775650c0de4c55187d17bd955565b7f7bea13895fa79d2831e0a9e28edede30099005a50d652d8957cf8a607ee6ca4a5490565b606060008290506000816001600160a01b031663125f9e336040518163ffffffff1660e01b815260040160206040518083038186803b15801561205757600080fd5b505afa15801561206b573d6000803e3d6000fd5b505050506040513d602081101561208157600080fd5b505190506001600160a01b0381161561254c57816001600160a01b0316630242241d6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156120cf57600080fd5b505af11580156120e3573d6000803e3d6000fd5b5050603e546001600160a01b031615915061254c9050576000826001600160a01b031663125f9e336040518163ffffffff1660e01b815260040160206040518083038186803b15801561213557600080fd5b505afa158015612149573d6000803e3d6000fd5b505050506040513d602081101561215f57600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038416916370a08231916024808301926020929190829003018186803b1580156121ad57600080fd5b505afa1580156121c1573d6000803e3d6000fd5b505050506040513d60208110156121d757600080fd5b50519050801561254957603e54612202906001600160a01b038481169116600063ffffffff6127f416565b603e54612222906001600160a01b0384811691168363ffffffff6127f416565b60408051600380825260808201909252606091602082018380388339019050509050846001600160a01b031663125f9e336040518163ffffffff1660e01b815260040160206040518083038186803b15801561227d57600080fd5b505afa158015612291573d6000803e3d6000fd5b505050506040513d60208110156122a757600080fd5b5051815182906000906122b657fe5b6001600160a01b03928316602091820292909201810191909152603e54604080516315ab88c960e31b81529051919093169263ad5c4648926004808301939192829003018186803b15801561230a57600080fd5b505afa15801561231e573d6000803e3d6000fd5b505050506040513d602081101561233457600080fd5b505181518290600190811061234557fe5b60200260200101906001600160a01b031690816001600160a01b031681525050603460018154811061237357fe5b9060005260206000200160009054906101000a90046001600160a01b03168160028151811061239e57fe5b6001600160a01b039283166020918202929092010152603e54166338ed173983600084306123d44261070863ffffffff61290716565b6040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03166001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b8381101561244d578181015183820152602001612435565b505050509050019650505050505050600060405180830381600087803b15801561247657600080fd5b505af115801561248a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156124b357600080fd5b8101908080516040519392919084600160201b8211156124d257600080fd5b9083019060208201858111156124e757600080fd5b82518660208202830111600160201b8211171561250357600080fd5b82525081516020918201928201910280838360005b83811015612530578181015183820152602001612518565b505050509050016040525050509550505050505061089c565b50505b5050919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526110ef908490612961565b603754604051637bf0c21560e01b815260206004820181815284516024840152845160009461089994600a946001600160a01b0390921693637bf0c21593899391928392604490910191908501908083838d5b838110156126105781810151838201526020016125f8565b50505050905090810190601f16801561263d5780820380516001836020036101000a031916815260200191505b509250505060206040518083038186803b15801561265a57600080fd5b505afa15801561266e573d6000803e3d6000fd5b505050506040513d602081101561268457600080fd5b50519063ffffffff612b1f16565b303b1590565b7f44c4d30b2eaad5130ad70c3ba6972730566f3e6359ab83e800d905c61b1c51db5490565b6001600160a01b038116612718576040805162461bcd60e51b815260206004820152601a60248201527f4e657720476f7665726e6f722069732061646472657373283029000000000000604482015290519081900360640190fd5b806001600160a01b031661272a611ff0565b6001600160a01b03167fc7c0c772add429241571afb3805861fb3cfa2af374534088b76cdb4325a87e9a60405160405180910390a3610ef581612b79565b60375460405163019af6bf60e41b815260206004820181815284516024840152845160009461089994600a946001600160a01b03909216936319af6bf093899391928392604490910191908501908083838d83156126105781810151838201526020016125f8565b7f44c4d30b2eaad5130ad70c3ba6972730566f3e6359ab83e800d905c61b1c51db55565b80158061287a575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561284c57600080fd5b505afa158015612860573d6000803e3d6000fd5b505050506040513d602081101561287657600080fd5b5051155b6128b55760405162461bcd60e51b8152600401808060200182810382526036815260200180612df66036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526110ef908490612961565b600082820183811015610bc8576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b612973826001600160a01b0316612b9d565b6129c4576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b60208310612a025780518252601f1990920191602091820191016129e3565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612a64576040519150601f19603f3d011682016040523d82523d6000602084013e612a69565b606091505b509150915081612ac0576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115612b1957808060200190516020811015612adc57600080fd5b5051612b195760405162461bcd60e51b815260040180806020018281038252602a815260200180612dcc602a913960400191505060405180910390fd5b50505050565b6000808260000b1315612b4a57612b4383600084900b600a0a63ffffffff612bd916565b9250612b72565b60008260000b1215612b7257612b6f836000848103900b600a0a63ffffffff612c3216565b92505b5090919050565b7f7bea13895fa79d2831e0a9e28edede30099005a50d652d8957cf8a607ee6ca4a55565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590612bd157508115155b949350505050565b600082612be857506000610bcb565b82820282848281612bf557fe5b0414610bc85760405162461bcd60e51b8152600401808060200182810382526021815260200180612d7d6021913960400191505060405180910390fd5b6000610bc883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060008183612cfb5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612cc0578181015183820152602001612ca8565b50505050905090810190601f168015612ced5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581612d0757fe5b049594505050505056fe43616c6c6572206973206e6f7420746865205661756c74206f7220476f7665726e6f7243616c6c6572206973206e6f74207468652053747261746567697374206f7220476f7665726e6f7243616c6c6572206973206e6f742074686520476f7665726e6f72000000000000536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65645361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e63654f6e6c79207468652070656e64696e6720476f7665726e6f722063616e20636f6d706c6574652074686520636c61696da265627a7a723158200cd58e5a07f1adf969108f1135f24230beb0cc32b7b8cb82033279bd201d13f664736f6c634300050b0032",
  "devdoc": {
    "methods": {
      "approveStrategy(address)": {
        "details": "Add a strategy to the Vault.",
        "params": {
          "_addr": "Address of the strategy to add"
        }
      },
      "claimGovernance()": {
        "details": "Claim Governance of the contract to a new account (`newGovernor`). Can only be called by the new Governor."
      },
      "governor()": {
        "details": "Returns the address of the current Governor."
      },
      "harvest()": {
        "details": "Collect reward tokens from all strategies and swap for supported     stablecoin via Uniswap"
      },
      "harvest(address)": {
        "details": "Collect reward tokens for a specific strategy and swap for supported     stablecoin via Uniswap",
        "params": {
          "_strategyAddr": "Address of the strategy to collect rewards from"
        }
      },
      "isGovernor()": {
        "details": "Returns true if the caller is the current Governor."
      },
      "pauseCapital()": {
        "details": "Set the deposit paused flag to true to prevent capital movement."
      },
      "pauseRebase()": {
        "details": "Set the deposit paused flag to true to prevent rebasing."
      },
      "priceUSDMint(string)": {
        "details": "Returns the total price in 18 digit USD for a given asset.     Using Min since min is what we use for mint pricing",
        "params": {
          "symbol": "String symbol of the asset"
        },
        "return": "uint256 USD price of 1 of the asset"
      },
      "priceUSDRedeem(string)": {
        "details": "Returns the total price in 18 digit USD for a given asset.     Using Max since max is what we use for redeem pricing",
        "params": {
          "symbol": "String symbol of the asset"
        },
        "return": "uint256 USD price of 1 of the asset"
      },
      "reallocate(address,address,address[],uint256[])": {
        "params": {
          "_amounts": "Array of amounts of each corresponding asset to move.",
          "_assets": "Array of asset address that will be moved",
          "_strategyFromAddress": "Address of Strategy to move assets from.",
          "_strategyToAddress": "Address of Strategy to move assets to."
        }
      },
      "removeStrategy(address)": {
        "details": "Remove a strategy from the Vault. Removes all invested assets and returns them to the Vault.",
        "params": {
          "_addr": "Address of the strategy to remove"
        }
      },
      "setAdminImpl(address)": {
        "details": "set the implementation for the admin, this needs to be in a base class else we cannot set it",
        "params": {
          "newImpl": "address pf the implementation"
        }
      },
      "setAssetDefaultStrategy(address,address)": {
        "details": "Set the default Strategy for an asset, i.e. the one which the asset will be automatically allocated to and withdrawn from",
        "params": {
          "_asset": "Address of the asset",
          "_strategy": "Address of the Strategy"
        }
      },
      "setAutoAllocateThreshold(uint256)": {
        "details": "Sets the minimum amount of OUSD in a mint to trigger an automatic allocation of funds afterwords.",
        "params": {
          "_threshold": "OUSD amount with 18 fixed decimals."
        }
      },
      "setMaxSupplyDiff(uint256)": {
        "details": "Sets the maximum allowable difference between total supply and backing assets' value."
      },
      "setPriceProvider(address)": {
        "details": "Set address of price provider.",
        "params": {
          "_priceProvider": "Address of price provider"
        }
      },
      "setRebaseThreshold(uint256)": {
        "details": "Set a minimum amount of OUSD in a mint or redeem that triggers a rebase",
        "params": {
          "_threshold": "OUSD amount with 18 fixed decimals."
        }
      },
      "setRedeemFeeBps(uint256)": {
        "details": "Set a fee in basis points to be charged for a redeem.",
        "params": {
          "_redeemFeeBps": "Basis point fee to be charged"
        }
      },
      "setStrategistAddr(address)": {
        "details": "Set address of Strategist",
        "params": {
          "_address": "Address of Strategist"
        }
      },
      "setUniswapAddr(address)": {
        "details": "Set address of Uniswap for performing liquidation of strategy reward tokens",
        "params": {
          "_address": "Address of Uniswap"
        }
      },
      "setVaultBuffer(uint256)": {
        "details": "Set a buffer of assets to keep in the Vault to handle most redemptions without needing to spend gas unwinding assets from a Strategy.",
        "params": {
          "_vaultBuffer": "Percentage using 18 decimals. 100% = 1e18."
        }
      },
      "supportAsset(address)": {
        "details": "Add a supported asset to the contract, i.e. one that can be        to mint OUSD.",
        "params": {
          "_asset": "Address of asset"
        }
      },
      "transferGovernance(address)": {
        "details": "Transfers Governance of the contract to a new account (`newGovernor`). Can only be called by the current Governor. Must be claimed for this to complete",
        "params": {
          "_newGovernor": "Address of the new Governor"
        }
      },
      "transferToken(address,uint256)": {
        "details": "Transfer token to governor. Intended for recovering tokens stuck in     contract, i.e. mistaken sends.",
        "params": {
          "_amount": "Amount of the asset to transfer",
          "_asset": "Address for the asset"
        }
      },
      "unpauseCapital()": {
        "details": "Set the deposit paused flag to false to enable capital movement."
      },
      "unpauseRebase()": {
        "details": "Set the deposit paused flag to true to allow rebasing."
      }
    }
  },
  "userdoc": {
    "methods": {
      "reallocate(address,address,address[],uint256[])": {
        "notice": "Move assets from one Strategy to another"
      }
    }
  }
}