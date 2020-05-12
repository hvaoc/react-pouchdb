"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSubscription;

var _createStore = _interopRequireDefault(require("./utils/createStore"));

var _createSubscription = _interopRequireDefault(require("./createSubscription"));

var store = (0, _createStore.default)();

function getSubscription(db, key, subscribe) {
  return store([db, key], function (remove) {
    return [(0, _createSubscription.default)(subscribe, remove)];
  })[0];
}
//# sourceMappingURL=getSubscription.js.map