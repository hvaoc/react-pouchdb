import _regeneratorRuntime from "@babel/runtime/regenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _typeof from "@babel/runtime/helpers/typeof";

var blobToUint8Array = function blobToUint8Array(blob) {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    reader.onload = function () {
      return resolve(new Uint8Array(reader.result));
    };

    reader.readAsArrayBuffer(blob);
  });
};

export default (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && global.Buffer ? function (x) {
  return x;
} :
/*#__PURE__*/
function () {
  var _attachmentsAsUint8Arrays = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(attachments) {
    var result, _i, _Object$entries, _Object$entries$_i, name, data;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
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

            _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), name = _Object$entries$_i[0], data = _Object$entries$_i[1].data;
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
//# sourceMappingURL=attachmentsAsUint8Arrays.js.map