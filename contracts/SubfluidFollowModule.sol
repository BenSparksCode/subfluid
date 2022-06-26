pragma solidity 0.8.10;

// Lens
import {IFollowModule} from "./interfaces/IFollowModule.sol";
import {ModuleBase} from "./core/modules/ModuleBase.sol";
import {FollowValidationModuleBase} from "./core/modules/FollowValidationModuleBase.sol";

// Superfluid
import {ISuperfluid} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {IConstantFlowAgreementV1} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

// Extra
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SubfluidFollowModule is IFollowModule, FollowValidationModuleBase {
    ISuperfluid public immutable SUPERFLUID;
    IConstantFlowAgreementV1 public immutable DAIx; // only DAIx supported in PoC
    ERC20 public immutable DAI;

    mapping(uint256 => uint256) internal subscribeRates; // profileID => costToFollow

    event SubfluidFollowInitialized(uint256 indexed profileId, uint256 subscribeRate);
    event SubfluidFollow(address indexed follower, address indexed recipient);

    constructor(
        address hub,
        ISuperfluid _superfluid,
        ERC20 _dai,
        IConstantFlowAgreementV1 _daix
    ) ModuleBase(hub) {
        SUPERFLUID = _superfluid;
        DAI = _dai;
        DAIx = _daix;
    }

    function initializeFollowModule(uint256 profileId, bytes calldata data) public onlyHub returns (bytes memory) {
        // Extract user-specified follow cost from data.
        uint256 subscribeRate = abi.decode(data, (uint256));

        subscribeRates[profileId] = subscribeRate;

        emit SubfluidFollowInitialized(profileId, subscribeRate);

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
        require(DAI.transferFrom(follower, recipient, subscribeRates[profileId]), "SUBFLUID: PAYMENT FAILED");

        _createPaymentStream(follower, recipient, int96(int256(subscribeRates[profileId])));

        emit SubfluidFollow(follower, recipient);
    }

    function _createPaymentStream(
        address _payer,
        address _recipient,
        int96 _subscribeRate
    ) internal {
        SUPERFLUID.callAgreement(
            DAIx,
            abi.encodeWithSelector(
                DAIx.createFlowByOperator.selector,
                DAIx,
                _payer,
                _recipient,
                _subscribeRate,
                new bytes(0)
            ),
            "0x" //userData
        );
    }

    // ADDED TO ADHERE TO INTERFACE

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
