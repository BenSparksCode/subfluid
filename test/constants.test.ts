export const { expect } = require("chai");
export const { ethers } = require("hardhat");
export const hre = require("hardhat");

export const constants = {
  DIAMOND: {
    CUT_ACTIONS: {
      ADD: 0,
      REPLACE: 1,
      REMOVE: 2,
    },
  },
  USERS: {
    ALICE: {
      PRIVATE_KEY:
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
    },
  },
  POLYGON: {
    AAVE: {
      PROTOCOL_DATA_PROVIDER: "0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654",
      POOL_ADDRESS_PROVIDER: "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb",
      POOL: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
    },
    UNISWAP: {
      ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    },
    TOKENS: {
      WMATIC: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      DAI: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    },
    ACCOUNTS: {
      WMATIC_WHALE: "0xadbF1854e5883eB8aa7BAf50705338739e558E5b",
      USDC_WHALE: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      DAI_WHALE: "0x4A35582a710E1F4b2030A3F826DA20BfB6703C09",
    },
  },
};

module.exports = {
  hre,
  ethers,
  expect,
  constants,
};
