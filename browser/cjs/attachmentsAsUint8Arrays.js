"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var blobToUint8Array = function blobToUint8Array(blob) {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    reader.onload = function () {
      return resolve(new Uint8Array(reader.result));
    };

    reader.readAsArrayBuffer(blob);
  });
};

var _default = (typeof global === "undefined" ? "undefined" : (0, _typeof2.default)(global)) === 'object' && global.Buffer ? function (x) {
  return x;
} :
/*#__PURE__*/
function () {
  var _attachmentsAsUint8Arrays = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(attachments) {
    var result, _i, _Object$entries, _Object$entries$_i, name, data;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {};
            _i = 0, _Object$entries = Object.entries(attachments);

          case 2:
            if (!(_i < _Object$entries.length)) {
              _context.next = 10;
              break;
            }

            _Object$entries$_i = (0, _slicedToArray2.default)(_Object$entries[_i], 2), name = _Object$entries$_i[0], data = _Object$entries$_i[1].data;
            _context.next = 6;
            return blobToUint8Array(data);

          case 6:
            result[name] = _context.sent;

          case 7:
            _i++;
            _context.next = 2;
            break;

          case 10:
            return _context.abrupt("return", result);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function attachmentsAsUint8Arrays(_x) {
    return _attachmentsAsUint8Arrays.apply(this, arguments);
  }

  return attachmentsAsUint8Arrays;
}();

exports.default = _default;
//# sourceMappingURL=attachmentsAsUint8Arrays.js.map