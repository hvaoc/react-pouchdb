import { useCallback } from 'react';
import handleError from './handleError';
import useGetSubscription from './useGetSubscription';
import debounceSetValue from './debounceSetValue';
export default (function (useListen) {
  return function (db, options, subscribe) {
    var _ref, _useGetSubscription;

    return _ref = (_useGetSubscription = useGetSubscription(db, options, useCallback(function (setValue) {
      var _ref2, _setValue;

      return _ref2 = (_setValue = setValue, debounceSetValue(db)(_setValue)), subscribe(_ref2);
    }, [db, subscribe])), useListen(_useGetSubscription, db)), handleError(_ref);
  };
});
//# sourceMappingURL=createListenHook.js.map