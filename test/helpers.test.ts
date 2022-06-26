import { expect } from "chai";
import hre, { ethers } from "hardhat";
import { constants } from "./constants.test";
import { BigNumber, Contract, Wallet } from "ethers";
import { signTypedData_v4 } from "eth-sig-util";
import { fromRpcSig, ECDSASignature } from "ethereumjs-util";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import ERC20_ABI from "../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";

import { IERC20 } from "../typechain-types";

const DAIToken = new ethers.Contract(
  constants.POLYGON.TOKENS.DAI,
  ERC20_ABI.abi,
  ethers.provider
);

const DAIxToken = new ethers.Contract(
  constants.POLYGON.SUPERFLUID.DAIx,
  ERC20_ABI.abi,
  ethers.provider
);

export const fundAccountWithTokens = async (
  sender: string,
  recipient: string,
  tokenAddress: string,
  amount: BigNumber
) => {
  const ERC20Token = new ethers.Contract(
    tokenAddress,
    ERC20_ABI.abi,
    ethers.provider
  );

  // Give sender ETH to do transfer
  await hre.network.provider.send("hardhat_setBalance", [
    sender,
    "0xfffff0000000000000",
  ]);

  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [sender],
  });

  const senderSigner = await ethers.getSigner(sender);
  await ERC20Token.connect(senderSigner).transfer(recipient, amount);
};

export const logBalances = async (walletAddr: string) => {
  console.log(`Wallet's balances - ${walletAddr}:`);
  console.log(
    `DAI:\t\t\t\t${format18Dec(await DAIToken.balanceOf(walletAddr))}`
  );
  console.log(
    `DAIx:\t\t\t\t${format18Dec(await DAIxToken.balanceOf(walletAddr))}`
  );
  console.log("\n");
};

export const format6Dec = (num: BigNumber) => {
  return ethers.utils.formatUnits(num, 6);
};

export const format18Dec = (num: BigNumber) => {
  return ethers.utils.formatUnits(num, 18);
};
