import { Contract } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, expect, constants, hre } from "./constants.test";
import { deployDiamond } from "./helpers.test";

// import ERC20_ABI from "../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";

describe("Diamond Tests", () => {
  let owner: SignerWithAddress, alice: SignerWithAddress;

  let ContractFactory: Contract;
  let Contract: Contract;

  beforeEach(async () => {
    [owner, alice] = await ethers.getSigners();
  });

  describe.only("Tests", () => {
    it("Test 1", async () => {
      // TODO

      const SubfluidFactory = await ethers.getContractFactory();
      const Subfluid = await SubfluidFactory.deploy();
    });
  });
});
