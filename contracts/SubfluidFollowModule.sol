pragma solidity 0.8.10;

// Lens
import {IFollowModule} from "./interfaces/IFollowModule.sol";
import {ModuleBase} from "./core/modules/ModuleBase.sol";
import {FollowValidationModuleBase} from "./core/modules/FollowValidationModuleBase.sol";

// Superfluid
import {ISuperfluid} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol";
import {IConstantFlowAgreementV1} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

// Extra
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SubfluidFollowModule is IFollowModule, FollowValidationModuleBase {
    struct ProfileData {
        int96 subscribeRate;
        address recipient;
    }

    ISuperfluid public immutable SUPERFLUID;
    IConstantFlowAgreementV1 public immutable CFA;
    ISuperToken public immutable DAIx; // only DAIx supported in PoC
    ERC20 public immutable DAI;

    bool private testMode;
    address private lensHub;

    mapping(uint256 => ProfileData) internal dataByProfile; // profileID => ProfileData

    event SubfluidFollowInitialized(uint256 indexed profileId, address indexed recipientAddress, uint256 subscribeRate);
    event SubfluidFollow(address indexed follower, address indexed recipient);

    constructor(
        address _lensHub,
        ISuperfluid _superfluid,
        IConstantFlowAgreementV1 _cfa,
        ERC20 _dai,
        ISuperToken _daix,
        bool _testMode
    ) ModuleBase(_lensHub) {
        SUPERFLUID = _superfluid;
        CFA = _cfa;
        DAI = _dai;
        DAIx = _daix;

        // For testing
        testMode = _testMode;
        lensHub = _lensHub;
    }

    function initializeFollowModule(uint256 profileId, bytes calldata data) public onlyLensHub returns (bytes memory) {
        // Extract user-specified follow cost from data.
        (uint256 _subscribeRate, address _recipientAddr) = abi.decode(data, (uint256, address));

        dataByProfile[profileId] = ProfileData({
            subscribeRate: int96(int256(_subscribeRate)),
            recipient: _recipientAddr
        });

        emit SubfluidFollowInitialized(profileId, _recipientAddr, _subscribeRate);

        return data;
    }

    function processFollow(
        address follower,
        uint256 profileId,
        bytes calldata data
    ) public {
        _createPaymentStream(follower, dataByProfile[profileId].recipient, dataByProfile[profileId].subscribeRate);

        emit SubfluidFollow(follower, dataByProfile[profileId].recipient);
    }

    function _createPaymentStream(
        address _payer,
        address _recipient,
        int96 _subscribeRate
    ) internal {
        SUPERFLUID.callAgreement(
            CFA,
            abi.encodeWithSelector(
                CFA.createFlowByOperator.selector,
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

    modifier onlyLensHub() {
        if (!testMode) require(msg.sender == lensHub, "SUBFLUID: NOT LENS HUB");
        _;
    }
}
