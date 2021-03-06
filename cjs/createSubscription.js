"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSubscription;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function createSubscription(_subscribe, remove) {
  var value;
  var subscribing;
  var updaters = new Set();
  return {
    getCurrentValue: function getCurrentValue() {
      return value;
    },
    subscribe: function subscribe(update) {
      updaters.add(update);

      if (updaters.size === 1) {
        subscribing = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _subscribe(function (nextValue) {
                    value = [null, nextValue];
                    updaters.forEach(function (updater) {
                      return updater();
                    });
                  });

                case 3:
                  return _context.abrupt("return", _context.sent);

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](0);
                  value = [_context.t0];
                  updaters.forEach(function (updater) {
                    return updater();
                  });

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 6]]);
        }))();
      }

      return (
        /*#__PURE__*/
        (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var unsubscribe;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  updaters.delete(update);

                  if (updaters.size) {
                    _context2.next = 7;
                    break;
                  }

                  remove();
                  _context2.next = 5;
                  return subscribing;

                case 5:
                  unsubscribe = _context2.sent;
                  unsubscribe === null || unsubscribe === void 0 ? void 0 : unsubscribe();

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))
      );
    }
  };
}
//# sourceMappingURL=createSubscription.js.map