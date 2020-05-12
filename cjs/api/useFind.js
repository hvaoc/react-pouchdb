"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _pouchdb = _interopRequireDefault(require("pouchdb"));

var _pouchdbFind = _interopRequireDefault(require("pouchdb-find"));

var _pouchdbCollate = require("pouchdb-collate");

var _pouchdbSelectorCore = require("pouchdb-selector-core");

var _reverseArgs = _interopRequireDefault(require("../utils/reverseArgs"));

var _changes = _interopRequireDefault(require("../changes"));

var _useDB = _interopRequireDefault(require("../useDB"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

_pouchdb.default.plugin(_pouchdbFind.default);

var changesOptions = {
  live: true,
  include_docs: true,
  since: 'now',
  // Documents are kept in memory. 'complete' event can return an empty array.
  return_docs: false
};

var _default = function _default(useListen) {
  return (0, _reverseArgs.default)(function useFind(options, db) {
    db = (0, _useDB.default)(db, {
      callee: 'useFind',
      example: 'useFind(db, options)'
    });
    var selector = options.selector,
        limit = options.limit,
        skip = options.skip,
        sort = options.sort;
    return useListen(db, options,
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(setValue) {
        var _context;

        var _ref2, docs, update;

        return _regenerator.default.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!sort) {
                  _context3.next = 3;
                  break;
                }

                _context3.next = 3;
                return db.createIndex({
                  index: {
                    fields: sort.map(function (field) {
                      return (0, _typeof2.default)(field) === 'object' ? Object.keys(field)[0] : field;
                    })
                  }
                });

              case 3:
                _context3.next = 5;
                return db.find(options);

              case 5:
                _ref2 = _context3.sent;
                docs = _ref2.docs;

                update = function update() {
                  return setValue((0, _toConsumableArray2.default)(docs));
                };

                update(); // To find deleted and other non-matching documents, listen all changes and use selector in 'change' event.

                return _context3.abrupt("return", (_context = db, _changes.default).call(_context, changesOptions,
                /*#__PURE__*/
                //
                function () {
                  var _ref4 = (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(_ref3) {
                    var _docs;

                    var deleted, doc, index, found, _docs2, length, _ref6, _ref6$docs, replacementDoc, sortOrders, sortedIndex, _ref8, _ref8$docs, lastDoc, _ref9, _ref9$docs, firstDoc;

                    return _regenerator.default.wrap(function _callee$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            deleted = _ref3.deleted, doc = _ref3.doc;
                            index = (_docs = docs) === null || _docs === void 0 ? void 0 : _docs.findIndex(function (_ref5) {
                              var _id = _ref5._id;
                              return doc._id === _id;
                            });
                            found = index !== -1; // Document was deleted or it does not match the selector?

                            if (!(deleted || selector && !(0, _pouchdbSelectorCore.matchesSelector)(doc, selector))) {
                              _context2.next = 17;
                              break;
                            }

                            if (!found) {
                              _context2.next = 15;
                              break;
                            }

                            // Remove.
                            docs.splice(index, 1);
                            _docs2 = docs, length = _docs2.length; // At the limit?

                            if (!(length + 1 === limit)) {
                              _context2.next = 14;
                              break;
                            }

                            _context2.next = 10;
                            return db.find(_objectSpread({}, options, {
                              limit: 1,
                              skip: (options.skip || 0) + length
                            }));

                          case 10:
                            _ref6 = _context2.sent;
                            _ref6$docs = (0, _slicedToArray2.default)(_ref6.docs, 1);
                            replacementDoc = _ref6$docs[0];

                            if (replacementDoc) {
                              docs.push(replacementDoc);
                            }

                          case 14:
                            update();

                          case 15:
                            _context2.next = 36;
                            break;

                          case 17:
                            if (found) {
                              // Update.
                              docs[index] = doc;
                            } else {
                              // Create.
                              if (!docs) {
                                docs = [];
                              }

                              docs.push(doc);
                            }

                            if (sort) {
                              sortOrders = sort.map(function (prop) {
                                return (0, _typeof2.default)(prop) === 'object' ? Object.entries(prop)[0] : // Default sort order is 'asc'
                                [prop, 'asc'];
                              });
                              docs.sort(function (a, b) {
                                var _iteratorNormalCompletion = true;
                                var _didIteratorError = false;
                                var _iteratorError = undefined;

                                try {
                                  for (var _iterator = sortOrders[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
                                        prop = _step$value[0],
                                        order = _step$value[1];

                                    var result = (0, _pouchdbCollate.collate)(a[prop], b[prop]);

                                    if (result !== 0) {
                                      return order === 'asc' ? result : -result;
                                    }
                                  }
                                } catch (err) {
                                  _didIteratorError = true;
                                  _iteratorError = err;
                                } finally {
                                  try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                      _iterator.return();
                                    }
                                  } finally {
                                    if (_didIteratorError) {
                                      throw _iteratorError;
                                    }
                                  }
                                }

                                return 0;
                              });
                            }

                            sortedIndex = docs.findIndex(function (_ref7) {
                              var _id = _ref7._id;
                              return doc._id === _id;
                            }); // Document update, new place is supposed to be last, `limit` option is set and limit was reached?

                            if (!(found && sortedIndex + 1 === limit)) {
                              _context2.next = 27;
                              break;
                            }

                            _context2.next = 23;
                            return db.find(_objectSpread({}, options, {
                              limit: 1,
                              skip: (options.skip || 0) + sortedIndex
                            }));

                          case 23:
                            _ref8 = _context2.sent;
                            _ref8$docs = (0, _slicedToArray2.default)(_ref8.docs, 1);
                            lastDoc = _ref8$docs[0];

                            if ((lastDoc === null || lastDoc === void 0 ? void 0 : lastDoc._id) !== doc._id) {
                              docs[sortedIndex] = lastDoc;
                            }

                          case 27:
                            if (!(skip && sortedIndex === 0)) {
                              _context2.next = 34;
                              break;
                            }

                            _context2.next = 30;
                            return db.find(_objectSpread({}, options, {
                              limit: 1
                            }));

                          case 30:
                            _ref9 = _context2.sent;
                            _ref9$docs = (0, _slicedToArray2.default)(_ref9.docs, 1);
                            firstDoc = _ref9$docs[0];

                            if ((firstDoc === null || firstDoc === void 0 ? void 0 : firstDoc._id) !== doc._id) {
                              docs[0] = firstDoc;
                            }

                          case 34:
                            if (docs.length > limit) {
                              docs.splice(limit);
                            }

                            update();

                          case 36:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
};

exports.default = _default;
//# sourceMappingURL=useFind.js.map