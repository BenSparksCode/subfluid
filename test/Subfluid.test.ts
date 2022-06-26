// import { AbiCoder } from '@ethersproject/contracts/node_modules/@ethersproject/abi';
import { Contract } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, expect, constants, hre } from "./constants.test";
import { fundAccountWithTokens, logBalances } from "./helpers.test";

import ERC20_ABI from "../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";
import SUPERTOKEN_ABI from "../artifacts/@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol/ISuperToken.json";
// import DAIx_ABI from "../artifacts/@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

describe("Tests", () => {
  let owner: SignerWithAddress, alice: SignerWithAddress;

  let ContractFactory: Contract;
  let Contract: Contract;

  const abiCoder = ethers.utils.defaultAbiCoder;

  const DAIx = new ethers.Contract(
    constants.POLYGON.SUPERFLUID.DAIx,
    SUPERTOKEN_ABI.abi,
    ethers.provider
  );

  const DAI = new ethers.Contract(
    constants.POLYGON.TOKENS.DAI,
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

      console.log("Alice has DAI but no DAIx");
      await logBalances(alice.address);

      // Alice converts DAI to DAIx
      await DAI.connect(alice).approve(
        constants.POLYGON.SUPERFLUID.DAIx,
        daiAmount
      );

      await DAIx.connect(alice).upgrade(daiAmount);

      console.log("Alice's DAI has been upgraded to DAIx");
      await logBalances(alice.address);

      // Approve Subfluid module to spend DAIx
      await DAIx.connect(alice).approve(Subfluid.address, daiAmount);

      // Owner sets up follow subscription cost = 5 wei per second
      // Owner takes profileID = 1
      const data = abiCoder.encode(["uint256", "address"], [5, owner.address]);
      await Subfluid.connect(owner).initializeFollowModule(1, data);

      // Alice follows Owner (id = 1)
      await Subfluid.connect(alice).processFollow(alice.address, 1, "0x");
    });
  });
});
