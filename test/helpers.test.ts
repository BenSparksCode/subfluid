import { expect } from "chai";
import hre, { ethers } from "hardhat";
import { constants } from "./constants.test";
import { BigNumber, Contract, Wallet } from "ethers";
import { signTypedData_v4 } from "eth-sig-util";
import { fromRpcSig, ECDSASignature } from "ethereumjs-util";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

// import ERC20_ABI from "../artifacts/@rari-capital/solmate/src/tokens/ERC20.sol/ERC20.json";
// import ERC20_ABI from "../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";

// import { IERC20 } from "../typechain-types";

// const USDCToken = new ethers.Contract(
//   constants.POLYGON.TOKENS.USDC,
//   ERC20_ABI.abi,
//   ethers.provider
// );

// export const fundAccountWithTokens = async (
//   sender: string,
//   recipient: string,
//   tokenAddress: string,
//   amount: BigNumber
// ) => {
//   const ERC20Token = new ethers.Contract(
//     tokenAddress,
//     ERC20_ABI.abi,
//     ethers.provider
//   );

//   // Give sender ETH to do transfer
//   await hre.network.provider.send("hardhat_setBalance", [
//     sender,
//     "0xfffff0000000000000",
//   ]);

//   await hre.network.provider.request({
//     method: "hardhat_impersonateAccount",
//     params: [sender],
//   });

//   const senderSigner = await ethers.getSigner(sender);
//   await ERC20Token.connect(senderSigner).transfer(recipient, amount);
// };

// export const logBalances = async (walletAddr: string) => {
//   console.log(`Wallet's balances - ${walletAddr}:`);
//   console.log(
//     `USDC:\t\t\t\t${format6Dec(await USDCToken.balanceOf(walletAddr))}`
//   );
//   console.log("\n");
// };

export const format6Dec = (num: BigNumber) => {
  return ethers.utils.formatUnits(num, 6);
};

export const format18Dec = (num: BigNumber) => {
  return ethers.utils.formatUnits(num, 18);
};

export const getFunctionSelectors = (contract: Contract) => {
  console.log(contract.interface);
  const signatures = Object.keys(contract.interface.functions);
  const selectors = signatures.reduce((acc, val) => {
    console.log(val);
    if (val !== "init(bytes)") {
      // acc.push(contract.interface.getSighash(val))
    }
    return acc;
  }, []);
  // TODO add this back when needed
  // selectors.contract = contract;
  // selectors.remove = remove;
  // selectors.get = get;
  return selectors;
};

export const deployDiamond = async (deployerSigner: SignerWithAddress) => {
  // 1. Deploy DiamondCutFacet
  const DiamondCutFacetFactory = await ethers.getContractFactory(
    "DiamondCutFacet"
  );
  const DiamondCutFacet = await DiamondCutFacetFactory.deploy();

  // 2. Deploy Diamond
  const DiamondFactory = await ethers.getContractFactory("Diamond");
  const Diamond = await DiamondFactory.deploy(
    deployerSigner.address,
    DiamondCutFacet.address
  );

  // TODO delete
  console.log(getFunctionSelectors(Diamond));

  // 3. Deploy DiamondInit helper
  const DiamondInitFactory = await ethers.getContractFactory("DiamondInit");
  const DiamondInit = await DiamondInitFactory.deploy();

  // 4. Deploy all other facets
  const otherFacetNames = ["DiamondLoupeFacet", "OwnershipFacet"];
  const cut = []; // add facet details here, then execute cuts to add to Diamond

  for (const facetName in otherFacetNames) {
    console.log(facetName);
    const factory = await ethers.getContractFactory(facetName);
    const contract = await factory.deploy();
    cut.push({
      facetAddress: contract.address,
      action: constants.DIAMOND.CUT_ACTIONS.ADD,
      functionSelectors: getFunctionSelectors(contract),
    });
  }

  // 4. Set up Facet cuts to be applied to Diamond
  // 5. Apply cuts to Diamond
};
