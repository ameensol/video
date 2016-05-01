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
  TutorApp.abi = [{ "constant": true, "inputs": [{ "name": "sessionAddress", "type": "address" }], "name": "getSessionBidders", "outputs": [{ "name": "count", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "name", "type": "string" }], "name": "registerStudent", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "tutors", "outputs": [{ "name": "name", "type": "string" }, { "name": "skills", "type": "string" }, { "name": "reputation", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "problem", "type": "string" }, { "name": "tags", "type": "string" }, { "name": "timeLimit", "type": "uint256" }], "name": "createSession", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "students", "outputs": [{ "name": "name", "type": "string" }, { "name": "balance", "type": "uint256" }, { "name": "reputation", "type": "uint256" }, { "name": "session", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "sessionAddress", "type": "address" }], "name": "getSelectedTutor", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "addr", "type": "address" }], "name": "getStudentDetails", "outputs": [{ "name": "", "type": "string" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "index", "type": "uint256" }], "name": "selectTutor", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "sessionAddress", "type": "address" }, { "name": "bid", "type": "uint256" }], "name": "respondToHelpRequest", "outputs": [], "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_session", "type": "address" }, { "indexed": false, "name": "_student", "type": "address" }, { "indexed": false, "name": "_problem", "type": "string" }, { "indexed": false, "name": "_tags", "type": "string" }, { "indexed": false, "name": "timeLimit", "type": "uint256" }, { "indexed": false, "name": "creationTime", "type": "uint256" }], "name": "SessionCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "sessionAddr", "type": "address" }, { "indexed": true, "name": "tutorAddr", "type": "address" }, { "indexed": true, "name": "bid", "type": "uint256" }], "name": "TutorResponded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "tutorAddr", "type": "address" }], "name": "TutorSelected", "type": "event" }];
  TutorApp.binary = "6060604052611178806100126000396000f3606060405236156100775760e060020a600035046346d09b25811461007957806371e17445146100dc5780638224a34114610198578063a24d2203146101b9578063a6c807a91461049e578063bec0b205146104cf578063d0b371bd14610540578063d9bfcecb146105db578063eed8d8b71461068a575b005b6107316004357f408c53ec000000000000000000000000000000000000000000000000000000006060908152600090600160a060020a0383169063408c53ec9060649060209060048187876161da5a03f115610002575050604051519392505050565b60206004803580820135601f8101849004909302608090810160405260608481526100779460249391929184019181908382808284375050600160a060020a033316600090815260016020818152604083208054895182865294839020999b509099508998600293821615610100026000190190911692909204601f9081019190910482019650919450925083901061093e57805160ff19168380011785555b5061096e9291505b808211156109955760008155600101610184565b61073a60043560006020819052908152604090206002810154600182019083565b60206004803580820135601f81018490049093026080908101604052606084815261007794602493919291840191819083828082843750506040805160208835808b0135601f81018390048302840183019094528383529799986044989297509190910194509092508291508401838280828437509496505093359350505050600060003385858560405161079d806109db8339018085600160a060020a0316815260200180602001806020018481526020018381038352868181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102c45780820380516001836020036101000a031916815260200191505b508381038252858181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561031d5780820380516001836020036101000a031916815260200191505b509650505050505050604051809103906000f091506001600050600033600160a060020a031681526020019081526020016000206000509050818160030160006101000a815481600160a060020a03021916908302179055507f8231916797128bfe309b40288ad81890d5a7d04150808c07e93906a09da010f58233878787426040518087600160a060020a0316815260200186600160a060020a0316815260200180602001806020018581526020018481526020018381038352878181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561042b5780820380516001836020036101000a031916815260200191505b508381038252868181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156104845780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a15050505050565b60016020819052600435600090815260409020600381015491810154600282015461083e93600160a060020a031684565b6108956004357f10d7ee2e0000000000000000000000000000000000000000000000000000000060609081526000908190600160a060020a038416906310d7ee2e9060649060409060048187876161da5a03f115610002575050604051805160209190910151909350915050915091565b6108b260043560006060818152600160a060020a038084168352600160208181526040808620808401546002808301546003840154845460a0601f6000199a831615610100029a909a01909116939093049788018790049096028201909452608086815297989788978897949687969495911692869190828280156109c45780601f10610999576101008083540402835291602001916109c4565b61007760043533600160a060020a039081166000908152600160209081526040822060038101547fd9bfcecb00000000000000000000000000000000000000000000000000000000606090815260648790529194169291839163d9bfcecb9160849160248187876161da5a03f115610002575050604051805192600160a060020a03841692507f7be05f93195c94462a0ab78399d037f95cc03639e7b3f209aa93226fa474ac6991a250505050565b6100776004356024357ffe8e569100000000000000000000000000000000000000000000000000000000606090815233600160a060020a03908116606452608483905283169063fe8e56919060a49060009060448183876161da5a03f1156100025750506040805191825251829133600160a060020a0316917f0c86ca1b96347fe4674674b434b6f8b610fa421bf8f69742a13cc094fa606f459181900360200190a35050565b50604051602090f35b60a0819052606080805283546002600182161561010002600019019091160460c0819052819060809060e090879080156107b55780601f1061078a576101008083540402835291602001916107b5565b820191906000526020600020905b81548152906001019060200180831161079857829003601f168201915b5050605f1981018252855460026001821615610100026000190190911604808252602091909101908690801561082c5780601f106108015761010080835404028352916020019161082c565b820191906000526020600020905b81548152906001019060200180831161080f57829003601f168201915b50509550505050505060405180910390f35b608083815260a083905260c08290526060908152845460026001821615610100908102600019019092160460e08190528291908790801561082c5780601f106108015761010080835404028352916020019161082c565b5060408051600160a060020a039290921682528051918290030190f35b604051808060200185815260200184815260200183600160a060020a031681526020018281038252868181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561092d5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b8280016001018555821561017c579182015b8281111561017c578251826000505591602001919060010190610950565b50503481600101600082828250540192505081905550600081600201600050819055505050565b5090565b820191906000526020600020905b8154815290600101906020018083116109a757829003601f168201915b50505050509350945094509450945050919350919356606060405260405161079d38038061079d83398101604052805160805160a05160c05192939182019291019060008054600160a060020a03199081163317825560018054909116861781558451600280549381905292602092811615610100026000190116839004601f9081018390047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101939091908801908390106100ca57805160ff19168380011785555b506100fa9291505b8082111561015357600081556001016100b6565b828001600101855582156100ae579182015b828111156100ae5782518260005055916020019190600101906100dc565b50508160036000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061015757805160ff19168380011785555b506101879291506100b6565b5090565b82800160010185558215610147579182015b82811115610147578251826000505591602001919060010190610169565b5050600455505042600555506006805460ff191690556105f2806101ab6000396000f3606060405236156100ae5760e060020a600035046310d7ee2e81146100b0578063188b6715146100e0578063408c53ec14610100578063453246881461010e57806352ed06c4146101685780635dd3c35f146101ca578063699450e8146101e15780638da5cb5b146101f3578063c040e6b814610205578063c08d1fe514610211578063d8270dce1461021a578063d9bfcecb14610223578063de6b7e0914610247578063fe8e5691146102a3575b005b600854600954600160a060020a0391909116905b600160a060020a03919091166060908152608091909152604090f35b6100ae600054600160a060020a039081163391909116146105ae57610002565b6007545b6060908152602090f35b6102c260028054602060018216156101000260001901909116829004601f810182900490910260809081016040526060828152929190828280156103785780601f1061034d57610100808354040283529160200191610378565b6100c460043560078054829081101561000257506000526002026000805160206105d28339815191528101547fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6899190910154600160a060020a03919091169082565b6008546009546100c491600160a060020a03169082565b610330600154600160a060020a031681565b610330600054600160a060020a031681565b61010460065460ff1681565b61010460045481565b61010460055481565b61033060043560008054600160a060020a0390811633919091161461049657610002565b6102c2600380546020601f600260018416156101000260001901909316929092049182018190040260809081016040526060828152929190828280156103785780601f1061034d57610100808354040283529160200191610378565b6100ae600435602435600654600090819060ff16811461038857610002565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161035b57829003601f168201915b505050505081565b600191909101905b6007548210156103d65733600160a060020a03166007600050838154811015610002579083526002026000805160206105d28339815191520154600160a060020a0316141561038057610002565b6007805460018101808355828183801582901161043e5782875261043e9060029081026000805160206105d2833981519152908101918402015b8082111561049257805473ffffffffffffffffffffffffffffffffffffffff19168155600101888155610410565b5050509183526002026000805160206105d283398151915201825060a060405260608690526080859052805473ffffffffffffffffffffffffffffffffffffffff1916861781556001018490555050505050565b5090565b600654819060ff1681146104a957610002565b6007548114156104b857610002565b6007805460a06040526060918291869081101561000257508352600285026000805160206105d283398151915201835060000160009054906101000a9004600160a060020a031681526020016007600050858154811015610002575050600285026000805160206105d283398151915201835060010160005054815260200150600860005060008201518160000160006101000a815481600160a060020a0302191690830217905550602082015181600101600050559050506001600660006101000a81548160ff02191690830217905550600860005060000160009054906101000a9004600160a060020a0316915050919050565b60065460019060ff1681146105c257610002565b506006805460ff1916600217905556a66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688";

  if ("0xc2de58b91d7f9575c3ef36fc7c9b4ee397b3fbc6" != "") {
    TutorApp.address = "0xc2de58b91d7f9575c3ef36fc7c9b4ee397b3fbc6";

    // Backward compatibility; Deprecated.
    TutorApp.deployed_address = "0xc2de58b91d7f9575c3ef36fc7c9b4ee397b3fbc6";
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