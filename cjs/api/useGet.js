"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("react");

var _fastJsonStableStringify = _interopRequireDefault(require("fast-json-stable-stringify"));

var _reverseArgs = _interopRequireDefault(require("../utils/reverseArgs"));

var _attachmentsAsUint8Arrays = _interopRequireDefault(require("../attachmentsAsUint8Arrays"));

var _changes = _interopRequireDefault(require("../changes"));

var _useDB = _interopRequireDefault(require("../useDB"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var UINT8ARRAY = 'u8a';
var ALLOWED_LIVE_OPTIONS = ['attachments', 'ajax', 'binary', 'id'];

function nextState(_x, _x2) {
  return _nextState.apply(this, arguments);
}

function _nextState() {
  _nextState = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(binary, doc) {
    return _regenerator.default.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(binary && doc && !doc._deleted)) {
              _context4.next = 11;
              break;
            }

            _context4.t1 = _objectSpread;
            _context4.t2 = {};
            _context4.t3 = doc;
            _context4.next = 6;
            return (0, _attachmentsAsUint8Arrays.default)(doc._attachments);

          case 6:
            _context4.t4 = _context4.sent;
            _context4.t5 = {
              _attachments: _context4.t4
            };
            _context4.t0 = (0, _context4.t1)(_context4.t2, _context4.t3, _context4.t5);
            _context4.next = 12;
            break;

          case 11:
            _context4.t0 = doc;

          case 12:
            return _context4.abrupt("return", _context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3);
  }));
  return _nextState.apply(this, arguments);
}

var _default = function _default(useListen) {
  return (0, _reverseArgs.default)(function useGet(options, db) {
    db = (0, _useDB.default)(db, {
      callee: 'useGet',
      example: 'useGet(db, options)'
    });
    var id = options.id,
        attachments = options.attachments,
        otherOptions = (0, _objectWithoutProperties2.default)(options, ["id", "attachments"]);
    var binary = attachments === UINT8ARRAY;
    var optionsWithAttachmentAndBinaryOption = (0, _react.useMemo)(function () {
      return _objectSpread({
        binary: binary
      }, otherOptions, {
        attachments: !!attachments
      });
    }, [binary, (0, _fastJsonStableStringify.default)(otherOptions), !!attachments]);
    var changesOptions = (0, _react.useMemo)(function () {
      return _objectSpread({}, optionsWithAttachmentAndBinaryOption, {
        live: true,
        include_docs: true,
        since: 'now',
        doc_ids: [id]
      });
    }, [optionsWithAttachmentAndBinaryOption, id]);
    return useListen(db, options,
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(setValue) {
        var _context;

        return _regenerator.default.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.t0 = setValue;
                _context3.t1 = nextState;
                _context3.t2 = binary;
                _context3.next = 6;
                return db.get(id, optionsWithAttachmentAndBinaryOption);

              case 6:
                _context3.t3 = _context3.sent;
                _context3.next = 9;
                return (0, _context3.t1)(_context3.t2, _context3.t3);

              case 9:
                _context3.t4 = _context3.sent;
                (0, _context3.t0)(_context3.t4);
                _context3.next = 18;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t5 = _context3["catch"](0);

                if (!(_context3.t5.status !== 404)) {
                  _context3.next = 17;
                  break;
                }

                throw _context3.t5;

              case 17:
                setValue(null);

              case 18:
                if (!Object.keys(options).every(function (option) {
                  return ALLOWED_LIVE_OPTIONS.includes(option);
                })) {
                  _context3.next = 20;
                  break;
                }

                return _context3.abrupt("return", (_context = db, _changes.default).call(_context, changesOptions,
                /*#__PURE__*/
                function () {
                  var _ref3 = (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(_ref2) {
                    var doc;
                    return _regenerator.default.wrap(function _callee$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            doc = _ref2.doc;
                            _context2.t0 = setValue;
                            _context2.next = 4;
                            return nextState(binary, doc);

                          case 4:
                            _context2.t1 = _context2.sent;
                            (0, _context2.t0)(_context2.t1);

                          case 6:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x4) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }));

      return function (_x3) {
        return _ref.apply(this, arguments);
      };
    }());
  });
};

exports.default = _default;
//# sourceMappingURL=useGet.js.map