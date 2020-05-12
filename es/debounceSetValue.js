import { debounce } from 'lodash';
export default (function (_ref) {
  var reactPouchDBOptions = _ref.reactPouchDBOptions,
      _ref$reactPouchDBOpti = _ref.reactPouchDBOptions,
      _ref$reactPouchDBOpti2 = _ref$reactPouchDBOpti.debounceUpdatesWait,
      wait = _ref$reactPouchDBOpti2 === void 0 ? 100 : _ref$reactPouchDBOpti2,
      _ref$reactPouchDBOpti3 = _ref$reactPouchDBOpti.debounceUpdatesMaxWait,
      maxWait = _ref$reactPouchDBOpti3 === void 0 ? 1000 : _ref$reactPouchDBOpti3;
  return reactPouchDBOptions.debounceUpdatesWait === null ? function (x) {
    return x;
  } : function (setValue) {
    return (// For batch of changes from bulkDocs, update only every `maxWait`.
      // If there were more updates, update also finally after `wait`.
      debounce(setValue, wait, {
        leading: true,
        trailing: true,
        maxWait: maxWait
      })
    );
  };
});
//# sourceMappingURL=debounceSetValue.js.map