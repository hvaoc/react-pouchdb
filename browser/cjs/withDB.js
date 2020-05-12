"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _reverseArgs = _interopRequireDefault(require("./utils/reverseArgs"));

var _useDB = _interopRequireDefault(require("./useDB"));

var _default = (0, _reverseArgs.default)(function withDB(Component, db) {
  return (0, _react.forwardRef)((0, _hoistNonReactStatics.default)(Object.assign(function (props, ref) {
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      db: (0, _useDB.default)(db, {
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

exports.default = _default;
//# sourceMappingURL=withDB.js.map