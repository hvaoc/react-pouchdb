import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PouchDB from "pouchdb-browser";
export default function createPouchDB(_ref) {
  var synchronousAPITemporarySubscriptionCleanupDelay = _ref.synchronousAPITemporarySubscriptionCleanupDelay,
      debounceUpdatesWait = _ref.debounceUpdatesWait,
      debounceUpdatesMaxWait = _ref.debounceUpdatesMaxWait,
      maxListeners = _ref.maxListeners,
      options = _objectWithoutProperties(_ref, ["synchronousAPITemporarySubscriptionCleanupDelay", "debounceUpdatesWait", "debounceUpdatesMaxWait", "maxListeners"]);

  var db = new PouchDB( // PouchDB constructor modifies the options object. Make sure options is a
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