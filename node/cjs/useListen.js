"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useSubscriptionImmediateSuspense = _interopRequireDefault(require("./utils/useSubscriptionImmediateSuspense"));

var _createListenHook = _interopRequireDefault(require("./createListenHook"));

var _default = (0, _createListenHook.default)(function (subscription, _ref) {
  var synchronousAPITemporarySubscriptionCleanupDelay = _ref.reactPouchDBOptions.synchronousAPITemporarySubscriptionCleanupDelay;
  return (0, _useSubscriptionImmediateSuspense.default)(subscription, synchronousAPITemporarySubscriptionCleanupDelay);
});

exports.default = _default;
//# sourceMappingURL=useListen.js.map