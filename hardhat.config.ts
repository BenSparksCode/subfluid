import { task } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-gas-reporter";
import { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import * as dotenv from "dotenv";

dotenv.config();

const netWorkConfig = {
  polygon: {
    url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API}`,
    accounts: [`${process.env.POLYGON_DEPLOYER_PRIV_KEY}`],
    chainId: 137,
  },
} as NetworkUserConfig;

const apiKeys = {
  polygon: process.env.POLYGONSCAN_API_KEY,
};

const loadConfig = () => {
  const config = {
    defaultNetwork: "hardhat",
    solidity: {
      compilers: [
        {
          version: "0.8.10",
          settings: {
            optimizer: {
              enabled: true,
              runs: 1000,
            },
          },
        },
      ],
    },
    networks: {
      hardhat: {
        allowUnlimitedContractSize: true,
        // gasPrice: 0,
        // forking: {
        //   url:
        //     "https://polygon-mainnet.g.alchemy.com/v2/" +
        //     process.env.ALCHEMY_API,
        //   blockNumber: 28156000,
        //   // blockNumber: 27927400,
        // },
        accounts: {
          accountsBalance: "1000000000000000000000000",
        },
      },
      localhost: {
        url: "http://localhost:8545",
        /*
          notice no env vars here? it will just use account 0 of the hardhat node to deploy
          (you can put in a mnemonic here to set the deployer locally)
        */
      },
    },
    etherscan: {
      apiKey: apiKeys,
    },
    // mocha options can be set here
    mocha: {
      timeout: "100s",
    },
  };

  return {
    ...config,
    ...apiKeys,
    ...netWorkConfig,
  };
};

const config = loadConfig();

export default config;
