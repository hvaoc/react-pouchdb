import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from "react";
import { Provider } from './DBContext';
import { useDBOptions } from './useDB';
export default function PouchDB(_ref) {
  var children = _ref.children,
      options = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(Provider, {
    value: useDBOptions(options)
  }, children);
}
//# sourceMappingURL=PouchDB.js.map