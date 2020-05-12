import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { useRef, useEffect, useCallback } from 'react';
import { useSubscription } from 'use-subscription'; // Like use-subscription, but if current value is undefined, this will return undefined, and suspend right after first render until value is received.

export default function useSubscriptionSuspense(subscription) {
  var initializing = useRef(true);
  var suspender = useRef();
  useEffect(function () {
    initializing.current = false;
  }, []);
  return useSubscription(_objectSpread({}, subscription, {
    getCurrentValue: useCallback(function () {
      var value = subscription.getCurrentValue();

      if (value !== undefined) {
        return value;
      }

      if (!suspender.current) {
        suspender.current = new Promise(function (resolve) {
          var unsubscribe = subscription.subscribe(function checkForUpdates() {
            resolve();
            unsubscribe();
          });
        });
      }

      if (initializing.current) {
        return;
      }

      throw suspender.current;
    }, [subscription])
  }));
}
//# sourceMappingURL=useSubscriptionSuspense.js.map