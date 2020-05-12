"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _default = function _default(_ref) {
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
      (0, _lodash.debounce)(setValue, wait, {
        leading: true,
        trailing: true,
        maxWait: maxWait
      })
    );
  };
};

exports.default = _default;
//# sourceMappingURL=debounceSetValue.js.map