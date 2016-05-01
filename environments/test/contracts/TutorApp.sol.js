"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var TutorApp = (function (_Pudding) {
    _inherits(TutorApp, _Pudding);

    function TutorApp() {
      _classCallCheck(this, TutorApp);

      _get(Object.getPrototypeOf(TutorApp.prototype), "constructor", this).apply(this, arguments);
    }

    return TutorApp;
  })(Pudding);

  ;

  // Set up specific data for this class.
  TutorApp.abi = [{ "constant": true, "inputs": [{ "name": "sessionAddress", "type": "address" }], "name": "getSessionBidders", "outputs": [{ "name": "count", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "name", "type": "string" }], "name": "registerStudent", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "tutors", "outputs": [{ "name": "name", "type": "string" }, { "name": "skills", "type": "string" }, { "name": "reputation", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "problem", "type": "string" }, { "name": "tags", "type": "string" }, { "name": "timeLimit", "type": "uint256" }], "name": "createSession", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "students", "outputs": [{ "name": "name", "type": "string" }, { "name": "balance", "type": "uint256" }, { "name": "reputation", "type": "uint256" }, { "name": "session", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "addr", "type": "address" }], "name": "getStudentDetails", "outputs": [{ "name": "", "type": "string" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "sessionAddress", "type": "address" }, { "name": "bid", "type": "uint256" }], "name": "respondToHelpRequest", "outputs": [], "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_session", "type": "address" }, { "indexed": false, "name": "_student", "type": "address" }, { "indexed": false, "name": "_problem", "type": "string" }, { "indexed": false, "name": "_tags", "type": "string" }, { "indexed": false, "name": "timeLimit", "type": "uint256" }, { "indexed": false, "name": "creationTime", "type": "uint256" }], "name": "SessionCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "sessionAddr", "type": "address" }, { "indexed": true, "name": "tutorAddr", "type": "address" }, { "indexed": true, "name": "bid", "type": "uint256" }], "name": "TutorResponded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "tutorAddr", "type": "address" }], "name": "TutorSelected", "type": "event" }];
  TutorApp.binary = "6060604052610f34806100126000396000f3606060405236156100615760e060020a600035046346d09b25811461006357806371e17445146100c65780638224a34114610182578063a24d2203146101a3578063a6c807a914610488578063d0b371bd146104b9578063eed8d8b714610546575b005b6105e46004357f408c53ec000000000000000000000000000000000000000000000000000000006060908152600090600160a060020a0383169063408c53ec9060649060209060048187876161da5a03f115610002575050604051519392505050565b60206004803580820135601f8101849004909302608090810160405260608481526100619460249391929184019181908382808284375050600160a060020a033316600090815260016020818152604083208054895182865294839020999b509099508998600293821615610100026000190190911692909204601f908101919091048201965091945092508390106107c457805160ff19168380011785555b506107f49291505b8082111561081b576000815560010161016e565b6105ed60043560006020819052908152604090206002810154600182019083565b60206004803580820135601f81018490049093026080908101604052606084815261006194602493919291840191819083828082843750506040805160208835808b0135601f8101839004830284018301909452838352979998604498929750919091019450909250829150840183828082843750949650509335935050505060006000338585856040516106d58061085f8339018085600160a060020a0316815260200180602001806020018481526020018381038352868181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102ae5780820380516001836020036101000a031916815260200191505b508381038252858181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103075780820380516001836020036101000a031916815260200191505b509650505050505050604051809103906000f091506001600050600033600160a060020a031681526020019081526020016000206000509050818160030160006101000a815481600160a060020a03021916908302179055507f8231916797128bfe309b40288ad81890d5a7d04150808c07e93906a09da010f58233878787426040518087600160a060020a0316815260200186600160a060020a0316815260200180602001806020018581526020018481526020018381038352878181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156104155780820380516001836020036101000a031916815260200191505b508381038252868181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561046e5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a15050505050565b6106f160043560016020819052600091825260409091209081015460028201546003830154600160a060020a031684565b60006060818152600160a060020a03600435908116835260016020818152604080862080840154600280830154835496871615610100026000190190961604601f810185900490940260a09081019093526080848152610748989697969586959394859491929185918282801561084a5780601f1061081f5761010080835404028352916020019161084a565b6100616004356024357ffe8e569100000000000000000000000000000000000000000000000000000000606090815233600160a060020a03908116606452608483905283169063fe8e56919060a49060009060448183876161da5a03f115610002575050604051829133600160a060020a0316917f0c86ca1b96347fe4674674b434b6f8b610fa421bf8f69742a13cc094fa606f4590600090a45050565b50604051602090f35b60a0819052606080805283546002600182161561010002600019019091160460c0819052819060809060e090879080156106685780601f1061063d57610100808354040283529160200191610668565b820191906000526020600020905b81548152906001019060200180831161064b57829003601f168201915b5050605f198101825285546002600182161561010002600019019091160480825260209190910190869080156106df5780601f106106b4576101008083540402835291602001916106df565b820191906000526020600020905b8154815290600101906020018083116106c257829003601f168201915b50509550505050505060405180910390f35b608083815260a083905260c08290526060908152845460026001821615610100908102600019019092160460e0819052829190879080156106df5780601f106106b4576101008083540402835291602001916106df565b60405180806020018481526020018381526020018281038252858181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156107b45780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b82800160010185558215610166579182015b828111156101665782518260005055916020019190600101906107d6565b50503481600101600082828250540192505081905550600081600201600050819055505050565b5090565b820191906000526020600020905b81548152906001019060200180831161082d57829003601f168201915b505050505092509350935093505091939092505660606040526040516106d53803806106d583398101604052805160805160a05160c05192939182019291019060008054600160a060020a03199081163317825560018054909116861781558451600280549381905292602092811615610100026000190116839004601f9081018390047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101939091908801908390106100ca57805160ff19168380011785555b506100fa9291505b8082111561015357600081556001016100b6565b828001600101855582156100ae579182015b828111156100ae5782518260005055916020019190600101906100dc565b50508160036000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061015757805160ff19168380011785555b506101879291506100b6565b5090565b82800160010185558215610147579182015b82811115610147578251826000505591602001919060010190610169565b5050600455505042600555506006805460ff1916905561052a806101ab6000396000f3606060405236156100a35760e060020a6000350463188b671581146100a5578063408c53ec146100c557806345324688146100d357806352ed06c41461012d5780635dd3c35f1461018f578063699450e8146101a65780638da5cb5b146101b8578063c040e6b8146101ca578063c08d1fe5146101d6578063d8270dce146101df578063d9bfcecb146101e8578063de6b7e091461020b578063fe8e569114610267575b005b6100a3600154600160a060020a039081163391909116146104e657610002565b6007545b6060908152602090f35b61028660028054602060018216156101000260001901909116829004601f8101829004909102608090810160405260608281529291908282801561034e5780601f106103235761010080835404028352916020019161034e565b6102f4600435600780548290811015610002575060005260020260008051602061050a8339815191528101547fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6899190910154600160a060020a03919091169082565b6008546009546102f491600160a060020a03169082565b610310600154600160a060020a031681565b610310600054600160a060020a031681565b6100c960065460ff1681565b6100c960045481565b6100c960055481565b6100a3600435600154600160a060020a0390811633919091161461045257610002565b610286600380546020601f6002600184161561010002600019019093169290920491820181900402608090810160405260608281529291908282801561034e5780601f106103235761010080835404028352916020019161034e565b6100a3600435602435600654600090819060ff16811461035e57610002565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600160a060020a03919091166060908152608091909152604090f35b600160a060020a03166060908152602090f35b820191906000526020600020905b81548152906001019060200180831161033157829003601f168201915b505050505081565b600191909101905b6007548210156103ac5733600160a060020a031660076000508381548110156100025790835260020260008051602061050a8339815191520154600160a060020a0316141561035657610002565b600780546001810180835582818380158290116104075782875261040790600290810260008051602061050a833981519152908101918402015b8082111561044e578054600160a060020a03191681556001018881556103e6565b50505091835260020260008051602061050a83398151915201825060a060405233606081905260808690528154600160a060020a0319161781556001018490555050505050565b5090565b60065460009060ff16811461046657610002565b60078054839081101561000257506006805491909252600290920260008051602061050a83398151915281015460088054600160a060020a031916600160a060020a03929092169190911790557fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c689015460095560ff199091166001179055565b60065460019060ff1681146104fa57610002565b506006805460ff1916600217905556a66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688";

  if ("0x3b69d17028b37fbc867abcc8f8586e25cf4fddc2" != "") {
    TutorApp.address = "0x3b69d17028b37fbc867abcc8f8586e25cf4fddc2";

    // Backward compatibility; Deprecated.
    TutorApp.deployed_address = "0x3b69d17028b37fbc867abcc8f8586e25cf4fddc2";
  }

  TutorApp.generated_with = "1.0.3";
  TutorApp.contract_name = "TutorApp";

  return TutorApp;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.TutorApp = factory;
}