"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useSubscriptionSuspense = _interopRequireDefault(require("../utils/useSubscriptionSuspense"));

var _createListenHook = _interopRequireDefault(require("../createListenHook"));

var _default = (0, _createListenHook.default)(_useSubscriptionSuspense.default);

exports.default = _default;
//# sourceMappingURL=useListen.js.map