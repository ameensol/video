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
  TutorApp.abi = [{ "constant": false, "inputs": [{ "name": "name", "type": "string" }], "name": "registerStudent", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "tutors", "outputs": [{ "name": "name", "type": "string" }, { "name": "reputation", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "students", "outputs": [{ "name": "name", "type": "string" }, { "name": "balance", "type": "uint256" }, { "name": "reputation", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "addBalance", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "addr", "type": "address" }], "name": "getStudentDetails", "outputs": [{ "name": "", "type": "string" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "type": "function" }];
  TutorApp.binary = "6060604052610425806100126000396000f3606060405260e060020a600035046371e1744581146100475780638224a34114610103578063a6c807a91461011f578063b163cc3814610142578063d0b371bd14610169575b005b60206004803580820135601f810184900490930260809081016040526060848152610045946024939192918401918190838280828437505033600160a060020a0316600090815260016020818152604083208054895182865294839020999b509099508998600293821615610100026000190190911692909204601f9081019190910482019650919450925083901061038a57805160ff19168380011785555b506103ba9291505b808211156103e157600081556001016100ef565b6101f66004356000602081905290815260409020600281015482565b610280600435600160208190526000918252604090912090810154600282015483565b33600160a060020a0316600090815260016020819052604090912001805434019055610045565b60006060818152600160a060020a03600435908116835260016020818152604080862080840154600280830154835496871615610100026000190190961604601f810185900490940260a0908101909352608084815261030e98969796958695939485949192918591828280156104105780601f106103e557610100808354040283529160200191610410565b60808190526040606090815282546002600182161561010002600019019091160460a0819052819060c090859080156102705780601f1061024557610100808354040283529160200191610270565b820191906000526020600020905b81548152906001019060200180831161025357829003601f168201915b5050935050505060405180910390f35b608082905260a0819052606080805283546002600182161561010002600019019091160460c0819052819060e090869080156102fd5780601f106102d2576101008083540402835291602001916102fd565b820191906000526020600020905b8154815290600101906020018083116102e057829003601f168201915b505094505050505060405180910390f35b60405180806020018481526020018381526020018281038252858181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561037a5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b828001600101855582156100e7579182015b828111156100e757825182600050559160200191906001019061039c565b50503481600101600082828250540192505081905550600081600201600050819055505050565b5090565b820191906000526020600020905b8154815290600101906020018083116103f357829003601f168201915b5050505050925093509350935050919390925056";

  if ("0x42381dcf3ad32d63a4d04fbfabd818af09ecf6b4" != "") {
    TutorApp.address = "0x42381dcf3ad32d63a4d04fbfabd818af09ecf6b4";

    // Backward compatibility; Deprecated.
    TutorApp.deployed_address = "0x42381dcf3ad32d63a4d04fbfabd818af09ecf6b4";
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