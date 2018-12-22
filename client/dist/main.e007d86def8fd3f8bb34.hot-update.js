webpackHotUpdate("main",{

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_Components_pet_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Components/pet_image */ \"./client/src/Components/pet_image.jsx\");\n/* harmony import */ var _src_Components_pet_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/pet_description */ \"./client/src/Components/pet_description.jsx\");\n/* harmony import */ var styled_css_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-css-grid */ \"./node_modules/styled-css-grid/dist/styled-css-grid.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\nvar PetInfo =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(PetInfo, _React$Component);\n\n  function PetInfo() {\n    var _this;\n\n    _classCallCheck(this, PetInfo);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PetInfo).call(this));\n    _this.state = {\n      pet_id: 13124,\n      genus: null,\n      species: null,\n      description: null\n    };\n    return _this;\n  }\n\n  _createClass(PetInfo, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/api/info', {\n        headers: {\n          \"pet_id\": this.state.pet_id\n        }\n      }).then(function (response) {\n        console.log('response to initial GET: ', response.data);\n\n        _this2.setState({\n          genus: response.data.genus,\n          species: response.data.species,\n          description: response.data.description\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_css_grid__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n        columns: \"100px 1fr 1fr 100px\",\n        rows: \"minmax(45px,auto) 1fr 1fr minmax(45px,auto)\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_css_grid__WEBPACK_IMPORTED_MODULE_5__[\"Cell\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_css_grid__WEBPACK_IMPORTED_MODULE_5__[\"Cell\"], {\n        width: 1\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"PETINFORMATIONFUCKYEAHPETS\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_css_grid__WEBPACK_IMPORTED_MODULE_5__[\"Cell\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"pet-genus\"\n      }, this.state.genus), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"pet-species\"\n      }, this.state.species)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_css_grid__WEBPACK_IMPORTED_MODULE_5__[\"Cell\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_css_grid__WEBPACK_IMPORTED_MODULE_5__[\"Cell\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_css_grid__WEBPACK_IMPORTED_MODULE_5__[\"Cell\"], {\n        width: 1\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Components_pet_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_css_grid__WEBPACK_IMPORTED_MODULE_5__[\"Cell\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_css_grid__WEBPACK_IMPORTED_MODULE_5__[\"Cell\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_css_grid__WEBPACK_IMPORTED_MODULE_5__[\"Cell\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_css_grid__WEBPACK_IMPORTED_MODULE_5__[\"Cell\"], {\n        width: 2\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Components_pet_description__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        description: this.state.description\n      })));\n    }\n  }]);\n\n  return PetInfo;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PetInfo, null), document.getElementById('pet-info'));\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ })

})