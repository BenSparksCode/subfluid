pragma solidity 0.8.10;

import {IFollowModule} from "./interfaces/IFollowModule.sol";
import {ModuleBase} from "./core/modules/ModuleBase.sol";
import {FollowValidationModuleBase} from "./core/modules/FollowValidationModuleBase.sol";

contract SubfluidFollowModule is IFollowModule {
    function initializeFollowModule(uint256 profileId, bytes calldata data) public returns (bytes memory) {}

    function processFollow(
        address follower,
        uint256 profileId,
        bytes calldata data
    ) public {}

    function followModuleTransferHook(
        uint256 profileId,
        address from,
        address to,
        uint256 followNFTTokenId
    ) public {}

    function isFollowing(
        uint256 profileId,
        address follower,
        uint256 followNFTTokenId
    ) public view returns (bool) {}
}
