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
  TutorApp.abi = [{ "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "tutors", "outputs": [{ "name": "name", "type": "string" }, { "name": "reputation", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "students", "outputs": [{ "name": "name", "type": "string" }, { "name": "balance", "type": "uint256" }, { "name": "reputation", "type": "uint256" }], "type": "function" }];
  TutorApp.binary = "606060405261017d806100126000396000f3606060405260e060020a60003504638224a3418114610026578063a6c807a914610042575b005b6100656004356000602081905290815260409020600281015482565b6100ef600435600160208190526000918252604090912090810154600282015483565b60808190526040606090815282546002600182161561010002600019019091160460a0819052819060c090859080156100df5780601f106100b4576101008083540402835291602001916100df565b820191906000526020600020905b8154815290600101906020018083116100c257829003601f168201915b5050935050505060405180910390f35b608082905260a0819052606080805283546002600019610100600184161502019091160460c0819052819060e0908690801561016c5780601f106101415761010080835404028352916020019161016c565b820191906000526020600020905b81548152906001019060200180831161014f57829003601f168201915b505094505050505060405180910390f3";

  if ("0x1c3d7d1a9c83b1b6a4a5c542ec4d381411992421" != "") {
    TutorApp.address = "0x1c3d7d1a9c83b1b6a4a5c542ec4d381411992421";

    // Backward compatibility; Deprecated.
    TutorApp.deployed_address = "0x1c3d7d1a9c83b1b6a4a5c542ec4d381411992421";
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