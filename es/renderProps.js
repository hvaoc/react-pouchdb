import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { Children, cloneElement, createElement } from 'react';
import useDB from './useDB';
export default (function (valueToProps, error) {
  return function (useAPI) {
    var useAPIAndHandleReturnValue = function useAPIAndHandleReturnValue() {
      var _useAPI;

      return _useAPI = useAPI.apply(void 0, arguments), valueToProps(_useAPI);
    };

    return function useRenderProps(_ref) {
      var db = _ref.db,
          children = _ref.children,
          otherProps = _objectWithoutProperties(_ref, ["db", "children"]);

      var props = {
        db: useDB(db, error)
      };
      Object.assign(props, db ? useAPIAndHandleReturnValue(db, otherProps) : useAPIAndHandleReturnValue(otherProps));

      if (typeof children === 'function') {
        var _children$prototype;

        return ((_children$prototype = children.prototype) === null || _children$prototype === void 0 ? void 0 : _children$prototype.isReactComponent) ? createElement(children, props) : children(props);
      }

      return cloneElement(Children.only(children), props);
    };
  };
});
//# sourceMappingURL=renderProps.js.map