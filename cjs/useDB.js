"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDBOptions = useDBOptions;
exports.useDBContext = useDBContext;
exports.default = useDB;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _pouchdb = _interopRequireDefault(require("pouchdb"));

var _fastJsonStableStringify = _interopRequireDefault(require("fast-json-stable-stringify"));

var _createStore = _interopRequireDefault(require("./utils/createStore"));

var _DBContext = _interopRequireDefault(require("./DBContext"));

var _createPouchDB = _interopRequireDefault(require("./createPouchDB"));

var store = (0, _createStore.default)();

function useDBOptions(options) {
  var optionsObject = typeof options === 'string' ? {
    name: options
  } : options;
  var key = (0, _fastJsonStableStringify.default)(optionsObject);
  var optionsMemoized = (0, _react.useMemo)(function () {
    return optionsObject;
  }, [key]);
  var dependencies = [optionsMemoized];

  var _useMemo = (0, _react.useMemo)(function () {
    return key === undefined ? [] : store([key], function () {
      return [optionsMemoized ? (0, _createPouchDB.default)(optionsMemoized) : undefined, function (value) {
        value === null || value === void 0 ? void 0 : value.close();
      }];
    });
  }, dependencies),
      _useMemo2 = (0, _slicedToArray2.default)(_useMemo, 2),
      value = _useMemo2[0],
      cleanup = _useMemo2[1];

  (0, _react.useEffect)(function () {
    return cleanup;
  }, dependencies);
  return value;
}

function useDBContext() {
  return (0, _react.useContext)(_DBContext.default);
}

function useDB(any) {
  var _ref2, _dbInstance;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$callee = _ref.callee,
      callee = _ref$callee === void 0 ? 'useDB' : _ref$callee,
      _ref$example = _ref.example,
      example = _ref$example === void 0 ? 'useDB(options)' : _ref$example;

  var dbInstance = any instanceof _pouchdb.default ? any : undefined;
  var options = dbInstance ? undefined : any;
  var dbOptions = useDBOptions(options);
  var dbContext = useDBContext();
  var db = (_ref2 = (_dbInstance = dbInstance) !== null && _dbInstance !== void 0 ? _dbInstance : dbOptions) !== null && _ref2 !== void 0 ? _ref2 : dbContext;

  if (!db) {
    throw new Error(callee ? "`".concat(callee, "` was called without `db` and database is not in context. Provide database using <PouchDB> or `").concat(example, "`") : 'Database is not in context. Provide database using <PouchDB>');
  }

  return db;
}
//# sourceMappingURL=useDB.js.map