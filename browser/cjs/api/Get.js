"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _renderProps = _interopRequireDefault(require("../renderProps"));

var _default = (0, _renderProps.default)(function (doc) {
  return {
    doc: doc
  };
}, {
  callee: '<Get>',
  example: '<Get db={name|options} ... />'
});

exports.default = _default;
//# sourceMappingURL=Get.js.map