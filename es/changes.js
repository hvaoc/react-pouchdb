import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import createStore from './utils/createStore';
import processQueue from './utils/processQueue';
var store = createStore();
export default function changes(options, handleChange) {
  var _this = this;

  var _store = store([this, options], function () {
    var eventEmitter = _this.changes(options);

    return [eventEmitter, function (eventEmitter) {
      eventEmitter.cancel();
    }];
  }),
      _store2 = _slicedToArray(_store, 2),
      eventEmitter = _store2[0],
      cleanup = _store2[1];

  var handleChangeQueued = processQueue(handleChange);
  eventEmitter.on('change', handleChangeQueued);
  return function cancel() {
    eventEmitter.removeListener('change', handleChangeQueued);
    cleanup();
  };
}
//# sourceMappingURL=changes.js.map