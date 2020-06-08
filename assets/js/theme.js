/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/theme.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blocks/section.js":
/*!**********************************!*\
  !*** ./src/js/blocks/section.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    ColorPalette = _wp$blockEditor.ColorPalette,\n    MediaUpload = _wp$blockEditor.MediaUpload;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    IconButton = _wp$components.IconButton;\nregisterBlockType('arkonsoft/section', {\n  title: 'Section',\n  description: 'Simple section',\n  icon: 'format-image',\n  category: 'layout',\n  attributes: {\n    heading: {\n      type: 'string',\n      source: 'html',\n      selector: 'h2'\n    },\n    body: {\n      type: 'string',\n      source: 'html',\n      selector: 'p'\n    },\n    bgColor: {\n      type: 'string',\n      default: 'transparent'\n    },\n    bgImage: {\n      type: 'string',\n      default: null\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n    var heading = attributes.heading,\n        body = attributes.body,\n        bgColor = attributes.bgColor,\n        bgImage = attributes.bgImage;\n\n    function onChangeHeading(val) {\n      setAttributes({\n        heading: val\n      });\n    }\n\n    function onChangeBody(val) {\n      setAttributes({\n        body: val\n      });\n    }\n\n    function onChangeBgColor(val) {\n      setAttributes({\n        bgColor: val\n      });\n    }\n\n    function onChangeBgImage(image) {\n      setAttributes({\n        bgImage: image.sizes.full.url\n      });\n    }\n\n    return [wp.element.createElement(InspectorControls, {\n      style: {\n        marginBottom: '40px'\n      }\n    }, wp.element.createElement(PanelBody, {\n      title: 'Colors'\n    }, wp.element.createElement(\"p\", null, wp.element.createElement(\"strong\", null, \"Choose background color\"), \":\"), wp.element.createElement(ColorPalette, {\n      value: bgColor,\n      onChange: onChangeBgColor\n    })), wp.element.createElement(PanelBody, {\n      title: 'Background image'\n    }, wp.element.createElement(\"p\", null, wp.element.createElement(\"strong\", null, \"Choose background image\"), \":\"), wp.element.createElement(MediaUpload, {\n      onSelect: onChangeBgImage,\n      type: \"image\",\n      value: bgImage,\n      render: function render(_ref2) {\n        var open = _ref2.open;\n        return wp.element.createElement(IconButton, {\n          onClick: open,\n          icon: \"upload\",\n          className: \"editor-media-placeholder__button is-button is-default is-large\"\n        }, \"Background Image\");\n      }\n    }))), wp.element.createElement(\"div\", {\n      style: {\n        backgroundColor: bgColor,\n        backgroundImage: \"url(\".concat(bgImage, \")\"),\n        backgroundSize: 'cover',\n        backgroundPosition: 'center',\n        backgroundRepeat: 'no-repeat'\n      }\n    }, wp.element.createElement(RichText, {\n      key: \"editable\",\n      tagName: \"h2\",\n      placeholder: \"Type heading text here\",\n      value: heading,\n      onChange: onChangeHeading\n    }), wp.element.createElement(RichText, {\n      key: \"editable\",\n      tagName: \"p\",\n      placeholder: \"Type body here\",\n      value: body,\n      onChange: onChangeBody\n    }))];\n  },\n  save: function save(_ref3) {\n    var attributes = _ref3.attributes;\n    var heading = attributes.heading,\n        body = attributes.body,\n        bgColor = attributes.bgColor,\n        bgImage = attributes.bgImage;\n    return wp.element.createElement(\"section\", {\n      style: {\n        backgroundColor: bgColor,\n        backgroundImage: \"url(\".concat(bgImage, \")\"),\n        backgroundSize: 'cover',\n        backgroundPosition: 'center',\n        backgroundRepeat: 'no-repeat'\n      }\n    }, wp.element.createElement(\"div\", {\n      \"class\": \"container\"\n    }, wp.element.createElement(\"div\", {\n      \"class\": \"row\"\n    }, wp.element.createElement(\"div\", {\n      \"class\": \"col-12\"\n    }, wp.element.createElement(RichText.Content, {\n      tagName: \"h2\",\n      value: heading\n    }), wp.element.createElement(RichText.Content, {\n      tagName: \"p\",\n      value: body\n    })))));\n  }\n});\n\n//# sourceURL=webpack:///./src/js/blocks/section.js?");

/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/section */ \"./src/js/blocks/section.js\");\n/* harmony import */ var _blocks_section__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_section__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/js/theme.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });