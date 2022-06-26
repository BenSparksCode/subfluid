// import { AbiCoder } from '@ethersproject/contracts/node_modules/@ethersproject/abi';
import { Contract } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, expect, constants, hre } from "./constants.test";
import { fundAccountWithTokens, logBalances } from "./helpers.test";

import ERC20_ABI from "../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";
// import DAIx_ABI from "../artifacts/@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

describe("Tests", () => {
  let owner: SignerWithAddress, alice: SignerWithAddress;

  let ContractFactory: Contract;
  let Contract: Contract;

  const abiCoder = ethers.utils.defaultAbiCoder;

  const DAIx = new ethers.Contract(
    constants.POLYGON.SUPERFLUID.DAIx,
    ERC20_ABI.abi,
    ethers.provider
  );

  beforeEach(async () => {
    [owner, alice] = await ethers.getSigners();
  });

  describe.only("Subfluid Tests", () => {
    it("Subfluid creates payment stream on follow", async () => {
      const daiAmount = ethers.utils.parseUnits("1000");

      const SubfluidFactory = await ethers.getContractFactory(
        "SubfluidFollowModule"
      );
      const Subfluid = await SubfluidFactory.deploy(
        constants.POLYGON.LENS.HUB,
        constants.POLYGON.SUPERFLUID.HOST,
        constants.POLYGON.TOKENS.DAI,
        constants.POLYGON.SUPERFLUID.DAIx,
        true
      );

      // Gib Alice DAI
      await fundAccountWithTokens(
        constants.POLYGON.ACCOUNTS.DAI_WHALE,
        alice.address,
        constants.POLYGON.TOKENS.DAI,
        daiAmount
      );

      await logBalances(alice.address);

      // Alice converts DAI to DAIx

      // Approve Subfluid module to spend DAIx
      await DAIx.connect(alice).approve(Subfluid.address, daiAmount);

      // Owner sets up follow subscription cost
      // Owner takes profileID = 1
      const initFollowData = { subscribeRate: 5, recipient: owner.address };
      // const initFollowData = ["5", owner.address];

      const data = abiCoder.encode(["uint256", "address"], [5, owner.address]);

      // const data = await Subfluid.interface.encodeFunctionData(
      //   "initializeFollowModule",
      //   5,
      //   owner.address
      // );

      console.log(data);

      await Subfluid.connect(owner).initializeFollowModule(1, data);
    });
  });
});
