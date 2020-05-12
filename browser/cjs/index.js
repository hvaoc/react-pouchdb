"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PouchDB", {
  enumerable: true,
  get: function get() {
    return _PouchDB2.default;
  }
});
Object.defineProperty(exports, "withDB", {
  enumerable: true,
  get: function get() {
    return _withDB2.default;
  }
});
Object.defineProperty(exports, "useDB", {
  enumerable: true,
  get: function get() {
    return _useDB2.default;
  }
});
exports.DBContext = exports.Get = exports.Find = exports.useGet = exports.useFind = void 0;

var _Find = _interopRequireDefault(require("./api/Find"));

var _Get = _interopRequireDefault(require("./api/Get"));

var _useFind = _interopRequireDefault(require("./api/useFind"));

var _useGet = _interopRequireDefault(require("./api/useGet"));

var _useListen = _interopRequireDefault(require("./useListen"));

var _PouchDB2 = _interopRequireDefault(require("./PouchDB"));

var _withDB2 = _interopRequireDefault(require("./withDB"));

var _DBContext = _interopRequireWildcard(require("./DBContext"));

exports.DBContext = _DBContext;

var _useDB2 = _interopRequireDefault(require("./useDB"));

var useFind = (0, _useFind.default)(_useListen.default);
exports.useFind = useFind;
var useGet = (0, _useGet.default)(_useListen.default);
exports.useGet = useGet;
var Find = (0, _Find.default)(useFind);
exports.Find = Find;
var Get = (0, _Get.default)(useGet);
exports.Get = Get;
//# sourceMappingURL=index.js.map