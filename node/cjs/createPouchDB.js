"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPouchDB;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _pouchdbNode = _interopRequireDefault(require("pouchdb-node"));

function createPouchDB(_ref) {
  var synchronousAPITemporarySubscriptionCleanupDelay = _ref.synchronousAPITemporarySubscriptionCleanupDelay,
      debounceUpdatesWait = _ref.debounceUpdatesWait,
      debounceUpdatesMaxWait = _ref.debounceUpdatesMaxWait,
      maxListeners = _ref.maxListeners,
      options = (0, _objectWithoutProperties2.default)(_ref, ["synchronousAPITemporarySubscriptionCleanupDelay", "debounceUpdatesWait", "debounceUpdatesMaxWait", "maxListeners"]);
  var db = new _pouchdbNode.default( // PouchDB constructor modifies the options object. Make sure options is a
  // copy so the original object remains untouched.
  options);

  if (maxListeners) {
    db.setMaxListeners(maxListeners);
  }

  return Object.assign(db, {
    reactPouchDBOptions: {
      synchronousAPITemporarySubscriptionCleanupDelay: synchronousAPITemporarySubscriptionCleanupDelay,
      debounceUpdatesWait: debounceUpdatesWait,
      debounceUpdatesMaxWait: debounceUpdatesMaxWait
    }
  });
}
//# sourceMappingURL=createPouchDB.js.map