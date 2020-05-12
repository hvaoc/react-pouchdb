"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleError;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function handleError() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
      _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      error = _ref2[0],
      data = _ref2[1];

  if (error) {
    throw error;
  }

  return data;
}
//# sourceMappingURL=handleError.js.map