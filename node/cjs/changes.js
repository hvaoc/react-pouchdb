"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changes;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _createStore = _interopRequireDefault(require("./utils/createStore"));

var _processQueue = _interopRequireDefault(require("./utils/processQueue"));

var store = (0, _createStore.default)();

function changes(options, handleChange) {
  var _this = this;

  var _store = store([this, options], function () {
    var eventEmitter = _this.changes(options);

    return [eventEmitter, function (eventEmitter) {
      eventEmitter.cancel();
    }];
  }),
      _store2 = (0, _slicedToArray2.default)(_store, 2),
      eventEmitter = _store2[0],
      cleanup = _store2[1];

  var handleChangeQueued = (0, _processQueue.default)(handleChange);
  eventEmitter.on('change', handleChangeQueued);
  return function cancel() {
    eventEmitter.removeListener('change', handleChangeQueued);
    cleanup();
  };
}
//# sourceMappingURL=changes.js.map