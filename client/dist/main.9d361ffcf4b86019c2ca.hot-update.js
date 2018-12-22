webpackHotUpdate("main",{

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_Components_pet_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Components/pet_image */ \"./client/src/Components/pet_image.jsx\");\n/* harmony import */ var _src_Components_pet_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/pet_description */ \"./client/src/Components/pet_description.jsx\");\n/* harmony import */ var styled_css_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-css-grid */ \"./node_modules/styled-css-grid/dist/styled-css-grid.esm.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar PetInfo =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(PetInfo, _React$Component);\n\n  function PetInfo() {\n    var _this;\n\n    _classCallCheck(this, PetInfo);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PetInfo).call(this));\n    _this.state = {\n      pet_id: 13124,\n      genus: null,\n      species: null,\n      description: null\n    };\n    return _this;\n  }\n\n  _createClass(PetInfo, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/api/info', {\n        headers: {\n          \"pet_id\": this.state.pet_id\n        }\n      }).then(function (response) {\n        console.log('response to initial GET: ', response.data);\n\n        _this2.setState({\n          genus: response.data.genus,\n          species: response.data.species,\n          description: response.data.description\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"image-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"PETINFORMATIONFUCKYEAHPETS\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"pet-genus\"\n      }, this.state.genus), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"pet-species\"\n      }, this.state.species), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Components_pet_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Components_pet_description__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        description: this.state.description\n      }));\n    }\n  }]);\n\n  return PetInfo;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PetInfo, null), document.getElementById('pet-info'));\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ }),

/***/ "./node_modules/styled-css-grid/dist/styled-css-grid.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/styled-css-grid/dist/styled-css-grid.esm.js ***!
  \******************************************************************/
/*! exports provided: Cell, Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction createCommonjsModule(e, n) {\n  return n = {\n    exports: {}\n  }, e(n, n.exports), n.exports;\n}\n\nfunction makeEmptyFunction(e) {\n  return function () {\n    return e;\n  };\n}\n\nfunction invariant(e, n, r, t, o, i, a, u) {\n  if (validateFormat(n), !e) {\n    var c;\n    if (void 0 === n) c = new Error(\"Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.\");else {\n      var s = [r, t, o, i, a, u],\n          p = 0;\n      (c = new Error(n.replace(/%s/g, function () {\n        return s[p++];\n      }))).name = \"Invariant Violation\";\n    }\n    throw c.framesToPop = 1, c;\n  }\n}\n\nfunction toObject(e) {\n  if (null === e || void 0 === e) throw new TypeError(\"Object.assign cannot be called with null or undefined\");\n  return Object(e);\n}\n\nfunction shouldUseNative() {\n  try {\n    if (!Object.assign) return !1;\n    var e = new String(\"abc\");\n    if (e[5] = \"de\", \"5\" === Object.getOwnPropertyNames(e)[0]) return !1;\n\n    for (var n = {}, r = 0; r < 10; r++) n[\"_\" + String.fromCharCode(r)] = r;\n\n    if (\"0123456789\" !== Object.getOwnPropertyNames(n).map(function (e) {\n      return n[e];\n    }).join(\"\")) return !1;\n    var t = {};\n    return \"abcdefghijklmnopqrst\".split(\"\").forEach(function (e) {\n      t[e] = e;\n    }), \"abcdefghijklmnopqrst\" === Object.keys(Object.assign({}, t)).join(\"\");\n  } catch (e) {\n    return !1;\n  }\n}\n\nfunction checkPropTypes(e, n, r, t, o) {\n  if (true) for (var i in e) if (e.hasOwnProperty(i)) {\n    var a;\n\n    try {\n      invariant$1(\"function\" == typeof e[i], \"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.\", t || \"React class\", r, i, _typeof(e[i])), a = e[i](n, i, t, r, null, ReactPropTypesSecret$1);\n    } catch (e) {\n      a = e;\n    }\n\n    if (warning$1(!a || a instanceof Error, \"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).\", t || \"React class\", r, i, void 0 === a ? \"undefined\" : _typeof(a)), a instanceof Error && !(a.message in loggedTypeFailures)) {\n      loggedTypeFailures[a.message] = !0;\n      var u = o ? o() : \"\";\n      warning$1(!1, \"Failed %s type: %s%s\", r, a.message, null != u ? u : \"\");\n    }\n  }\n}\n\n\n\nvar emptyFunction = function () {};\n\nemptyFunction.thatReturns = makeEmptyFunction, emptyFunction.thatReturnsFalse = makeEmptyFunction(!1), emptyFunction.thatReturnsTrue = makeEmptyFunction(!0), emptyFunction.thatReturnsNull = makeEmptyFunction(null), emptyFunction.thatReturnsThis = function () {\n  return this;\n}, emptyFunction.thatReturnsArgument = function (e) {\n  return e;\n};\n\nvar emptyFunction_1 = emptyFunction,\n    validateFormat = function (e) {};\n\n true && (validateFormat = function (e) {\n  if (void 0 === e) throw new Error(\"invariant requires an error message argument\");\n});\nvar invariant_1 = invariant,\n    warning = emptyFunction_1;\n\nif (true) {\n  var printWarning = function (e) {\n    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), t = 1; t < n; t++) r[t - 1] = arguments[t];\n\n    var o = 0,\n        i = \"Warning: \" + e.replace(/%s/g, function () {\n      return r[o++];\n    });\n    \"undefined\" != typeof console && console.error(i);\n\n    try {\n      throw new Error(i);\n    } catch (e) {}\n  };\n\n  warning = function (e, n) {\n    if (void 0 === n) throw new Error(\"`warning(condition, format, ...args)` requires a warning message argument\");\n\n    if (0 !== n.indexOf(\"Failed Composite propType: \") && !e) {\n      for (var r = arguments.length, t = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) t[o - 2] = arguments[o];\n\n      printWarning.apply(void 0, [n].concat(t));\n    }\n  };\n}\n\nvar warning_1 = warning,\n    getOwnPropertySymbols = Object.getOwnPropertySymbols,\n    hasOwnProperty = Object.prototype.hasOwnProperty,\n    propIsEnumerable = Object.prototype.propertyIsEnumerable,\n    index$1 = shouldUseNative() ? Object.assign : function (e, n) {\n  for (var r, t, o = toObject(e), i = 1; i < arguments.length; i++) {\n    r = Object(arguments[i]);\n\n    for (var a in r) hasOwnProperty.call(r, a) && (o[a] = r[a]);\n\n    if (getOwnPropertySymbols) {\n      t = getOwnPropertySymbols(r);\n\n      for (var u = 0; u < t.length; u++) propIsEnumerable.call(r, t[u]) && (o[t[u]] = r[t[u]]);\n    }\n  }\n\n  return o;\n},\n    ReactPropTypesSecret = \"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED\",\n    ReactPropTypesSecret_1 = ReactPropTypesSecret,\n    _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (e) {\n  return typeof e;\n} : function (e) {\n  return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e;\n};\n\nif (true) var invariant$1 = invariant_1,\n    warning$1 = warning_1,\n    ReactPropTypesSecret$1 = ReactPropTypesSecret_1,\n    loggedTypeFailures = {};\n\nvar checkPropTypes_1 = checkPropTypes,\n    factoryWithTypeCheckers = function (e, n) {\n  function r(e) {\n    var n = e && (d && e[d] || e[y]);\n    if (\"function\" == typeof n) return n;\n  }\n\n  function t(e, n) {\n    return e === n ? 0 !== e || 1 / e == 1 / n : e !== e && n !== n;\n  }\n\n  function o(e) {\n    this.message = e, this.stack = \"\";\n  }\n\n  function i(e) {\n    function r(r, a, u, c, s, p, f) {\n      if (c = c || m, p = p || u, f !== ReactPropTypesSecret_1) if (n) invariant_1(!1, \"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types\");else if ( true && \"undefined\" != typeof console) {\n        var l = c + \":\" + u;\n        !t[l] && i < 3 && (warning_1(!1, \"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.\", p, c), t[l] = !0, i++);\n      }\n      return null == a[u] ? r ? new o(null === a[u] ? \"The \" + s + \" `\" + p + \"` is marked as required in `\" + c + \"`, but its value is `null`.\" : \"The \" + s + \" `\" + p + \"` is marked as required in `\" + c + \"`, but its value is `undefined`.\") : null : e(a, u, c, s, p);\n    }\n\n    if (true) var t = {},\n        i = 0;\n    var a = r.bind(null, !1);\n    return a.isRequired = r.bind(null, !0), a;\n  }\n\n  function a(e) {\n    return i(function (n, r, t, i, a, u) {\n      var c = n[r];\n      return s(c) !== e ? new o(\"Invalid \" + i + \" `\" + a + \"` of type `\" + p(c) + \"` supplied to `\" + t + \"`, expected `\" + e + \"`.\") : null;\n    });\n  }\n\n  function u(n) {\n    switch (void 0 === n ? \"undefined\" : _typeof(n)) {\n      case \"number\":\n      case \"string\":\n      case \"undefined\":\n        return !0;\n\n      case \"boolean\":\n        return !n;\n\n      case \"object\":\n        if (Array.isArray(n)) return n.every(u);\n        if (null === n || e(n)) return !0;\n        var t = r(n);\n        if (!t) return !1;\n        var o,\n            i = t.call(n);\n\n        if (t !== n.entries) {\n          for (; !(o = i.next()).done;) if (!u(o.value)) return !1;\n        } else for (; !(o = i.next()).done;) {\n          var a = o.value;\n          if (a && !u(a[1])) return !1;\n        }\n\n        return !0;\n\n      default:\n        return !1;\n    }\n  }\n\n  function c(e, n) {\n    return \"symbol\" === e || \"Symbol\" === n[\"@@toStringTag\"] || \"function\" == typeof Symbol && n instanceof Symbol;\n  }\n\n  function s(e) {\n    var n = void 0 === e ? \"undefined\" : _typeof(e);\n    return Array.isArray(e) ? \"array\" : e instanceof RegExp ? \"object\" : c(n, e) ? \"symbol\" : n;\n  }\n\n  function p(e) {\n    if (void 0 === e || null === e) return \"\" + e;\n    var n = s(e);\n\n    if (\"object\" === n) {\n      if (e instanceof Date) return \"date\";\n      if (e instanceof RegExp) return \"regexp\";\n    }\n\n    return n;\n  }\n\n  function f(e) {\n    var n = p(e);\n\n    switch (n) {\n      case \"array\":\n      case \"object\":\n        return \"an \" + n;\n\n      case \"boolean\":\n      case \"date\":\n      case \"regexp\":\n        return \"a \" + n;\n\n      default:\n        return n;\n    }\n  }\n\n  function l(e) {\n    return e.constructor && e.constructor.name ? e.constructor.name : m;\n  }\n\n  var d = \"function\" == typeof Symbol && Symbol.iterator,\n      y = \"@@iterator\",\n      m = \"<<anonymous>>\",\n      v = {\n    array: a(\"array\"),\n    bool: a(\"boolean\"),\n    func: a(\"function\"),\n    number: a(\"number\"),\n    object: a(\"object\"),\n    string: a(\"string\"),\n    symbol: a(\"symbol\"),\n    any: i(emptyFunction_1.thatReturnsNull),\n    arrayOf: function (e) {\n      return i(function (n, r, t, i, a) {\n        if (\"function\" != typeof e) return new o(\"Property `\" + a + \"` of component `\" + t + \"` has invalid PropType notation inside arrayOf.\");\n        var u = n[r];\n        if (!Array.isArray(u)) return new o(\"Invalid \" + i + \" `\" + a + \"` of type `\" + s(u) + \"` supplied to `\" + t + \"`, expected an array.\");\n\n        for (var c = 0; c < u.length; c++) {\n          var p = e(u, c, t, i, a + \"[\" + c + \"]\", ReactPropTypesSecret_1);\n          if (p instanceof Error) return p;\n        }\n\n        return null;\n      });\n    },\n    element: function () {\n      return i(function (n, r, t, i, a) {\n        var u = n[r];\n        return e(u) ? null : new o(\"Invalid \" + i + \" `\" + a + \"` of type `\" + s(u) + \"` supplied to `\" + t + \"`, expected a single ReactElement.\");\n      });\n    }(),\n    instanceOf: function (e) {\n      return i(function (n, r, t, i, a) {\n        if (!(n[r] instanceof e)) {\n          var u = e.name || m;\n          return new o(\"Invalid \" + i + \" `\" + a + \"` of type `\" + l(n[r]) + \"` supplied to `\" + t + \"`, expected instance of `\" + u + \"`.\");\n        }\n\n        return null;\n      });\n    },\n    node: function () {\n      return i(function (e, n, r, t, i) {\n        return u(e[n]) ? null : new o(\"Invalid \" + t + \" `\" + i + \"` supplied to `\" + r + \"`, expected a ReactNode.\");\n      });\n    }(),\n    objectOf: function (e) {\n      return i(function (n, r, t, i, a) {\n        if (\"function\" != typeof e) return new o(\"Property `\" + a + \"` of component `\" + t + \"` has invalid PropType notation inside objectOf.\");\n        var u = n[r],\n            c = s(u);\n        if (\"object\" !== c) return new o(\"Invalid \" + i + \" `\" + a + \"` of type `\" + c + \"` supplied to `\" + t + \"`, expected an object.\");\n\n        for (var p in u) if (u.hasOwnProperty(p)) {\n          var f = e(u, p, t, i, a + \".\" + p, ReactPropTypesSecret_1);\n          if (f instanceof Error) return f;\n        }\n\n        return null;\n      });\n    },\n    oneOf: function (e) {\n      return Array.isArray(e) ? i(function (n, r, i, a, u) {\n        for (var c = n[r], s = 0; s < e.length; s++) if (t(c, e[s])) return null;\n\n        return new o(\"Invalid \" + a + \" `\" + u + \"` of value `\" + c + \"` supplied to `\" + i + \"`, expected one of \" + JSON.stringify(e) + \".\");\n      }) : ( true && warning_1(!1, \"Invalid argument supplied to oneOf, expected an instance of array.\"), emptyFunction_1.thatReturnsNull);\n    },\n    oneOfType: function (e) {\n      if (!Array.isArray(e)) return  true && warning_1(!1, \"Invalid argument supplied to oneOfType, expected an instance of array.\"), emptyFunction_1.thatReturnsNull;\n\n      for (var n = 0; n < e.length; n++) {\n        var r = e[n];\n        if (\"function\" != typeof r) return warning_1(!1, \"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.\", f(r), n), emptyFunction_1.thatReturnsNull;\n      }\n\n      return i(function (n, r, t, i, a) {\n        for (var u = 0; u < e.length; u++) if (null == (0, e[u])(n, r, t, i, a, ReactPropTypesSecret_1)) return null;\n\n        return new o(\"Invalid \" + i + \" `\" + a + \"` supplied to `\" + t + \"`.\");\n      });\n    },\n    shape: function (e) {\n      return i(function (n, r, t, i, a) {\n        var u = n[r],\n            c = s(u);\n        if (\"object\" !== c) return new o(\"Invalid \" + i + \" `\" + a + \"` of type `\" + c + \"` supplied to `\" + t + \"`, expected `object`.\");\n\n        for (var p in e) {\n          var f = e[p];\n\n          if (f) {\n            var l = f(u, p, t, i, a + \".\" + p, ReactPropTypesSecret_1);\n            if (l) return l;\n          }\n        }\n\n        return null;\n      });\n    },\n    exact: function (e) {\n      return i(function (n, r, t, i, a) {\n        var u = n[r],\n            c = s(u);\n        if (\"object\" !== c) return new o(\"Invalid \" + i + \" `\" + a + \"` of type `\" + c + \"` supplied to `\" + t + \"`, expected `object`.\");\n        var p = index$1({}, n[r], e);\n\n        for (var f in p) {\n          var l = e[f];\n          if (!l) return new o(\"Invalid \" + i + \" `\" + a + \"` key `\" + f + \"` supplied to `\" + t + \"`.\\nBad object: \" + JSON.stringify(n[r], null, \"  \") + \"\\nValid keys: \" + JSON.stringify(Object.keys(e), null, \"  \"));\n          var d = l(u, f, t, i, a + \".\" + f, ReactPropTypesSecret_1);\n          if (d) return d;\n        }\n\n        return null;\n      });\n    }\n  };\n  return o.prototype = Error.prototype, v.checkPropTypes = checkPropTypes_1, v.PropTypes = v, v;\n},\n    factoryWithThrowingShims = function () {\n  function e(e, n, r, t, o, i) {\n    i !== ReactPropTypesSecret_1 && invariant_1(!1, \"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types\");\n  }\n\n  function n() {\n    return e;\n  }\n\n  e.isRequired = e;\n  var r = {\n    array: e,\n    bool: e,\n    func: e,\n    number: e,\n    object: e,\n    string: e,\n    symbol: e,\n    any: e,\n    arrayOf: n,\n    element: e,\n    instanceOf: n,\n    node: e,\n    objectOf: n,\n    oneOf: n,\n    oneOfType: n,\n    shape: n,\n    exact: n\n  };\n  return r.checkPropTypes = emptyFunction_1, r.PropTypes = r, r;\n},\n    index = createCommonjsModule(function (e) {\n  if (true) {\n    var n = \"function\" == typeof Symbol && Symbol.for && Symbol.for(\"react.element\") || 60103,\n        r = function (e) {\n      return \"object\" === (void 0 === e ? \"undefined\" : _typeof(e)) && null !== e && e.$$typeof === n;\n    };\n\n    e.exports = factoryWithTypeCheckers(r, !0);\n  } else {}\n}),\n    Cell = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).div.withConfig({\n  displayName: \"Cell__Cell\"\n})([\"height:100%;min-width:0;grid-column-end:\", \";grid-row-end:\", \";\", \";\", \";\", \";\", \";\", \";\"], function (e) {\n  var n = e.width;\n  return \"span \" + (void 0 === n ? 1 : n);\n}, function (e) {\n  var n = e.height;\n  return \"span \" + (void 0 === n ? 1 : n);\n}, function (e) {\n  var n = e.left;\n  return n && \"grid-column-start: \" + n;\n}, function (e) {\n  var n = e.top;\n  return n && \"grid-row-start: \" + n;\n}, function (e) {\n  return e.center && \"text-align: center\";\n}, function (e) {\n  var n = e.area;\n  return n && \"grid-area: \" + n;\n}, function (e) {\n  return e.middle && \"\\n    display: inline-flex;\\n    flex-flow: column wrap;\\n    justify-content: center;\\n    justify-self: stretch;\\n  \";\n});\n\nCell.propTypes = {\n  className: index.string,\n  width: index.number,\n  height: index.number,\n  top: index.oneOfType([index.number, index.string]),\n  left: index.oneOfType([index.number, index.string]),\n  middle: index.bool,\n  center: index.bool,\n  area: index.string\n};\n\nvar autoRows = function (e) {\n  var n = e.minRowHeight;\n  return \"minmax(\" + (void 0 === n ? \"20px\" : n) + \", auto)\";\n},\n    frGetter = function (e) {\n  return \"number\" == typeof e ? \"repeat(\" + e + \", 1fr)\" : e;\n},\n    gap = function (e) {\n  var n = e.gap,\n      r = void 0 === n ? \"8px\" : n;\n  return r;\n},\n    flow = function (e) {\n  var n = e.flow,\n      r = void 0 === n ? \"row\" : n;\n  return r;\n},\n    formatAreas = function (e) {\n  return e.map(function (e) {\n    return '\"' + e + '\"';\n  }).join(\" \");\n},\n    Grid = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).div.withConfig({\n  displayName: \"Grid__Grid\"\n})([\"display:grid;height:\", \";grid-auto-flow:\", \";grid-auto-rows:\", \";\", \";grid-template-columns:\", \";grid-gap:\", \";\", \";\", \";\", \";\", \";\", \";\"], function (e) {\n  var n = e.height;\n  return void 0 === n ? \"auto\" : n;\n}, flow, autoRows, function (e) {\n  var n = e.rows;\n  return n && \"grid-template-rows: \" + frGetter(n);\n}, function (e) {\n  var n = e.columns;\n  return frGetter(void 0 === n ? 12 : n);\n}, gap, function (e) {\n  var n = e.columnGap;\n  return n && \"column-gap: \" + n;\n}, function (e) {\n  var n = e.rowGap;\n  return n && \"row-gap: \" + n;\n}, function (e) {\n  var n = e.areas;\n  return n && \"grid-template-areas: \" + formatAreas(n);\n}, function (e) {\n  var n = e.justifyContent;\n  return n && \"justify-content: \" + n;\n}, function (e) {\n  var n = e.alignContent;\n  return n && \"align-content: \" + n;\n});\n\nGrid.propTypes = {\n  className: index.string,\n  columns: index.oneOfType([index.string, index.number]),\n  gap: index.string,\n  columnGap: index.string,\n  rowGap: index.string,\n  height: index.string,\n  minRowHeight: index.string,\n  flow: index.string,\n  rows: index.oneOfType([index.string, index.number]),\n  areas: index.arrayOf(index.string),\n  justifyContent: index.string,\n  alignContent: index.string\n};\n\n\n//# sourceURL=webpack:///./node_modules/styled-css-grid/dist/styled-css-grid.esm.js?");

/***/ })

})