"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useGetSubscription;

var _react = require("react");

var _fastJsonStableStringify = _interopRequireDefault(require("fast-json-stable-stringify"));

var _getSubscription = _interopRequireDefault(require("./getSubscription"));

function useGetSubscription(db, options, subscribe) {
  var key = (0, _fastJsonStableStringify.default)(options);
  return (0, _react.useMemo)(function () {
    return (0, _getSubscription.default)(db, key, subscribe);
  }, [db, key, subscribe]);
}
//# sourceMappingURL=useGetSubscription.js.map