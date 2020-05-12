import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useContext, useMemo, useEffect } from 'react';
import PouchDB from "pouchdb-browser";
import stringify from 'fast-json-stable-stringify';
import createStore from './utils/createStore';
import DBContext from './DBContext';
import createPouchDB from './createPouchDB';
var store = createStore();
export function useDBOptions(options) {
  var optionsObject = typeof options === 'string' ? {
    name: options
  } : options;
  var key = stringify(optionsObject);
  var optionsMemoized = useMemo(function () {
    return optionsObject;
  }, [key]);
  var dependencies = [optionsMemoized];

  var _useMemo = useMemo(function () {
    return key === undefined ? [] : store([key], function () {
      return [optionsMemoized ? createPouchDB(optionsMemoized) : undefined, function (value) {
        value === null || value === void 0 ? void 0 : value.close();
      }];
    });
  }, dependencies),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      value = _useMemo2[0],
      cleanup = _useMemo2[1];

  useEffect(function () {
    return cleanup;
  }, dependencies);
  return value;
}
export function useDBContext() {
  return useContext(DBContext);
}
export default function useDB(any) {
  var _ref2, _dbInstance;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$callee = _ref.callee,
      callee = _ref$callee === void 0 ? 'useDB' : _ref$callee,
      _ref$example = _ref.example,
      example = _ref$example === void 0 ? 'useDB(options)' : _ref$example;

  var dbInstance = any instanceof PouchDB ? any : undefined;
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