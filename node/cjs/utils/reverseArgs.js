"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _default = function _default(fn) {
  return function reverseArgs() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn.call.apply(fn, [this].concat((0, _toConsumableArray2.default)(args.reverse())));
  };
};

exports.default = _default;
//# sourceMappingURL=reverseArgs.js.map