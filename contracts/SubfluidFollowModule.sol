pragma solidity 0.8.10;

import {IFollowModule} from "./interfaces/IFollowModule.sol";
import {ModuleBase} from "./core/modules/ModuleBase.sol";
import {FollowValidationModuleBase} from "./core/modules/FollowValidationModuleBase.sol";

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SubfluidFollowModule is IFollowModule, FollowValidationModuleBase {
    // TODO assume DAI is currency for follow cost
    ERC20 public immutable DAI;

    mapping(uint256 => uint256) internal followCosts; // profileID => costToFollow

    event SubfluidFollowInitialized(uint256 indexed profileId, uint256 followCost);
    event SubfluidFollow(address indexed follower, address indexed recipient);

    constructor(address hub, ERC20 _dai) ModuleBase(hub) {
        DAI = _dai;
    }

    function initializeFollowModule(uint256 profileId, bytes calldata data) public onlyHub returns (bytes memory) {
        // Extract user-specified follow cost from data.
        uint256 followCost = abi.decode(data, (uint256));

        followCosts[profileId] = followCost;

        emit SubfluidFollowInitialized(profileId, followCost);

        return data;
    }

    function processFollow(
        address follower,
        uint256 profileId,
        bytes calldata data
    ) public {
        // TODO derive from profileID
        address recipient = address(this);

        // Transfers preset amount of DAI from follower to recipient
        require(DAI.transferFrom(follower, recipient, followCosts[profileId]), "SUBFLUID: PAYMENT FAILED");

        emit SubfluidFollow(follower, recipient);
    }

    function followModuleTransferHook(
        uint256 profileId,
        address from,
        address to,
        uint256 followNFTTokenId
    ) public {}

    // NOT NEEDED - implemented in FollowValidationModuleBase
    function isFollowing(
        uint256 profileId,
        address follower,
        uint256 followNFTTokenId
    ) public view returns (bool) {}
}
