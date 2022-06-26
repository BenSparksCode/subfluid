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
    SUPERFLUID: {
      HOST: "0x3E14dC1b13c488a8d5D310918780c983bD5982E7",
      DAIx: "0x1305F6B6Df9Dc47159D12Eb7aC2804d4A33173c2",
    },
    LENS: {
      HUB: "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d",
    },
    TOKENS: {
      WMATIC: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      DAI: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
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
