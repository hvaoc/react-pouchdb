import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
export default function handleError() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
      _ref2 = _slicedToArray(_ref, 2),
      error = _ref2[0],
      data = _ref2[1];

  if (error) {
    throw error;
  }

  return data;
}
//# sourceMappingURL=handleError.js.map