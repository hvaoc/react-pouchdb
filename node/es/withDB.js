import _extends from "@babel/runtime/helpers/extends";
import React from "react";
import { forwardRef } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import reverseArgs from './utils/reverseArgs';
import useDB from './useDB';
export default reverseArgs(function withDB(Component, db) {
  return forwardRef(hoistStatics(Object.assign(function (props, ref) {
    return React.createElement(Component, _extends({}, props, {
      db: useDB(db, {
        callee: 'withDB',
        example: 'withDB(name|options, Component)'
      }),
      ref: ref
    }));
  }, {
    displayName: "withDB(".concat(Component.displayName || Component.name, ")"),
    WrappedComponent: Component
  }), Component));
});
//# sourceMappingURL=withDB.js.map