import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
export default (function (fn) {
  return function reverseArgs() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn.call.apply(fn, [this].concat(_toConsumableArray(args.reverse())));
  };
});
//# sourceMappingURL=reverseArgs.js.map