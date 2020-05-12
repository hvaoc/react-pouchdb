import useSubscriptionImmediateSuspense from './utils/useSubscriptionImmediateSuspense';
import createListenHook from './createListenHook';
export default createListenHook(function (subscription, _ref) {
  var synchronousAPITemporarySubscriptionCleanupDelay = _ref.reactPouchDBOptions.synchronousAPITemporarySubscriptionCleanupDelay;
  return useSubscriptionImmediateSuspense(subscription, synchronousAPITemporarySubscriptionCleanupDelay);
});
//# sourceMappingURL=useListen.js.map