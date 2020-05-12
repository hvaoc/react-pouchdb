import createStore from './utils/createStore';
import createSubscription from './createSubscription';
var store = createStore();
export default function getSubscription(db, key, subscribe) {
  return store([db, key], function (remove) {
    return [createSubscription(subscribe, remove)];
  })[0];
}
//# sourceMappingURL=getSubscription.js.map