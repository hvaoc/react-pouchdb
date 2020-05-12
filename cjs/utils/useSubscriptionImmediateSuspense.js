"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSubscriptionImmediateSuspense;

var _useSubscription = require("use-subscription");

// Like use-subscription, but if current value is undefined, this will suspend immediately until value is received.
// Initial subscription is closed after cleanupDelay. Component should have mounted (and subscribed) by then or process is repeated indefinitely.
function useSubscriptionImmediateSuspense(subscription) {
  var cleanupDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30000;

  if (!subscription.getCurrentValue()) {
    throw new Promise(function (resolve) {
      var unsubscribe = subscription.subscribe(resolve);
      setTimeout(unsubscribe, cleanupDelay);
    });
  }

  return (0, _useSubscription.useSubscription)(subscription);
}
//# sourceMappingURL=useSubscriptionImmediateSuspense.js.map