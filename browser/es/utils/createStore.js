import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

// import get from '@postinumero/map-get-with-default';
var get = function get(key, getDefault) {
  var _this = this;

  return this.has(key) ? this.get(key) : function () {
    var defaultValue = getDefault();

    _this.set(key, defaultValue);

    return defaultValue;
  }();
};

export default function createStore() {
  var root = new Map();
  return function (path, create) {
    function remove(_ref) {
      var onCleanup = _ref.onCleanup,
          value = _ref.value;
      onCleanup === null || onCleanup === void 0 ? void 0 : onCleanup(value);
      var parent = root;
      var chain = path.map(function (key) {
        var item = {
          parent: parent,
          key: key
        };
        parent = parent.get(key);
        return item;
      });

      (function removeChild() {
        var _chain$pop = chain.pop(),
            parent = _chain$pop.parent,
            key = _chain$pop.key;

        parent.delete(key);

        if (!parent.size && chain.length) {
          removeChild();
        }
      })();
    }

    var pathCopy = _toConsumableArray(path);

    var lastKey = pathCopy.pop();
    var leaf = pathCopy.reduce(function (parent, key) {
      return get.call(parent, key, function () {
        return new Map();
      });
    }, root);
    var item = get.call(leaf, lastKey, function () {
      var _create = create(function () {
        return remove(item);
      }),
          _create2 = _slicedToArray(_create, 2),
          value = _create2[0],
          onCleanup = _create2[1];

      var item = {
        value: value,
        onCleanup: onCleanup,
        referenceCounter: 0
      };
      return item;
    });
    item.referenceCounter = item.referenceCounter + 1;
    return [item.value, function cleanup() {
      item.referenceCounter = item.referenceCounter - 1;

      if (!item.referenceCounter) {
        remove(item);
      }
    }];
  };
}
//# sourceMappingURL=createStore.js.map