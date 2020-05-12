"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = function _default(fn) {
  var processing;
  return (
    /*#__PURE__*/
    function () {
      var _queued = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _this = this;

        var _len,
            args,
            _key,
            _args2 = arguments;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args2[_key];
                }

                // 2.b. Overwrite current processing indicator with a promise that resolves after current processing has completed
                processing = (0, _asyncToGenerator2.default)(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee() {
                  return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return processing;

                        case 2:
                          return _context.abrupt("return", fn.call.apply(fn, [_this].concat(args)));

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))(); // 3. Return promise that resolves to response from fn call with current args

                return _context2.abrupt("return", processing);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function queued() {
        return _queued.apply(this, arguments);
      }

      return queued;
    }()
  );
};

exports.default = _default;
//# sourceMappingURL=processQueue.js.map