import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
export default (function (fn) {
  var processing;
  return (
    /*#__PURE__*/
    function () {
      var _queued = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        var _this = this;

        var _len,
            args,
            _key,
            _args2 = arguments;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args2[_key];
                }

                // 2.b. Overwrite current processing indicator with a promise that resolves after current processing has completed
                processing = _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime.mark(function _callee() {
                  return _regeneratorRuntime.wrap(function _callee$(_context) {
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
});
//# sourceMappingURL=processQueue.js.map