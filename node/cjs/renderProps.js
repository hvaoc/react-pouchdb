"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _useDB = _interopRequireDefault(require("./useDB"));

var _default = function _default(valueToProps, error) {
  return function (useAPI) {
    var useAPIAndHandleReturnValue = function useAPIAndHandleReturnValue() {
      var _useAPI;

      return _useAPI = useAPI.apply(void 0, arguments), valueToProps(_useAPI);
    };

    return function useRenderProps(_ref) {
      var db = _ref.db,
          children = _ref.children,
          otherProps = (0, _objectWithoutProperties2.default)(_ref, ["db", "children"]);
      var props = {
        db: (0, _useDB.default)(db, error)
      };
      Object.assign(props, db ? useAPIAndHandleReturnValue(db, otherProps) : useAPIAndHandleReturnValue(otherProps));

      if (typeof children === 'function') {
        var _children$prototype;

        return ((_children$prototype = children.prototype) === null || _children$prototype === void 0 ? void 0 : _children$prototype.isReactComponent) ? (0, _react.createElement)(children, props) : children(props);
      }

      return (0, _react.cloneElement)(_react.Children.only(children), props);
    };
  };
};

exports.default = _default;
//# sourceMappingURL=renderProps.js.map