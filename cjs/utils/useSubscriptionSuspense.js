"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSubscriptionSuspense;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _useSubscription = require("use-subscription");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Like use-subscription, but if current value is undefined, this will return undefined, and suspend right after first render until value is received.
function useSubscriptionSuspense(subscription) {
  var initializing = (0, _react.useRef)(true);
  var suspender = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    initializing.current = false;
  }, []);
  return (0, _useSubscription.useSubscription)(_objectSpread({}, subscription, {
    getCurrentValue: (0, _react.useCallback)(function () {
      var value = subscription.getCurrentValue();

      if (value !== undefined) {
        return value;
      }

      if (!suspender.current) {
        suspender.current = new Promise(function (resolve) {
          var unsubscribe = subscription.subscribe(function checkForUpdates() {
            resolve();
            unsubscribe();
          });
        });
      }

      if (initializing.current) {
        return;
      }

      throw suspender.current;
    }, [subscription])
  }));
}
//# sourceMappingURL=useSubscriptionSuspense.js.map