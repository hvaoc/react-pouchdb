import { useMemo } from 'react';
import stringify from 'fast-json-stable-stringify';
import getSubscription from './getSubscription';
export default function useGetSubscription(db, options, subscribe) {
  var key = stringify(options);
  return useMemo(function () {
    return getSubscription(db, key, subscribe);
  }, [db, key, subscribe]);
}
//# sourceMappingURL=useGetSubscription.js.map