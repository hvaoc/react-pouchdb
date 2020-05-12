"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PouchDB;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _DBContext = require("./DBContext");

var _useDB = require("./useDB");

function PouchDB(_ref) {
  var children = _ref.children,
      options = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  return _react.default.createElement(_DBContext.Provider, {
    value: (0, _useDB.useDBOptions)(options)
  }, children);
}
//# sourceMappingURL=PouchDB.js.map