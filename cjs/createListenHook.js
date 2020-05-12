"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _handleError = _interopRequireDefault(require("./handleError"));

var _useGetSubscription2 = _interopRequireDefault(require("./useGetSubscription"));

var _debounceSetValue = _interopRequireDefault(require("./debounceSetValue"));

var _default = function _default(useListen) {
  return function (db, options, subscribe) {
    var _ref, _useGetSubscription;

    return _ref = (_useGetSubscription = (0, _useGetSubscription2.default)(db, options, (0, _react.useCallback)(function (setValue) {
      var _ref2, _setValue;

      return _ref2 = (_setValue = setValue, (0, _debounceSetValue.default)(db)(_setValue)), subscribe(_ref2);
    }, [db, subscribe])), useListen(_useGetSubscription, db)), (0, _handleError.default)(_ref);
  };
};

exports.default = _default;
//# sourceMappingURL=createListenHook.js.map