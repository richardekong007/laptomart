(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tinyEmitter = require("tiny-emitter");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var EventEmitter = /*#__PURE__*/function (_TinyEmitter) {
  _inherits(EventEmitter, _TinyEmitter);

  var _super = _createSuper(EventEmitter);

  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    return _super.call(this);
  }

  return _createClass(EventEmitter);
}(_tinyEmitter.TinyEmitter);

exports["default"] = EventEmitter;

},{"tiny-emitter":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Home = _interopRequireDefault(require("../src/component/Home.js"));

var _About = _interopRequireDefault(require("../src/component/About.js"));

var _Review = _interopRequireDefault(require("../src/component/Review.js"));

var _Product = _interopRequireDefault(require("../src/component/Product.js"));

var _Contact = _interopRequireDefault(require("../src/component/Contact.js"));

var _Menu = _interopRequireDefault(require("../src/component/Menu.js"));

var _ReviewDialog = _interopRequireDefault(require("../src/component/ReviewDialog.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _container = /*#__PURE__*/new WeakMap();

var _home = /*#__PURE__*/new WeakMap();

var _about = /*#__PURE__*/new WeakMap();

var _review = /*#__PURE__*/new WeakMap();

var _product = /*#__PURE__*/new WeakMap();

var _contact = /*#__PURE__*/new WeakMap();

var _menu = /*#__PURE__*/new WeakMap();

var _reviewDialog = /*#__PURE__*/new WeakMap();

var _addEventListeners = /*#__PURE__*/new WeakMap();

var _homeMenuSectionInflateEvent = /*#__PURE__*/new WeakMap();

var _productMenuSectionInflateEvent = /*#__PURE__*/new WeakMap();

var _contactMenuSectionInflateEvent = /*#__PURE__*/new WeakMap();

var _reviewMenuSectionInflateEvent = /*#__PURE__*/new WeakMap();

var _aboutMenuSectionInflateEvent = /*#__PURE__*/new WeakMap();

var _createReviewDialogEvent = /*#__PURE__*/new WeakMap();

var _closeReviewDialogEvent = /*#__PURE__*/new WeakMap();

var App = /*#__PURE__*/_createClass(function App(container) {
  var _this = this;

  _classCallCheck(this, App);

  _classPrivateFieldInitSpec(this, _container, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _home, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _about, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _review, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _product, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _contact, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _menu, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _reviewDialog, {
    writable: true,
    value: void 0
  });

  _defineProperty(this, "init", function () {
    _this.render();

    _classPrivateFieldGet(_this, _addEventListeners).call(_this);
  });

  _defineProperty(this, "render", function () {
    _classPrivateFieldGet(_this, _home).render();
  });

  _classPrivateFieldInitSpec(this, _addEventListeners, {
    writable: true,
    value: function value() {
      //menu events
      _classPrivateFieldGet(_this, _homeMenuSectionInflateEvent).call(_this);

      _classPrivateFieldGet(_this, _productMenuSectionInflateEvent).call(_this);

      _classPrivateFieldGet(_this, _contactMenuSectionInflateEvent).call(_this);

      _classPrivateFieldGet(_this, _reviewMenuSectionInflateEvent).call(_this);

      _classPrivateFieldGet(_this, _aboutMenuSectionInflateEvent).call(_this); //Review dialog events


      _classPrivateFieldGet(_this, _createReviewDialogEvent).call(_this);

      _classPrivateFieldGet(_this, _closeReviewDialogEvent).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _homeMenuSectionInflateEvent, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _menu).on(_Menu["default"].INFLATE_HOME_SECTION, function () {
        return _classPrivateFieldGet(_this, _home).render();
      });
    }
  });

  _classPrivateFieldInitSpec(this, _productMenuSectionInflateEvent, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _menu).on(_Menu["default"].INFLATE_PRODUCT_SECTION, function () {
        _classPrivateFieldGet(_this, _product).render();
      });
    }
  });

  _classPrivateFieldInitSpec(this, _contactMenuSectionInflateEvent, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _menu).on(_Menu["default"].INFLATE_CONTACT_SECTION, function () {
        return _classPrivateFieldGet(_this, _contact).render();
      });
    }
  });

  _classPrivateFieldInitSpec(this, _reviewMenuSectionInflateEvent, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _menu).on(_Menu["default"].INFLATE_REVIEW_SECTION, function () {
        return _classPrivateFieldGet(_this, _review).render();
      });
    }
  });

  _classPrivateFieldInitSpec(this, _aboutMenuSectionInflateEvent, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _menu).on(_Menu["default"].INFLATE_ABOUT_SECTION, function () {
        return _classPrivateFieldGet(_this, _about).render();
      });
    }
  });

  _classPrivateFieldInitSpec(this, _createReviewDialogEvent, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _review).on(_Review["default"].CREATE_REVIEW, function () {
        return _classPrivateFieldGet(_this, _reviewDialog).inflate();
      });
    }
  });

  _classPrivateFieldInitSpec(this, _closeReviewDialogEvent, {
    writable: true,
    value: function value() {
      return _classPrivateFieldGet(_this, _reviewDialog).on(_ReviewDialog["default"].CLOSE_REVIEW_DIALOG, function () {
        return _classPrivateFieldGet(_this, _reviewDialog).dismiss();
      });
    }
  });

  _classPrivateFieldSet(this, _container, container);

  _classPrivateFieldSet(this, _home, new _Home["default"](_classPrivateFieldGet(this, _container)));

  _classPrivateFieldSet(this, _about, new _About["default"](_classPrivateFieldGet(this, _container)));

  _classPrivateFieldSet(this, _review, new _Review["default"](_classPrivateFieldGet(this, _container)));

  _classPrivateFieldSet(this, _product, new _Product["default"](_classPrivateFieldGet(this, _container)));

  _classPrivateFieldSet(this, _contact, new _Contact["default"](_classPrivateFieldGet(this, _container)));

  _classPrivateFieldSet(this, _menu, new _Menu["default"]());

  _classPrivateFieldSet(this, _reviewDialog, new _ReviewDialog["default"](_classPrivateFieldGet(this, _container)));
});

exports["default"] = App;

},{"../src/component/About.js":4,"../src/component/Contact.js":5,"../src/component/Home.js":7,"../src/component/Menu.js":8,"../src/component/Product.js":9,"../src/component/Review.js":11,"../src/component/ReviewDialog.js":12}],4:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _About = require("../template/About.js");

var _EventEmitter2 = _interopRequireDefault(require("../EventEmitter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _container = /*#__PURE__*/new WeakMap();

var About = /*#__PURE__*/function (_EventEmitter) {
  _inherits(About, _EventEmitter);

  var _super = _createSuper(About);

  function About(container) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _container, {
      writable: true,
      value: void 0
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      _classPrivateFieldGet(_assertThisInitialized(_this), _container).innerHTML = (0, _About.render)();
    });

    _defineProperty(_assertThisInitialized(_this), "addEventListeners", function () {});

    _classPrivateFieldSet(_assertThisInitialized(_this), _container, container);

    return _this;
  }

  return _createClass(About);
}(_EventEmitter2["default"]);

exports["default"] = About;

},{"../EventEmitter.js":2,"../template/About.js":13}],5:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Contact = require("../template/Contact.js");

var _EventEmitter2 = _interopRequireDefault(require("../EventEmitter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _container = /*#__PURE__*/new WeakMap();

var Contact = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Contact, _EventEmitter);

  var _super = _createSuper(Contact);

  function Contact(container) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _container, {
      writable: true,
      value: void 0
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      _classPrivateFieldGet(_assertThisInitialized(_this), _container).innerHTML = (0, _Contact.render)();
    });

    _defineProperty(_assertThisInitialized(_this), "addEventListener", function () {});

    _classPrivateFieldSet(_assertThisInitialized(_this), _container, container);

    return _this;
  }

  return _createClass(Contact);
}(_EventEmitter2["default"]);

exports["default"] = Contact;

},{"../EventEmitter.js":2,"../template/Contact.js":14}],6:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _EventEmitter2 = _interopRequireDefault(require("../EventEmitter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dialog = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Dialog, _EventEmitter);

  var _super = _createSuper(Dialog);

  function Dialog(container) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_container", void 0);

    _defineProperty(_assertThisInitialized(_this), "_containerId", void 0);

    _defineProperty(_assertThisInitialized(_this), "_overlayId", "overlay");

    _defineProperty(_assertThisInitialized(_this), "_overlayClass", "overlay");

    _defineProperty(_assertThisInitialized(_this), "_url", void 0);

    _defineProperty(_assertThisInitialized(_this), "_createOverlay", function () {});

    _defineProperty(_assertThisInitialized(_this), "inflate", function () {});

    _defineProperty(_assertThisInitialized(_this), "dismiss", function () {});

    _this._container = container;
    _this._containerId = container.id;

    _this._createOverlay();

    return _this;
  }

  return _createClass(Dialog);
}(_EventEmitter2["default"]);

exports["default"] = Dialog;

},{"../EventEmitter.js":2}],7:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Home = require("../template/Home.js");

var _EventEmitter2 = _interopRequireDefault(require("../EventEmitter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _container = /*#__PURE__*/new WeakMap();

var Home = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Home, _EventEmitter);

  var _super = _createSuper(Home);

  function Home(container) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _container, {
      writable: true,
      value: void 0
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      _classPrivateFieldGet(_assertThisInitialized(_this), _container).innerHTML = (0, _Home.render)();
    });

    _defineProperty(_assertThisInitialized(_this), "addEventListeners", function () {
      _this.searchClick();
    });

    _defineProperty(_assertThisInitialized(_this), "searchClick", function () {});

    _defineProperty(_assertThisInitialized(_this), "findProduct", function () {});

    _classPrivateFieldSet(_assertThisInitialized(_this), _container, container);

    return _this;
  }

  return _createClass(Home);
}(_EventEmitter2["default"]);

exports["default"] = Home;

},{"../EventEmitter.js":2,"../template/Home.js":15}],8:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _EventEmitter2 = _interopRequireDefault(require("../EventEmitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _container = /*#__PURE__*/new WeakMap();

var _addEventListener = /*#__PURE__*/new WeakMap();

var _tintMenuItem = /*#__PURE__*/new WeakMap();

var Menu = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Menu, _EventEmitter);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _container, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _addEventListener, {
      writable: true,
      value: function value() {
        _this.homeItemClick();

        _this.productItemClick();

        _this.contactItemClick();

        _this.reviewItemClick();

        _this.aboutItemClick();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "homeItemClick", function () {
      var homeItem = _classPrivateFieldGet(_assertThisInitialized(_this), _container).querySelector("#home-item");

      homeItem.addEventListener("click", function (ev) {
        _this.emit(Menu.INFLATE_HOME_SECTION);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "productItemClick", function () {
      var productItem = _classPrivateFieldGet(_assertThisInitialized(_this), _container).querySelector("#product-item");

      productItem.addEventListener("click", function (ev) {
        _this.emit(Menu.INFLATE_PRODUCT_SECTION);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "contactItemClick", function () {
      var contactItem = _classPrivateFieldGet(_assertThisInitialized(_this), _container).querySelector("#contact-item");

      contactItem.addEventListener("click", function (ev) {
        _this.emit(Menu.INFLATE_CONTACT_SECTION);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reviewItemClick", function () {
      var reviewItem = _classPrivateFieldGet(_assertThisInitialized(_this), _container).querySelector("#review-item");

      reviewItem.addEventListener("click", function (ev) {
        _this.emit(Menu.INFLATE_REVIEW_SECTION);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "aboutItemClick", function () {
      var aboutItem = _classPrivateFieldGet(_assertThisInitialized(_this), _container).querySelector("#about-item");

      aboutItem.addEventListener("click", function (ev) {
        _this.emit(Menu.INFLATE_ABOUT_SECTION);
      });
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _tintMenuItem, {
      writable: true,
      value: function value() {
        window.addEventListener("hashchange", function (ev) {
          _classPrivateFieldGet(_assertThisInitialized(_this), _container).querySelectorAll("a").forEach(function (anchor) {
            if (window.location.href === anchor.href) {
              anchor.style.borderBottom = "5px solid #00bfa5";
              anchor.style.color = "#00bfa5";
              anchor.querySelector("svg *").style.fill = "#00bfa5";
              anchor.querySelector("svg *").style.stroke = "#fff";
            } else {
              anchor.style.borderBottom = "0";
              anchor.style.color = "#fff";
              anchor.querySelector("svg *").style.fill = "#fff";
              anchor.querySelector("svg *").style.stroke = "#fff";
            }
          });
        });
      }
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _container, document.querySelector("#menu"));

    _classPrivateFieldGet(_assertThisInitialized(_this), _tintMenuItem).call(_assertThisInitialized(_this));

    _classPrivateFieldGet(_assertThisInitialized(_this), _addEventListener).call(_assertThisInitialized(_this));

    return _this;
  }

  return _createClass(Menu);
}(_EventEmitter2["default"]);

exports["default"] = Menu;

_defineProperty(Menu, "INFLATE_HOME_SECTION", "inflate-home-section");

_defineProperty(Menu, "INFLATE_PRODUCT_SECTION", "inflate-product-section");

_defineProperty(Menu, "INFLATE_CONTACT_SECTION", "inflate-contact-section");

_defineProperty(Menu, "INFLATE_REVIEW_SECTION", "inflate-review-section");

_defineProperty(Menu, "INFLATE_ABOUT_SECTION", "inflate-about-section");

},{"../EventEmitter":2}],9:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Product = require("../template/Product.js");

var _EventEmitter2 = _interopRequireDefault(require("../EventEmitter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _container = /*#__PURE__*/new WeakMap();

var Product = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Product, _EventEmitter);

  var _super = _createSuper(Product);

  function Product(container) {
    var _this;

    _classCallCheck(this, Product);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _container, {
      writable: true,
      value: void 0
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      _classPrivateFieldGet(_assertThisInitialized(_this), _container).innerHTML = (0, _Product.render)();
    });

    _defineProperty(_assertThisInitialized(_this), "addEventListeners", function () {});

    _classPrivateFieldSet(_assertThisInitialized(_this), _container, container);

    return _this;
  }

  return _createClass(Product);
}(_EventEmitter2["default"]);

exports["default"] = Product;

},{"../EventEmitter.js":2,"../template/Product.js":16}],10:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RatingStarView = void 0;

var _EventEmitter2 = _interopRequireDefault(require("../EventEmitter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _container = /*#__PURE__*/new WeakMap();

var _totalRating = /*#__PURE__*/new WeakMap();

var _selectedStar = /*#__PURE__*/new WeakMap();

var _selectedStarIndex = /*#__PURE__*/new WeakMap();

var _createStars = /*#__PURE__*/new WeakMap();

var _styleRatingBar = /*#__PURE__*/new WeakMap();

var _styleStars = /*#__PURE__*/new WeakMap();

var _resetStarPaint = /*#__PURE__*/new WeakMap();

var _addEventListeners = /*#__PURE__*/new WeakMap();

var _starSelectEvent = /*#__PURE__*/new WeakMap();

var _styleSelectedStarAndPredecessors = /*#__PURE__*/new WeakMap();

var RatingStarView = /*#__PURE__*/function (_EventEmitter) {
  _inherits(RatingStarView, _EventEmitter);

  var _super = _createSuper(RatingStarView);

  function RatingStarView(container) {
    var _this;

    _classCallCheck(this, RatingStarView);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _container, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _totalRating, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _selectedStar, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _selectedStarIndex, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _createStars, {
      writable: true,
      value: function value() {
        var stars = [];
        var ratingBar = document.createElement("div");
        ratingBar.id = _classStaticPrivateFieldSpecGet(RatingStarView, RatingStarView, _RATING_BAR_ID);

        _classPrivateFieldGet(_assertThisInitialized(_this), _styleRatingBar).call(_assertThisInitialized(_this), ratingBar); // stars = Array(RatingStarView.#STAR_COUNT)
        //     .fill(document.createElement("div"))
        //     .map((star) => {
        //         star.className = RatingStarView.#STAR_CLASS_NAME;
        //     });


        for (var i = 0; i < _classStaticPrivateFieldSpecGet(RatingStarView, RatingStarView, _STAR_COUNT); i++) {
          var star = document.createElement("div");
          star.className = _classStaticPrivateFieldSpecGet(RatingStarView, RatingStarView, _STAR_CLASS_NAME);
          stars.push(star);
        }

        _classPrivateFieldGet(_assertThisInitialized(_this), _styleStars).call(_assertThisInitialized(_this), stars);

        ratingBar.append.apply(ratingBar, stars);
        return ratingBar;
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _styleRatingBar, {
      writable: true,
      value: function value(bar) {
        if (!bar) throw new Error("Can't style argument of type null");
        bar.style.display = "flex";
        bar.style.flexDirection = "row";
        bar.style.gap = "5px";
        bar.style.padding = "10px';";
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _styleStars, {
      writable: true,
      value: function value(stars) {
        if (!stars || stars.length === 0) throw new Error("Can't style empty argument");
        stars.forEach(function (star) {
          star.style.backgroundColor = RatingStarView.DEFAULT_STAR_FILL;
          star.style.border = "1px solid #fff";
          star.style.clipPath = "polygon(50% 0, 65% 40%, 100% 50%, 70% 60%, 100% 100%," + " 50% 80%, 0 100%, 30% 60%, 0 50%, 35% 40%)";
          star.style.width = "14px";
          star.style.height = "14px";
          star.style.cursor = "pointer";
        });
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _resetStarPaint, {
      writable: true,
      value: function value(stars) {
        return stars.forEach(function (star) {
          return star.style.backgroundColor = RatingStarView.DEFAULT_STAR_FILL;
        });
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _addEventListeners, {
      writable: true,
      value: function value() {
        _classPrivateFieldGet(_assertThisInitialized(_this), _starSelectEvent).call(_assertThisInitialized(_this));
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _starSelectEvent, {
      writable: true,
      value: function value() {
        var stars = document.querySelectorAll(".star");
        stars.forEach(function (star, index, theStars) {
          return star.addEventListener("click", function (ev) {
            _classPrivateFieldSet(_assertThisInitialized(_this), _selectedStar, star);

            _classPrivateFieldSet(_assertThisInitialized(_this), _selectedStarIndex, index);

            _classPrivateFieldGet(_assertThisInitialized(_this), _resetStarPaint).call(_assertThisInitialized(_this), theStars);

            _this.emit(RatingStarView.STAR_SELECT, _classPrivateFieldGet(_assertThisInitialized(_this), _selectedStarIndex));
          });
        });

        _classPrivateFieldGet(_assertThisInitialized(_this), _styleSelectedStarAndPredecessors).call(_assertThisInitialized(_this), stars);
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _styleSelectedStarAndPredecessors, {
      writable: true,
      value: function value(stars) {
        _this.on(RatingStarView.STAR_SELECT, function (selectedStarIndex) {
          stars.forEach(function (star, index) {
            if (index <= selectedStarIndex) {
              star.style.backgroundColor = RatingStarView.SELECTED_STAR_FILL;
            }
          });

          _classPrivateFieldSet(_assertThisInitialized(_this), _totalRating, (selectedStarIndex + 1) * RatingStarView.RATING_PER_STAR);

          _this.emit(RatingStarView.CALCULATE_TOTAL_RATING, _classPrivateFieldGet(_assertThisInitialized(_this), _totalRating));

          console.log(_classPrivateFieldGet(_assertThisInitialized(_this), _totalRating));
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      alert("rendering RatingStarView ...");

      _classPrivateFieldGet(_assertThisInitialized(_this), _container).append(_classPrivateFieldGet(_assertThisInitialized(_this), _createStars).call(_assertThisInitialized(_this)));

      _classPrivateFieldGet(_assertThisInitialized(_this), _addEventListeners).call(_assertThisInitialized(_this));
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _container, container);

    return _this;
  }

  return _createClass(RatingStarView);
}(_EventEmitter2["default"]);

exports.RatingStarView = RatingStarView;
var _STAR_COUNT = {
  writable: true,
  value: 5
};
var _RATING_BAR_ID = {
  writable: true,
  value: "rating-bar"
};
var _STAR_CLASS_NAME = {
  writable: true,
  value: "star"
};

_defineProperty(RatingStarView, "STAR_SELECT", "star-select");

_defineProperty(RatingStarView, "DEFAULT_STAR_FILL", "#ccc");

_defineProperty(RatingStarView, "SELECTED_STAR_FILL", "gold");

_defineProperty(RatingStarView, "RATING_PER_STAR", 20);

_defineProperty(RatingStarView, "CALCULATE_TOTAL_RATING", "calculate-total-rating");

},{"../EventEmitter.js":2}],11:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Review = require("../template/Review.js");

var _EventEmitter2 = _interopRequireDefault(require("../EventEmitter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _container = /*#__PURE__*/new WeakMap();

var _addEventListeners = /*#__PURE__*/new WeakMap();

var _createReviewClick = /*#__PURE__*/new WeakMap();

var Review = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Review, _EventEmitter);

  var _super = _createSuper(Review);

  function Review(container) {
    var _this;

    _classCallCheck(this, Review);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _container, {
      writable: true,
      value: void 0
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      _classPrivateFieldGet(_assertThisInitialized(_this), _container).innerHTML = (0, _Review.render)();

      _classPrivateFieldGet(_assertThisInitialized(_this), _addEventListeners).call(_assertThisInitialized(_this));
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _addEventListeners, {
      writable: true,
      value: function value() {
        _classPrivateFieldGet(_assertThisInitialized(_this), _createReviewClick).call(_assertThisInitialized(_this));
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _createReviewClick, {
      writable: true,
      value: function value() {
        var createButton = _classPrivateFieldGet(_assertThisInitialized(_this), _container).querySelector("#create-button-container");

        createButton.addEventListener("click", function (_ev) {
          _this.emit(Review.CREATE_REVIEW);
        });
      }
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _container, container);

    return _this;
  }

  return _createClass(Review);
}(_EventEmitter2["default"]);

exports["default"] = Review;

_defineProperty(Review, "CREATE_REVIEW", "create-review");

},{"../EventEmitter.js":2,"../template/Review.js":17}],12:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ReviewDialog = require("../template/ReviewDialog.js");

var _Dialog2 = _interopRequireDefault(require("./Dialog.js"));

var _RatingStarView = require("./RatingStarView.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _placeDialogContainerOn = /*#__PURE__*/new WeakMap();

var _styleOverlay = /*#__PURE__*/new WeakMap();

var _placeRatingWidgetIn = /*#__PURE__*/new WeakMap();

var _addEventListeners = /*#__PURE__*/new WeakMap();

var _closeReviewDialogEvent = /*#__PURE__*/new WeakMap();

var _postReviewEvent = /*#__PURE__*/new WeakMap();

var ReviewDialog = /*#__PURE__*/function (_Dialog) {
  _inherits(ReviewDialog, _Dialog);

  var _super = _createSuper(ReviewDialog);

  function ReviewDialog(container) {
    var _this;

    _classCallCheck(this, ReviewDialog);

    _this = _super.call(this, container);

    _defineProperty(_assertThisInitialized(_this), "_createOverlay", function () {
      var overlay = document.createElement("div");
      overlay.id = _this._overlayId;
      overlay.className = _this._overlayClass;

      _classPrivateFieldGet(_assertThisInitialized(_this), _styleOverlay).call(_assertThisInitialized(_this), overlay);

      _classPrivateFieldGet(_assertThisInitialized(_this), _placeDialogContainerOn).call(_assertThisInitialized(_this), overlay);

      _this._container.append(overlay);

      _classPrivateFieldGet(_assertThisInitialized(_this), _addEventListeners).call(_assertThisInitialized(_this));
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _placeDialogContainerOn, {
      writable: true,
      value: function value(overlay) {
        var dialogContainer = document.createElement("div");
        dialogContainer.id = "dialog-container";
        dialogContainer.innerHTML = (0, _ReviewDialog.render)();
        overlay.append(dialogContainer);
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _styleOverlay, {
      writable: true,
      value: function value(overlay) {
        overlay.style.backgroundColor = "#000";
        overlay.style.opacity = "0.8";
        overlay.style.filter = "alpha(opacity=80)";
        overlay.style.position = "absolute";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.zIndex = "10";
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _placeRatingWidgetIn, {
      writable: true,
      value: function value(widgetContainer) {
        var ratingWidget = new _RatingStarView.RatingStarView(widgetContainer);
        console.log(ratingWidget.innerHTML);
        ratingWidget.render();
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _addEventListeners, {
      writable: true,
      value: function value() {
        _classPrivateFieldGet(_assertThisInitialized(_this), _closeReviewDialogEvent).call(_assertThisInitialized(_this));

        _classPrivateFieldGet(_assertThisInitialized(_this), _postReviewEvent).call(_assertThisInitialized(_this));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "inflate", function () {
      var ratingWidgetContainer;

      _this._createOverlay();

      ratingWidgetContainer = document.querySelector(".review-form-rating-bar");

      _classPrivateFieldGet(_assertThisInitialized(_this), _placeRatingWidgetIn).call(_assertThisInitialized(_this), ratingWidgetContainer);
    });

    _defineProperty(_assertThisInitialized(_this), "dismiss", function () {
      var overlay = document.getElementById(_this._overlayId);
      var dialogContainer = document.querySelector("#dialog-container");
      overlay.removeChild(dialogContainer);

      _this._container.removeChild(overlay);
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _closeReviewDialogEvent, {
      writable: true,
      value: function value() {
        var cancelButton = document.querySelector("#review-form-close-btn");
        var closeButton = document.querySelector("#cancel");
        cancelButton.addEventListener("click", function (ev) {
          return _this.emit(ReviewDialog.CLOSE_REVIEW_DIALOG);
        });
        closeButton.addEventListener("click", function (ev) {
          return _this.emit(ReviewDialog.CLOSE_REVIEW_DIALOG);
        });
      }
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _postReviewEvent, {
      writable: true,
      value: function value(reviewData) {
        var postButton = document.querySelector("#post");
        postButton.addEventListener("click", function (ev) {
          return _this.emit(ReviewDialog.POST_REVIEW, reviewData);
        });
      }
    });

    return _this;
  }

  return _createClass(ReviewDialog);
}(_Dialog2["default"]);

exports["default"] = ReviewDialog;

_defineProperty(ReviewDialog, "CLOSE_REVIEW_DIALOG", "close-review-dialog");

_defineProperty(ReviewDialog, "POST_REVIEW", "post-review");

},{"../template/ReviewDialog.js":18,"./Dialog.js":6,"./RatingStarView.js":10}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

var render = function render() {
  return "\n<div id=\"container\">\n    <section class=\"intro-section\">\n        <div class=\"header\">\n            <svg class=\"header-icon\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M193.365 227.126c0 21.905-17.778 39.683-39.703 39.683-21.92 0-39.698-17.777-39.698-39.683 0-21.933 17.777-39.708 39.698-39.708 21.925 0 39.703 17.776 39.703 39.708zM130.71 280.614l22.951 25.036 26.756-26.756s49.014 1.72 97.164-32.625c0 0 18.474-12.6 27.456 7.08 0 0 7.931 23.135-19.858 33.313 0 0-61.437 35.725-81.113 36.93v61.451H84.97V323.43s1.031-37.975 45.74-42.816z\" fill=\"#ffffff\" class=\"fill-000000\"></path><path d=\"m188.53 183.798-15.702-8.979v-42.632s2.921-11.902 13.622-12.25h233.357s13.114 1.728 12.763 13.982v175.529s-1.201 11.383-13.105 10.524c-11.907-.863-157.93 0-157.93 0l27.439-13.808H416.18v-171.04H188.702l-.172 48.674z\" fill=\"#ffffff\" class=\"fill-000000\"></path><path d=\"m241.519 242.303-7.935-13.285 45.547-27.791s7.083-7.588 13.126 0l28.827 22.267 37.102-31.583-10.357-9.493 33.657-3.632-1.892 33.659-10.539-10.524-42.97 35.902s-5.18 5.87-12.085-1.395L285.18 214l-43.661 28.303z\" fill=\"#ffffff\" class=\"fill-000000\"></path></svg>\n            <h1 class=\"title\">Introduction</h1>\n        </div>\n        <section class=\"article\">\n            <img class=\"main-img\" src=\"https://richardekong007.github.io/laptomart/image/founder_png.png\" alt=\"founder\">\n            <p class=\"write-up write-up-outline\">\n                Finally, Laptop-Folio is ready to breathe life into your computing desires, \n                and it is awesome to have you here.\n                By the way, meet <b>Richard Ekong</b> the founder of this amazing brand, who believes that\n                the digital divide ought to be narrowed by supplying the best mid-range laptops that\n                satisfies your computing taste and caters for your productivity. \n            </p>\n        </section>\n    </section>\n    <section>\n        <div class=\"header\">\n            <svg class=\"header-icon\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 512 512\"><path d=\"M136.878 254.98v5.901l31.052 4.661c1.6.248 2.785 1.543 2.895 3.115a89.937 89.937 0 0 0 1.876 8.742 85.66 85.66 0 0 0 2.841 8.771c.523 1.405.055 2.978-1.049 3.86l-24.572 19.58 5.903 10.203 29.259-11.498a3.383 3.383 0 0 1 3.973 1.158c1.902 2.344 3.943 4.578 6.066 6.728a93.749 93.749 0 0 0 6.84 6.15c1.185.965 1.571 2.537 1.048 3.86l-11.5 29.289 10.204 5.873 19.581-24.544c.965-1.241 2.62-1.599 3.998-.993a90.028 90.028 0 0 0 8.633 2.786l.109.026a77.025 77.025 0 0 0 8.909 1.876 3.397 3.397 0 0 1 2.813 2.841l4.688 31.08h11.803l4.66-31.08c.222-1.572 1.544-2.758 3.089-2.869a91.801 91.801 0 0 0 8.742-1.874l.166-.028a90.435 90.435 0 0 0 8.632-2.813 3.32 3.32 0 0 1 3.832 1.048l19.608 24.544 10.204-5.873-11.499-29.289a3.381 3.381 0 0 1 1.158-3.971c2.345-1.875 4.578-3.915 6.728-6.066a83.56 83.56 0 0 0 6.15-6.84 3.403 3.403 0 0 1 3.86-1.02l29.261 11.498 5.93-10.203-24.601-19.58a3.39 3.39 0 0 1-.991-4.027 82.834 82.834 0 0 0 2.813-8.631 88.553 88.553 0 0 0 1.902-8.99 3.336 3.336 0 0 1 2.841-2.813l31.052-4.688v-11.803l-31.052-4.661a3.43 3.43 0 0 1-2.896-3.145c-.441-2.868-1.075-5.79-1.848-8.688a94.1 94.1 0 0 0-2.869-8.796 3.415 3.415 0 0 1 1.048-3.86l24.571-19.582-5.9-10.203-29.261 11.5c-1.462.58-3.061.055-3.942-1.158a90.322 90.322 0 0 0-6.068-6.701 90.587 90.587 0 0 0-6.866-6.178 3.42 3.42 0 0 1-.966-4.025l11.445-29.123-10.23-5.9-19.554 24.572a3.391 3.391 0 0 1-4.027.99 90.274 90.274 0 0 0-8.631-2.784l-.111-.028a84.922 84.922 0 0 0-8.879-1.902c-1.518-.221-2.619-1.407-2.841-2.841l-4.66-31.052h-11.803l-4.688 31.08c-.221 1.599-1.572 2.757-3.116 2.867a89.4 89.4 0 0 0-8.714 1.876l-.167.028a90.246 90.246 0 0 0-8.632 2.813c-1.379.523-2.95.055-3.833-1.047l-19.581-24.572-10.204 5.9 11.5 29.287a3.397 3.397 0 0 1-1.158 3.945 80.992 80.992 0 0 0-6.702 6.066 88.195 88.195 0 0 0-6.178 6.84 3.413 3.413 0 0 1-3.889 1.047l-29.259-11.527-5.903 10.23 24.572 19.582a3.378 3.378 0 0 1 .993 3.998 76.722 76.722 0 0 0-2.785 8.633l-.056.109c-.772 2.95-1.406 5.928-1.846 8.908-.249 1.488-1.435 2.619-2.869 2.813l-31.052 4.688v5.904zm119.467-153.305c42.304 0 80.638 17.181 108.38 44.897 27.743 27.742 44.897 66.076 44.897 108.408s-17.154 80.664-44.897 108.381c-27.742 27.742-66.076 44.896-108.38 44.896-42.332 0-80.666-17.154-108.408-44.896-27.743-27.717-44.897-66.049-44.897-108.381s17.154-80.666 44.897-108.408c27.742-27.717 66.076-44.897 108.408-44.897zm199.386-39.187-39.822 29.977a3.388 3.388 0 0 1-4.743-.662c-.524-.689-.717-1.49-.661-2.29l.22-26.556H61.701V278.78a3.391 3.391 0 0 1-3.392 3.392 3.39 3.39 0 0 1-3.392-3.392V59.564a3.39 3.39 0 0 1 3.392-3.393H410.78l.222-26.833c0-1.848 1.544-3.364 3.392-3.337a3.43 3.43 0 0 1 2.041.689l39.325 30.418c1.488 1.131 1.737 3.256.605 4.743l-.634.637zM56.268 449.514 96.09 419.51c1.488-1.131 3.611-.828 4.743.661a3.44 3.44 0 0 1 .69 2.316l-.221 26.558h349.025V233.222c0-1.876 1.517-3.392 3.364-3.392a3.39 3.39 0 0 1 3.392 3.392V452.41a3.39 3.39 0 0 1-3.392 3.392H101.22l-.221 26.834c0 1.876-1.544 3.364-3.392 3.364-.772 0-1.461-.276-2.041-.717l-39.326-30.39c-1.462-1.132-1.737-3.256-.607-4.745l.635-.634zM289.383 84.025c1.655.358 3.226-.661 3.75-2.012.854-2.098-.469-4.221-2.481-4.635-2.097-.387-4.744-.965-6.812-1.158-.883-.193-1.931.193-2.455.579-2.509 1.876-1.572 5.517 1.462 6.122l6.536 1.104zm25.619 7.006c1.71.689 3.668-.387 4.247-1.848.8-2.014-.247-3.835-1.984-4.524l-6.536-2.206c-3.89-1.544-6.233 4.799-2.428 6.315 2.152.83 4.496 1.491 6.701 2.263zm24.24 10.865c3.477 2.068 7.116-3.089 3.366-5.902-2.069-1.131-4.192-2.207-6.289-3.254-4.743-1.902-6.534 4.66-2.978 6.094l5.901 3.062zm22.313 14.396c3.584 2.702 7.639-2.73 4.081-5.406a209.006 209.006 0 0 0-5.571-4.081c-3.392-2.536-7.611 2.786-3.86 5.57 1.543 1.297 3.666 2.648 5.35 3.917zm19.854 17.649c3.255 3.227 7.942-1.654 4.854-4.743l-4.883-4.854c-2.041-2.041-5.734-.553-5.734 2.37 0 1.05.387 1.848 1.048 2.512 1.627 1.545 3.171 3.115 4.715 4.715zm16.987 20.409c2.813 3.75 8.053-.525 5.518-3.917a164.567 164.567 0 0 0-4.109-5.569c-2.62-3.503-8.053.551-5.351 4.164a143.331 143.331 0 0 1 3.942 5.322zm13.679 22.777c1.462 3.642 7.916 1.602 6.04-3.031a159.229 159.229 0 0 0-3.199-6.123c-2.455-4.081-8.08-.303-5.929 3.281 1.047 1.931 2.097 3.889 3.088 5.873zm10.039 24.601c1.848 4.66 7.888 1.544 6.426-2.095a152.823 152.823 0 0 0-2.233-6.537c-1.737-4.357-7.916-1.572-6.344 2.344a205.241 205.241 0 0 1 2.151 6.288zm6.122 25.811c.966 4.717 7.502 3.006 6.702-1.047-.304-2.262-.772-4.578-1.213-6.813-.883-4.385-7.502-3.033-6.647 1.325.441 2.15.883 4.385 1.158 6.535zm2.152 26.502c0 4.414 6.784 4.414 6.784 0 0-2.315-.082-4.632-.165-6.948 0-4.109-6.784-4.522-6.784.304.111 2.205.165 4.412.165 6.644zm-1.848 26.504c-.828 4.108 5.819 5.459 6.647 1.241.44-2.262.661-4.8.937-7.116.662-3.281-4.825-5.846-6.619-1.351-.441 2.206-.661 4.937-.965 7.226zm-5.875 25.895c-.881 2.179 1.407 4.825 3.752 4.356 1.462-.247 2.206-1.075 2.73-2.37.689-2.208 1.295-4.413 1.902-6.647.993-4.881-5.765-5.598-6.537-1.709l-1.847 6.37zm-9.762 24.71c-1.876 4.688 4.661 6.563 6.095 2.922l2.896-6.26c1.765-4.385-4.633-6.618-6.205-2.701-.883 2.04-1.82 4.026-2.786 6.039zm-13.43 22.889c-2.51 3.338 2.702 7.695 5.571 3.861a190.74 190.74 0 0 0 3.833-5.736c2.4-4.025-3.529-7.281-5.736-3.64l-3.668 5.515zm-16.767 20.629c-3.034 3.061 1.709 7.887 4.937 4.661l4.66-5.103c2.537-2.537-.938-7.667-4.771-4.799-1.627 1.629-3.227 3.559-4.826 5.241zm-19.663 17.843c-3.475 2.62.496 8.081 4.164 5.351a210.265 210.265 0 0 0 5.378-4.357c3.641-3.641-1.71-7.833-4.386-5.157-1.68 1.432-3.42 2.812-5.156 4.163zm-22.146 14.643c-4.054 2.455-.304 8.08 3.281 5.93a139.948 139.948 0 0 0 5.985-3.475c3.778-2.29.275-8.081-3.447-5.847a138.584 138.584 0 0 1-5.819 3.392zm-24.157 11.115c-4.303 1.737-1.572 7.942 2.398 6.342 2.151-.772 4.274-1.627 6.397-2.509 3.999-1.599 1.655-7.971-2.591-6.26-2.04.854-4.109 1.655-6.204 2.427zm-25.51 7.28c-4.109.827-3.116 7.528 1.352 6.619 2.26-.442 4.494-.938 6.728-1.489 4.027-.801 3.116-7.53-1.599-6.591a175.21 175.21 0 0 1-6.481 1.461zm-26.365 3.282c-4.109 0-4.439 6.783.222 6.783 2.316-.082 4.688-.275 7.005-.469 4.054 0 4.219-6.757-.607-6.757-2.206.193-4.414.36-6.62.443zm-26.557-.718c-3.804-.744-5.598 5.929-.826 6.729 2.288.275 4.688.414 7.005.606 5.019 0 4.385-6.783.44-6.783a177.981 177.981 0 0 1-6.619-.552zm-26.142-4.716c-4.827-.965-5.626 5.763-1.683 6.563l6.702 1.6c4.522.909 5.654-5.764 1.434-6.618l-6.453-1.545zm-25.097-8.687c-4.357-1.737-6.647 4.661-2.674 6.233 2.095.91 4.218 1.793 6.37 2.619 4.192 1.684 6.343-4.771 2.481-6.315l-6.177-2.537zm-23.496-12.409c-3.944-2.373-7.28 3.53-3.585 5.736 1.958 1.212 3.915 2.427 5.901 3.585 3.724 2.233 7.309-3.531 3.392-5.873a202.279 202.279 0 0 1-5.708-3.448zm-21.319-15.858c-2.867-2.867-7.638 1.93-4.771 4.826 1.6 1.571 3.889 3.364 5.654 4.744 3.751 2.84 7.612-2.759 4.22-5.297a238.938 238.938 0 0 1-5.103-4.273zm-18.669-18.89c-3.613-3.613-7.861 1.709-5.157 4.412a160.535 160.535 0 0 0 4.578 5.186c3.392 3.391 7.886-1.684 4.962-4.607a157.848 157.848 0 0 1-4.383-4.991zm-15.609-21.484c-2.234-3.749-8.107-.331-5.763 3.558 1.13 1.958 2.481 3.944 3.75 5.818.414.718 1.351 1.269 2.041 1.407 3.145.634 5.157-2.565 3.557-5.186-1.185-1.818-2.482-3.721-3.585-5.597zm-12.135-23.606c-1.599-3.971-7.97-1.627-6.259 2.62l6.259-2.62zm-8.41-25.205c-.303-1.546-2.013-2.813-3.806-2.512-1.931.387-3.199 1.986-2.759 4.166.442 1.931 1.158 4.854 1.821 6.674 1.931 4.854 7.86 1.516 6.48-1.931-.606-2.096-1.24-4.274-1.736-6.397zm-4.413-26.2c-.909-4.494-6.756-3.889-6.756.661.193 2.262.44 4.578.744 6.84.993 4.91 7.501 2.979 6.729-.883-.275-2.205-.551-4.41-.717-6.618zm-.441-26.557c0-4.937-6.757-4.356-6.757-.386-.137 2.316-.22 4.604-.276 6.895 0 4.633 6.758 4.439 6.758.137.054-2.207.136-4.44.275-6.646zm3.585-26.309c.883-4.496-5.764-5.683-6.619-1.407-.468 2.262-.937 4.495-1.323 6.783-.856 4.303 5.929 5.543 6.645 1.215l1.297-6.591zm7.556-25.454c1.655-4.11-4.661-6.564-6.315-2.455-.854 2.123-1.599 4.356-2.344 6.536-1.323 3.31 3.723 6.756 6.261 2.509.854-2.123 1.598-4.412 2.398-6.59zm11.39-24.021c2.013-3.363-2.924-7.336-5.792-3.502-1.213 2.012-2.316 4.164-3.418 6.232-2.208 3.668 3.639 7.06 6.012 3.117l3.198-5.847zm14.891-21.981c2.814-3.721-2.757-7.609-5.322-4.191l-4.192 5.488c-2.62 3.475 2.869 7.475 5.489 4a152.153 152.153 0 0 1 4.025-5.297zm18.065-19.468c3.364-3.392-1.683-7.915-4.606-4.964l-4.992 4.771c-3.143 3.171 1.655 7.942 4.799 4.798l4.799-4.605zm20.792-16.519c3.806-2.29-.275-8.245-3.722-5.683-1.93 1.27-3.889 2.676-5.736 4.056-3.613 2.702.497 8.079 4.025 5.433a240.353 240.353 0 0 1 5.433-3.806zm23.056-13.183c1.379-.553 2.399-2.564 1.766-4.165-.772-1.902-2.565-2.784-4.661-1.956-2.069.99-4.164 2.012-6.205 3.088-4.22 2.537-.249 8.053 3.171 5.983 1.958-1.019 3.944-1.984 5.929-2.95zm24.821-9.487c4.854-1.931 1.516-7.859-1.932-6.509a187.89 187.89 0 0 0-6.617 2.123c-4.496 1.794-1.546 7.916 2.234 6.398a131.507 131.507 0 0 1 6.315-2.012zm25.977-5.569c4.854-.967 2.952-7.502-.937-6.729-2.29.329-4.578.661-6.84 1.075-4.55.909-3.006 7.502 1.186 6.674 2.18-.387 4.385-.745 6.591-1.02zm23.635-8.385-3.945.055c-.69 0-1.434.304-1.875.635-2.676 1.985-1.351 6.149 2.041 6.149 3.446-.108 6.977-.055 10.423.084 4.744 0 4.413-6.786.221-6.786l-6.865-.137zm0 132.373c13.375 0 25.48 5.405 34.251 14.176 8.798 8.796 14.23 20.904 14.23 34.307 0 13.375-5.433 25.48-14.202 34.279-8.799 8.77-20.904 14.203-34.279 14.203-13.403 0-25.537-5.434-34.307-14.203l-.193-.193c-8.66-8.77-14.01-20.822-14.01-34.086 0-13.402 5.433-25.511 14.203-34.307 8.77-8.771 20.904-14.176 34.307-14.176z\" fill=\"#ffffff\" class=\"fill-000000\"></path></svg>\n            <h1 class=\"title\">Mode of Operation (How I do what I do?)</h1>\n        </div>\n        <section class=\"article\">\n            <img class=\"main-img\" src=\"https://richardekong007.github.io/laptomart/image/board3.png\" alt=\"mode-op-desc\">\n            <p class=\"write-up write-up-outline\">\n            <span class=\"sub-section-title\">If you are curious about how I do what I do, then here is how:</span>\n            <br>\n            First and foremost, I believe you are not just here to obtain affordable mid-range \n            laptops, rather I care about bringing durability to the equation.\n            I do all these by sourcing for and importing your computing needs from various parts \n            of the globe to your destination city without compromising quality upon successful purchase.\n            </p>\n        </section>\n    </section>\n    <section>\n        <div class=\"header\">\n            <svg class=\"header-icon\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M382.132 95.913a6.189 6.189 0 0 0-8.688 1.037 6.185 6.185 0 0 0 1.037 8.688c46.475 36.553 73.127 91.385 73.127 150.434a6.189 6.189 0 0 0 12.376 0c-.001-62.872-28.376-121.245-77.852-160.159zM65.058 256.071c0-59.049 26.652-113.881 73.127-150.434a6.188 6.188 0 0 0-7.651-9.725C81.058 134.827 52.683 193.2 52.683 256.071a6.188 6.188 0 0 0 12.375 0zM451.319 288.03c-3.352-.646-6.605 1.531-7.258 4.889-12.816 65.68-58.77 118.115-118.416 141.375l1.674 12.564c64.863-24.205 115.045-80.611 128.889-151.57a6.188 6.188 0 0 0-4.889-7.258zM186.991 434.284c-59.643-23.27-105.588-75.711-118.395-141.393a6.188 6.188 0 0 0-12.147 2.367c13.834 70.961 64.004 127.373 128.865 151.588l1.677-12.562zM269.862 446.8c-4.479.324-8.98.545-13.529.545-4.557 0-9.066-.223-13.555-.547l-1.695 12.322c5.043.387 10.125.6 15.25.6 5.117 0 10.191-.213 15.227-.598l-1.698-12.322zM168.14 78.952c6.148 2.256 9.236 5.342 11.492 11.492.965 2.625 4.631 2.625 5.594 0 2.258-6.15 5.344-9.236 11.492-11.492 2.627-.965 2.627-4.633 0-5.594-6.148-2.258-9.234-5.344-11.492-11.494-.963-2.627-4.629-2.627-5.594 0-2.256 6.15-5.344 9.236-11.492 11.494-2.625.961-2.625 4.629 0 5.594zM316.677 78.952c6.15 2.256 9.236 5.342 11.492 11.492.965 2.625 4.633 2.625 5.598 0 2.254-6.15 5.34-9.236 11.49-11.492 2.627-.965 2.627-4.633 0-5.594-6.15-2.258-9.236-5.344-11.49-11.494-.965-2.627-4.633-2.627-5.598 0-2.256 6.15-5.342 9.236-11.492 11.494-2.625.961-2.625 4.629 0 5.594zM235.827 61.28a3.395 3.395 0 0 1 1.234 3.799L229.63 87.95c-1.016 3.131 2.566 5.734 5.23 3.799l19.455-14.135a3.398 3.398 0 0 1 3.994 0l19.457 14.135c2.662 1.936 6.246-.668 5.229-3.799l-7.432-22.871a3.4 3.4 0 0 1 1.236-3.799l19.455-14.886c2.662-1.934 1.295-6.894-1.998-6.894h-24.049c-1.473 0-2.777-.2-3.232-1.6l-7.432-22.5c-1.018-3.129-5.445-2.941-6.461.188l-7.434 22.219c-.455 1.398-1.758 1.693-3.23 1.693h-24.051c-3.293 0-4.66 4.96-1.998 6.894l19.458 14.886zM256.312 127.446c-20.479 0-37.08 16.6-37.08 37.08 0 20.479 16.602 37.078 37.08 37.078 20.48 0 37.082-16.6 37.082-37.078 0-20.48-16.602-37.08-37.082-37.08zm15.931 40.942c-1.26 7.867-7.965 13.578-15.939 13.578a16.09 16.09 0 0 1-15.912-13.42 3.372 3.372 0 0 1 3.308-3.939l25.191-.129a3.35 3.35 0 0 1 2.58 1.178 3.39 3.39 0 0 1 .772 2.732z\" fill=\"#ffffff\" class=\"fill-000000\"></path><path d=\"m306.46 358.542-1.131-8.572-.105.08-6.68-45.402.113-.115-1.176-8.553-4.049-29.727c-.158-1.146 1.215-1.82 2.025-1.01l15.549 15.547a8.395 8.395 0 0 1 0 11.879l-1.33 1.33 6.674 45.389 27.797-25.365c15.029-15.051 15.029-39.443 0-54.473l.047-.068-20.904-20.787c-14.939-14.92-35.168-23.195-56.273-23.195H245.62c-21.105 0-41.355 8.218-56.271 23.138L168.446 259.5h.043c-15.029 15-15.029 39.445 0 54.498l27.82 25.385 6.67-45.37-1.346-1.347a8.39 8.39 0 0 1 0-11.878l15.547-15.547c.809-.809 2.182-.136 2.023 1.011l-5.225 38.278.111.111-6.633 45.258-.127-.119-19.176 143.512c-.383 2.879 1.867 5.208 4.77 5.208h29.363c2.408 0 4.432-1.52 4.77-3.902l15.908-115.318c.27-1.957.922-3.739 1.867-5.358 5.018-8.527 17.955-8.495 22.949.032a15.28 15.28 0 0 1 1.891 5.44l15.906 115.194c.34 2.385 2.365 3.912 4.771 3.912h29.361c2.902 0 5.152-2.328 4.77-5.207L306.46 358.542zm-37.356-67.641-12.256 8.604-12.771-8.604c-.377-.262-.822-.73-.717-1.18l10.305-44.066c.076-.32-.061-.658-.256-.924l-7.156-9.556c-.547-.742-.049-1.675.875-1.675h18.395c.924 0 1.453.933.906 1.675l-7.121 9.614a1.04 1.04 0 0 0-.189.896l10.434 44.051c.108.45-.072.904-.449 1.165z\" fill=\"#ffffff\" class=\"fill-000000\"></path></svg>\n            <h1 class=\"title\">Motivation</h1>\n        </div>\n        <section class=\"article\">\n            <img class=\"main-img\" src=\"https://richardekong007.github.io/laptomart/image/motivation.png\" alt=\"motivation-desc\">\n            <p class=\"write-up write-up-outline\">\n                Several Factors ought to be considered before purchasing and importing computing devices, and these factors\n                are not often limited to freight, taxation, insurance, customs duty and delivery time.\n                In fact, it will surprise you to realize that Laptop-Folio came as a result of the difficulties\n                I faced while trying to purchase a laptop from abroad. Through this encounter, I discovered that \n                so many professionals in several Nigerian cities required durable laptops to handle their daily\n                businesses, and since then I have dedicated tremendous resources towards ensuring that you get \n                your desired computing requirement from Laptop-Folio at all times, and if I can't offer your\n                desired specifications, I won't hesitate to offer you an alternative or perhaps\n                recommend you to a trusted source.\n            </p>\n        </section>    \n    </section>\n    <section>\n        <div class=\"header\">\n            <svg class=\"header-icon\" data-name=\"Livello 1\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 34A32 32 0 1 0 33 2 32 32 0 0 0 1 34Z\" fill=\"#ffffff\" class=\"fill-000000\"></path><path d=\"m48.93 29.35-7.51-8.2-.33-.15H24.88l-.32.14-7.49 8.21a.27.27 0 0 0 0 .37L32.68 48a.45.45 0 0 0 .63 0l15.61-18.28a.27.27 0 0 0 .01-.37Z\" data-name=\"Diamond\" fill=\"none\" stroke=\"#00bfa5\" stroke-miterlimit=\"10\" stroke-width=\"2px\" class=\"stroke-ffffff\"></path><path d=\"M17 30.03h32\" fill=\"none\" stroke=\"#00bfa5\" stroke-miterlimit=\"10\" stroke-width=\"2px\" class=\"stroke-ffffff\"></path></svg>\n            <h1 class=\"title\">Value Proposition</h1>\n        </div>\n        <section class=\"article\">\n            <img class=\"main-img\" src=\"https://richardekong007.github.io/laptomart/image/value-proposition.png\" alt=\"value-proposition-desc\">\n            <div class=\"write-up-outline\">\n                <p class=\"write-up\">\n                In Laptop-Folio I do what I do, knowing that several other professionals will not face what I \n                experienced in trying to purchase and import an affordable and durable laptop abroad.\n                You will not have to spend weeks or months in other to obtain your desired laptops. \n                So I don't down-play the importance of focus and what its absence could cause you, and that is\n                why I go before and beyond to purchase, import and offer you the best deals at competitive prices.\n                Just understand that you will be saving yourself from stress and time by sourcing your devices from\n                Laptop-Folio.\n                </p>\n                <span class=\"sub-section-title\">More valued clients will</span>\n                <ul class=\"write-up\">\n                    <li>Save cost and time</li>\n                    <li>Save themselves from unnecessary stress</li>\n                    <li>Obtain devices of durable quality and competitive prices</li>\n                    <li>Continue to get value added services</li>\n                    <li>Never regret such an engagement, due to the satisfaction they will derive</li>\n                    <li>Contribute to narrowing the digital divide</li>\n                </ul>\n            </div>\n        </section>\n    </section>\n    <section>\n        <div class=\"header\">\n            <svg class=\"header-icon\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M242.633 394.779c-79.31 0-143.826-64.529-143.826-143.825 0-79.324 64.516-143.839 143.826-143.839 79.311 0 143.84 64.516 143.84 143.839 0 29.977-9.234 57.833-24.99 80.9l28.646 27.597c22.28-30.41 35.448-67.916 35.448-108.504 0-101.514-82.294-183.808-183.808-183.808S57.961 149.432 57.961 250.947c0 101.514 82.293 183.807 183.808 183.807 47.778 0 91.294-18.231 123.981-48.113l-30.852-25.456c-24.993 20.952-57.177 33.594-92.265 33.594z\" fill=\"#ffffff\" class=\"fill-000000\"></path><path d=\"M332.242 303.686c9.103-15.467 14.33-33.488 14.33-52.731 0-57.522-46.625-104.147-104.133-104.147-57.522 0-104.148 46.625-104.148 104.147 0 57.508 46.626 104.134 104.148 104.134 22.818 0 43.923-7.344 61.082-19.793l-37.05-30.57a58.31 58.31 0 0 1-23.283 4.828c-32.366 0-58.604-26.236-58.604-58.606 0-32.365 26.239-58.604 58.604-58.604 32.362 0 58.604 26.239 58.604 58.604a58.33 58.33 0 0 1-3.537 19.997l33.987 32.741z\" fill=\"#ffffff\" class=\"fill-000000\"></path><path d=\"m453.709 405.172-32.604-31.611c.373-.549-2.334-1.516-4.999-1.607l-26.233 3.906-1.658-1.587-104.824-100.988.241-.271a1.827 1.827 0 0 0-.147-2.579l-.027-.024a1.826 1.826 0 0 0-2.579.147l-.268.3a11.593 11.593 0 0 0-12.778-.096l-24.926-19.23c-.212-.164-.641 0-.971.369l-.012.014c-.33.37-.443.814-.256 1.007l21.991 22.62a11.597 11.597 0 0 0 1.672 12.448l-.268.301a1.827 1.827 0 0 0 .147 2.579l.027.024a1.827 1.827 0 0 0 2.579-.147l.242-.271 112.276 92.641 4.202 3.468-2.535-2.091-.878 26.063a6.835 6.835 0 0 0 2.497 5.513l34.828 28.551c.689.564 1.723.069 1.715-.821l-.261-28.027 13.403 11.062a3.224 3.224 0 0 0 2.313.725 3.241 3.241 0 0 0 1.427-.47c.096-.057.194-.105.284-.174.03-.023.056-.055.085-.078.133-.107.264-.219.381-.35l.006-.006.002-.002.041-.047.001-.001.007-.007c.244-.274.422-.586.557-.91.023-.057.058-.111.078-.17.002-.006.002-.014.005-.02a3.26 3.26 0 0 0 .176-1.184 3.224 3.224 0 0 0-.983-2.219l-8.428-8.109-4.006-3.859 27.816-2.928c.914-.097 1.3-1.215.642-1.854z\" fill=\"#ffffff\" class=\"fill-000000\"></path></svg>\n            <h1 class=\"title\">Core Values</h1>\n        </div>\n        <section class=\"article\">\n            <img class=\"main-img\" src=\"https://richardekong007.github.io/laptomart/image/core-value.png\" alt=\"core-value-desc\">\n            <div class=\"write-up-outline\">\n                <ul class=\"write-up\" style=\"display: grid; gap: 10px;\">\n                    <li><span style=\"background-color:red; color:whitesmoke;padding: 5px; border-radius: 5px; margin-bottom: 5px;box-shadow: 1px 2px #666;\">Focus</span></li>\n                    <li><span style=\"background-color:orange; color:whitesmoke;padding: 5px; border-radius: 5px;margin-bottom: 5px;box-shadow: 1px 2px #666;\">Innovation</span></li>\n                    <li><span style=\"background-color:gold; color:whitesmoke;padding: 5px; border-radius: 5px;margin-bottom: 5px;box-shadow: 1px 2px #666;\">Support</span></li>\n                    <li><span style=\"background-color:green; color:whitesmoke;padding: 5px; border-radius: 5px;margin-bottom: 5px;box-shadow: 1px 2px #666;\">Communication</span></li>\n                    <li><span style=\"background-color:blue; color:whitesmoke;padding: 5px; border-radius: 5px;margin-bottom: 5px;box-shadow: 1px 2px #666;\">Trust</span></li>\n                </ul>\n                <p class=\"write-up\">\n                    I am highly motivated and passionate about what I do and how I go about it, so I strongly \n                    value focus, innovation, support, communication and trust as the bedrock upon which I provide\n                    you satisfactory products and services.\n                    I painstakingly accord these values by striving to become one of the foremost suppliers of moderately used \n                    laptops and contribute to narrowing the gap orchestrated by the digital divide.  \n                </p>    \n            </div>\n        </section>\n    </section>\n    <section>\n        <div class=\"header\">\n            <svg class=\"header-icon\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 512 512\"><path d=\"M218.2 172.4v161.8l201.5 119.5c16.6 9.9 37.7-2.1 37.7-21.5V74.3c0-19.3-21-31.3-37.7-21.5L218.2 172.4zM61.3 173.3c-23.1 0-41.9 18.8-41.9 41.9v76.1c0 23.1 18.8 41.9 41.9 41.9h142.2v-160H61.3zM467.9 184.1v138.5c22.9-14.6 38.1-40.1 38.1-69.2s-15.2-54.8-38.1-69.3z\" fill=\"#ffffff\" class=\"fill-000000\"></path><path d=\"M10.3 214.2c-2.4 0-4.3 1.9-4.3 4.3v73.9h33.5v-78.2H10.3zM156.9 318s-26.3 58.8 31.7 128.4c5.4 6.4.7 16.2-7.7 16.2h-62.1c-4.7 0-8.9-2.5-11.2-6.6-11.4-20.8-42.6-87.2-13.5-147.5\" fill=\"#ffffff\" class=\"fill-000000\"></path></svg>\n            <h1 class=\"title\">Statements</h1>\n        </div>\n        <section class=\"article\">\n            <img class=\"main-img\" src=\"https://richardekong007.github.io/laptomart/image/statement.png\" alt=\"statement-desc\">\n            <div class=\"write-up-outline\">\n                <div>\n                <br>\n                    <span class=\"sub-section-title\">Mission</span>\n                    <ul class=\"write-up\">\n                        <li>Connect clients from various works of life to affordable and durable computing resource</li>\n                        <li>Contribute to sustainable technology reuse</li>\n                        <li>Establish trust by re-engaging with clients through continuous support and collaboration</li>\n                    </ul>\n                </div>\n                <div>    \n                    <span class=\"sub-section-title\">Vision</span>\n                    <ul class=\"write-up\">\n                        <li>Narrow the digital divide</li>\n                        <li>Assist in Building a clean and green computing environment</li>\n                        <li>Become the foremost suppliers of computing resources</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n    </section>\n</div>";
};

exports.render = render;

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

var render = function render() {
  return "\n        <H1>COMING SOON!</H1>\n    ";
};

exports.render = render;

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

var render = function render() {
  return "\n <div id=\"container\">\n    <div id=\"section1\">\n            <p id=\"headline\">\n                Experience the efficiency behind moderately used mid-ranged, clean and affordable laptops\n            </p>\n            <br>\n            <span id=\"search-label\">Find your best deal</span>\n            <div id=\"search-bar\">\n                <input type=\"text\" placeholder=\"Search by manufacturer, model or specifications\"/>\n                <img id=\"search-btn\" src=\"./icon/search-icon.svg\" alt=\"search-icon\"/>\n            </div>\n    </div>\n    <div id=\"section2\" class=\"section\">\n\t    <div class=\"section-header\">\n\t\t    <img src=\"./icon/group.svg\" alt=\"group-icon\">\n\t\t\t    <p>We strive to fulfill your desires by connecting you to \n                   moderately used laptops which are\n\t\t\t    </p>\t\n\t    </div>\n\t    <div class=\"section-list\">\n\t\t    <ul>\n\t\t\t    <li>Affordable</li>\n\t\t\t    <li>Reliable</li>\n\t\t\t    <li>Durable</li>\n                <li>Ergonomic</li>\n                <li>Customizable</li>\n                <li>Resalable</li>\n                <li>Maintainable</li>\n                <li>Upgradable</li>\n\t\t    </ul>\n\t    </div>\n    </div>\n    <div class=\"section\">\n\t        <div class=\"section-header\">\n\t\t        <img src=\"./icon/gear.svg\" alt=\"gear\">\n\t\t        <p>We Are Your Best Bet</p>\n\t        </div>\n\t        <div id=\"section3-contents\">\n                <div class=\"sub-section\">\n                    <div class=\"sub-section-header\">\n                        <img src=\"./icon/refund.svg\" alt=\"refund\">\n                        <p>7 Days refund/return-back policy</p>\n                    </div>\n                    <div class=\"desc\">\n                        We accept all returns made on devices\n                        which have been purchased within 7 days, especially\n                        as a result of certain unintentional defects incurred\n                        by our team or certain defects not discovered before \n                        purchase.   \n                    </div>\n                </div>\n                <div class=\"sub-section\">\n                    <div class=\"sub-section-header\">\n                        <img src=\"./icon/van.svg\" alt=\"van\">\n                        <p>Delivery Service</p>\n                    </div>\n                    <div class=\"desc\">\n                        We work with our trusted experts to deliver your devices safely\n                        to any convenient city within the nation, especially after \n                        processing your payments.\n                    </div>\n                </div>\n                <div class=\"sub-section\">\n                    <div class=\"sub-section-header\">\n                        <img src=\"./icon/maintenance.svg\" alt=\"maintenance\">\n                        <p>Maintenance</p>\n                    </div>\n                    <div class=\"desc\">\n                        You are assured of being connected to our trusted\n                        system engineers, even 7 days after purchasing the \n                        product\n                    </div>\n                </div>\n                <div class=\"sub-section\">\n                    <div class=\"sub-section-header\">\n                        <img src=\"./icon/customize.svg\" alt=\"customize\">\n                        <p>Device Customization</p>\n                    </div>\n                    <div class=\"desc\">\n                        Tell us what you need and let's work towards satisfying \n                        you by fine-tuning your device in accordance with your request.\n                    </div>\n                </div>\n            </div>\n    </div>\n    <div id=\"section4\" class=\"section\">\n        <div class=\"section-header\">\n            <img src=\"./icon/benefit.svg\" alt=\"benefit\">\n            <p>What you get for your money?</p>\n        </div>\n        <div class=\"section-list\">    \n            <ul>\n                <li>Moderately used laptops.</li>\n                <li>High-end device with the best of memory and storage specifications</li>\n                <li>Durable power adapters.</li>\n                <li>Activated operating system equipped with office productivity tools</li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"section-header\">\n            <img src=\"./icon/feature.svg\" alt=\"feature\">\n            <p>Features</p>\n        </div>\n        <div id=\"feature-section\">    \n            <div>\n                <img src=\"./icon/power.svg\" alt=\"power\">\n                <b>Durable Chargers</b>\n            </div>\n            <div>\n                <img src=\"./icon/battery.svg\" alt=\"battery\">\n                <b>Battery of energy capacity between normal and excellent</b>\n            </div>\n            <div>\n                <img src=\"./icon/memory.svg\" alt=\"memory\">\n                <b>Memories of various capacities</b>\n            </div>\n            <div>\n                <img src=\"./icon/disk.svg\" alt=\"disk\">\n                <b>Functional Operating System and productivity software</b>\n            </div>\n        </div>   \n    </div>\n    <div class=\"section-header section\">\n        <img src=\"./icon/terms.svg\" alt=\"info\">\n        <p>Terms and conditions applied</p>\n    </div> \n</div>";
};

exports.render = render;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

var render = function render() {
  return "\n        <H1>COMING SOON!</H1>\n    ";
};

exports.render = render;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

var render = function render() {
  return "\n        <div id=\"review-container\">    \n        <div id=\"left\"></div>\n        <div id=\"center\">    \n            <div id=\"create-container\">\n                    <button id=\"create-button-container\">\n                        <svg width=\"16\" height=\"16\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#00bfab\" fill-rule=\"evenodd\" class=\"fill-000000\"><path d=\"M31.5 13a2.5 2.5 0 0 1 2.5 2.5v32a2.5 2.5 0 1 1-5 0v-32a2.5 2.5 0 0 1 2.5-2.5Z\"></path><path d=\"M50 31.5a2.5 2.5 0 0 1-2.5 2.5h-32a2.5 2.5 0 1 1 0-5h32a2.5 2.5 0 0 1 2.5 2.5Z\"></path></g></svg>\n                        <a id=\"create-button\">Create</a>\n                    </button>    \n            </div>\n            <div id=\"top-review-container\">\n                <div class=\"review-desc\">Top Reviews</div>\n                <div class=\"review\">\n                    <div class=\"top-review-slider\">\n<!-- include a loop here for all five review-->\n                    <div id=\"reviewer-row\">\n                        <img id=\"reviewer-photo\" src=\"\" alt=\"\">\n                        <div class=\"reviewer-comment-container\">\n                            <span id=\"page-num-desc\">1/5</span>\n                            <p class=\"reviewer-comment\"></p>   \n                        </div>\n                    </div>\n                    <div class=\"rating-space\">\n                        <div class=\"empty-space\"></div>\n                        <div class=\"rating-bar\">\n                            <div class=\"reviewed-star\"></div>\n                            <div class=\"reviewed-star\"></div>\n                            <div class=\"reviewed-star\"></div>\n                            <div class=\"reviewed-star\"></div>\n                            <div class=\"reviewed-star\"></div>\n                        </div>\n                    </div>\n                    <div id=\"top-review-controller\">\n                        <div id=\"arrow-back\"></div>\n<!--                        use loop to automate display of this feature-->\n                        <div id=\"page-indicator-group\">\n                            <div class=\"page-indicator\"></div>\n                            <div class=\"page-indicator\"></div>\n                            <div class=\"page-indicator\"></div>\n                            <div class=\"page-indicator\"></div>\n                            <div class=\"page-indicator\"></div>\n                        </div>\n                        <div id=\"arrow-forward\"></div>\n                    </div>\n                </div>\n                </div>\n            </div>\n            <div id=\"other-reviews-container\">\n                <div class=\"review-desc\">Other Reviews</div>\n                <div class=\"other-review-scroller\">\n                          <!-- include a loop here for all five review-->\n                    <div class=\"review\"> \n                        <div id=\"reviewer-row\">\n                            <img id=\"reviewer-photo\" src=\"\" alt=\"\">\n                            <div class=\"reviewer-comment-container\">\n                                <p class=\"reviewer-comment\"></p>   \n                            </div>\n                        </div>\n                        <div class=\"rating-space\">\n                        <div class=\"empty-space\"></div>\n                        <div class=\"rating-bar\">\n                            <div class=\"reviewed-star\"></div>\n                            <div class=\"reviewed-star\"></div>\n                            <div class=\"reviewed-star\"></div>\n                            <div class=\"reviewed-star\"></div>\n                            <div class=\"reviewed-star\"></div>\n                        </div>\n                    </div>               \n                    </div>\n                </div>\n            </div>\n        </div>\n        <div id=\"right\"></div>\n    </div>\n    ";
};

exports.render = render;

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

var render = function render() {
  return "\n    <div id=\"review-dialog\">\n                <div id=\"review-form-header\">\n                    <span id=\"review-form-header-title\">What do like about the products and service?</span>\n                    <span id=\"review-form-close-btn\">\n                        <svg width=\"16\" height=\"16\" viewBox=\"0 0 185.208 185.208\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(952.567 -1192.557)\"><path d=\"M-172.905-1050.923c3.398-2.537 2.999-7.828 0-10.827l-36.204-36.205c-3-2.999-7.829-2.999-10.828 0l-58.717 58.615-58.638 58.536c-3.025 18.772-6.13 37.622-9.156 56.394l56.181-9.368c30.373-30.373 44.725-44.671 59.212-59.103 14.486-14.432 28.733-28.625 58.15-58.042z\" opacity=\"1\" fill=\"#f00\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><rect height=\"67.307\" ry=\"5.082\" transform=\"rotate(135)\" width=\"11.067\" x=\"-601.165\" y=\"865.359\" opacity=\"1\" fill=\"#ffffff\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"fill-000000\"></rect><path d=\"m-312.874-925.234-32.299-32.298-1.275 33.122z\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\".26458332px\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-opacity=\"1\" class=\"fill-000000\"></path><rect height=\"67.307\" ry=\"5.082\" transform=\"rotate(135)\" width=\"11.067\" x=\"-467.454\" y=\"865.783\" opacity=\"1\" fill=\"#ffffff\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"fill-000000\"></rect></g><g transform=\"translate(221.447 -535.307)\"><ellipse cx=\"-352.555\" cy=\"-1716.312\" rx=\"5.334\" ry=\"5.342\" opacity=\"1\" fill=\"#ffffff\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"fill-000000\"></ellipse><path d=\"M-352.555-1698.49v37.859\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-436.722-1743.288a3.806 3.806 0 0 0-3.807 3.822v103.568a3.807 3.807 0 0 0 3.807 3.823h23.24v36.286l71.375-36.286h73.718a3.807 3.807 0 0 0 3.808-3.823v-103.568a3.807 3.807 0 0 0-3.808-3.822z\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path></g><path d=\"M-1849.964-304.31h41.123l69.633-108.803h65.031M-1674.177-413.113l-39.659-19.993M-1674.177-413.113l-39.659 19.993M-1674.177-304.31l-39.659-19.993M-1674.177-304.31l-39.659 19.993\" transform=\"translate(794.623 -642.487)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-1850.01-413.105h41.122l69.633 108.803h65.031\" transform=\"translate(794.623 -642.487)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-867.121-414.187h104.674a6.063 6.063 0 0 1 6.088 6.065v144.094a6.063 6.063 0 0 1-6.088 6.064h-104.674a6.063 6.063 0 0 1-6.088-6.064v-144.094a6.063 6.063 0 0 1 6.088-6.065z\" transform=\"translate(-152.686 -1062.231)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-872.764-428.604h116.317M-847.834-394.01v115.87M-814.784-394.01v115.87M-781.734-394.01v115.87M-831.685-433.911h34.16\" transform=\"translate(-152.686 -1062.231)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-508.094-666.261v50.635c0 1.263-.843 2.28-1.89 2.28h-172.174c-1.047 0-1.89-1.017-1.89-2.28v-50.635\" transform=\"translate(-1598.046 -706.143)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041508\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-155.801-47.138v-150.835M-155.801-197.973l-43.482 44.424M-155.801-197.973l43.481 44.424\" transform=\"matrix(1 0 0 -1 -2038.315 -1543.921)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-190.138-620.904v-175.781M-154.995-620.804h-70.287M-154.995-796.785h-70.286\" transform=\"translate(-1608.223 -699.374)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-1004.936-1676.12h175.823M-1004.936-1735.305h175.823M-1004.936-1616.934h175.823\" transform=\"translate(394.573 -528.726)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><g stroke-width=\".69996077\"><path d=\"M-127.05-111.185v84.94h-97.204v-120.686 0h59.76\" transform=\"matrix(1.40223 0 0 1.45557 910.18 -1653.36)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"6.48192835\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-128.344-109.95h-36.15c-.717 0-1.294-.55-1.294-1.235v-34.51c0-.685.577-1.236 1.294-1.236l37.444 35.746c0 .684-.577 1.235-1.294 1.235z\" transform=\"matrix(1.40223 0 0 1.45557 910.18 -1653.36)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"6.48192835\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path></g><g stroke-width=\".71462166\"><g stroke-width=\".87175673\"><path d=\"M1064.034-145.824v108.35h-118.37v-153.947 0h72.773\" transform=\"matrix(1.15126 0 0 1.14297 -1679.299 -1277.358)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"8.0728302\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M1062.458-144.248h-44.021a1.572 1.572 0 0 1-1.576-1.576v-44.021c0-.873.703-1.576 1.576-1.576l45.597 45.597c0 .873-.703 1.576-1.576 1.576z\" transform=\"matrix(1.15126 0 0 1.14297 -1679.299 -1277.358)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"8.0728302\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path></g><path d=\"M-203.727-65.836h56.15M-203.727-86.588h56.15M-203.727-45.084h56.15\" transform=\"matrix(1.40338 0 0 1.39531 -274.77 -1289.345)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"6.61769342\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><path d=\"M-1479.304-1348.614h131.96l43.988 43.987v131.961h-175.948v-175.948z\" transform=\"translate(848.772 -518.755)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041508\" stroke-linecap=\"butt\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-1427.669-1348.614h72.677v47.425h-72.677z\" transform=\"translate(848.772 -518.755)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041508\" stroke-linecap=\"butt\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-1377.394-1332.878v15.496\" transform=\"translate(848.772 -518.755)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041508\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><g stroke-width=\".86788404\"><path d=\"M-3414.003 67.181h98.601v61.57h-98.601z\" transform=\"matrix(1.15223 0 0 1.15223 3334.345 -1839.771)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"8.03696728\" stroke-linecap=\"butt\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><g stroke-width=\".86788404\"><path d=\"M-3332.235 86.816h-64.935M-3332.235 109.116h-64.935\" transform=\"matrix(1.15223 0 0 1.15223 3334.345 -1839.771)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"8.03696823\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g></g><path d=\"M-270.94-413.34v22.494m-104.458 0v-62.72h64.22\" transform=\"translate(1470.528 -1839.253)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"butt\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-272.332-411.949h-38.847c-.77 0-1.39-.62-1.39-1.39v-38.837c0-.77.62-1.39 1.39-1.39l40.238 40.227c0 .77-.62 1.39-1.39 1.39z\" transform=\"translate(1470.528 -1839.253)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-263.93-373.522h12.753\" transform=\"translate(1470.528 -1839.253)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-374.822-325.246h-36.322v-64.504h175.948v64.504h-33.492\" transform=\"translate(1470.528 -1839.253)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"butt\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-181.739-68.86h60.34M-181.739-50.007h60.34\" transform=\"translate(1298.927 -2087.982)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-204.636-89.977h106.135v61.087h-106.135z\" transform=\"translate(1298.927 -2087.982)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041698\" stroke-linecap=\"butt\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"m-1479.199 143.768 175.855-175.855M-1479.199-32.087l175.855 175.855\" transform=\"translate(1483.876 36.764)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><g transform=\"translate(482.298 -865.099)\"><ellipse cx=\"-344.666\" cy=\"-2283.139\" rx=\"57.372\" ry=\"56.435\" transform=\"rotate(-45.005)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse><path d=\"m-1738.941-1251.822-79.106-79.12\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><path d=\"M-925.982-1197.013h-35.149v-18.315 0h35.149z\" transform=\"translate(1230.336 -652.04)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-80.133-22.106h-142.87v-157.632 0h142.87z\" transform=\"translate(438.348 -1669.315)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-106.552-167.136h-90.033v-6.89 0h90.033z\" transform=\"translate(438.348 -1669.315)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><g stroke-width=\".85923588\"><path d=\"M-3788.422-212.559h68.377M-3788.422-237.183h68.377M-3788.422-187.934h68.377M-3788.991-163.31h68.377\" transform=\"matrix(1.16492 0 0 1.16273 4660.502 -1532.594)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"7.956882\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><g transform=\"translate(-1540.737 -705.196)\"><ellipse cx=\"704.225\" cy=\"-258.695\" rx=\"23.977\" ry=\"23.822\" transform=\"matrix(.5075 -.86165 .8703 .49253 0 0)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26110744\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse><path d=\"m185.263-702.973-32.843-18.586\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><ellipse cx=\"-519.544\" cy=\"454.936\" rx=\"23.977\" ry=\"23.822\" transform=\"matrix(.5075 .86165 .8703 -.49253 0 0)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26110744\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse><path d=\"m185.263-702.973-32.843 18.587M185.27-702.97l98.805-29.777M185.27-702.97l98.805 29.778\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><g transform=\"matrix(1.5227 0 0 1.52124 316.385 -1420.395)\" stroke-width=\".65704465\"><path d=\"M-5468.298 2139.315v-72.696M-5468.298 2503.45v-246.957\" transform=\"matrix(.26458 0 0 .26458 -244.173 -97.607)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"22.99656296\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><circle cx=\"-1690.993\" cy=\"483.921\" r=\"15.502\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"6.08450699\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></circle></g><g transform=\"matrix(1.5227 0 0 1.52124 318.893 -1420.395)\" stroke-width=\".65704465\"><path d=\"M-5314.755 2305.239v-238.62M-5314.755 2503.45v-81.033\" transform=\"matrix(.26458 0 0 .26458 -244.173 -97.607)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"22.99656296\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><circle cx=\"-1650.368\" cy=\"527.822\" r=\"15.502\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"6.08450699\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></circle></g><g transform=\"matrix(1.5227 0 0 1.52124 274.192 -1418.768)\" stroke-width=\".65704465\"><path d=\"M-5044.034 2186.723v-124.144M-5044.034 2499.41V2303.9\" transform=\"matrix(.26458 0 0 .26458 -244.173 -97.607)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"22.99656296\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><circle cx=\"-1578.74\" cy=\"496.465\" r=\"15.502\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"6.08450699\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></circle></g><path d=\"M-2262.117-1850.649h116.03v175.953h-116.03z\" transform=\"translate(15.946 -16.722)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-2212.108-1762.673h132.042M-2080.066-1762.673l-38.89 38.051M-2080.066-1762.673l-38.89-38.051\" transform=\"translate(15.946 -16.722)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-1895.171-1873.834h116.03v175.953h-116.03z\" transform=\"translate(28.646 6.463)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-1713.12-1785.858h-132.043M-1845.162-1785.858l38.889 38.051M-1845.162-1785.858l38.889-38.051\" transform=\"translate(28.646 6.463)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-822.946-666.604v50.635c0 1.263-.843 2.28-1.89 2.28H-997.01c-1.047 0-1.89-1.017-1.89-2.28v-50.635\" transform=\"translate(-1649.078 -705.8)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041508\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-155.801-47.138v-150.835M-155.801-197.973l-43.482 44.424M-155.801-197.973l43.481 44.424\" transform=\"translate(-2404.2 -1298.81)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M292.199-1203.883H467.98\" transform=\"translate(244.173 202.685)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-239.46-110.08h175.783M-151.568-197.971V-22.19\" transform=\"translate(398.735 -891.118)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><g transform=\"translate(-156.902 -990.181)\"><ellipse cx=\"-840.6\" cy=\"-2602.197\" rx=\"57.372\" ry=\"56.435\" transform=\"rotate(-45.005)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse><path d=\"m-2315.174-1126.74-79.106-79.12M-2472.248-1245.753h76.1M-2434.198-1283.803v76.1\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><g transform=\"translate(307.534 -899.31)\"><ellipse cx=\"-566.176\" cy=\"-2456.273\" rx=\"57.372\" ry=\"56.435\" transform=\"rotate(-45.005)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse><path d=\"m-2017.97-1217.612-79.106-79.12M-2175.044-1336.625h76.099\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><g transform=\"translate(236.723 -619.44)\"><text style=\"line-height:3.3499999\" x=\"-2507.133\" xml:space=\"preserve\" y=\"-1592.797\" font-style=\"normal\" font-weight=\"400\" font-size=\"64.96838379px\" font-family=\"sans-serif\" letter-spacing=\"0\" word-spacing=\"0\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"none\" stroke-width=\".26458332\" class=\"fill-000000\"></text><ellipse cx=\"-598.089\" cy=\"-2883.944\" rx=\"57.372\" ry=\"56.435\" transform=\"rotate(-45.005)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse><path d=\"m-2342.916-1497.48-79.105-79.121\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><path d=\"M228.714-496.777h153.947v153.947H228.714z\" transform=\"translate(-2876.688 -218.362)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M250.714-496.777v-22 0h153.948v153.947H382.66\" transform=\"translate(-2876.688 -218.362)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M392.743-12.28h-71.21c-61.035 0-61.035-93.207 5.201-93.207H452.286M452.285-105.487l-38.889 38.051M452.285-105.487l-38.889-38.051\" transform=\"translate(-68.211 -1330.237)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-460.409-314.904h71.21c61.035 0 61.035-93.208-5.202-93.208h-125.551M-519.952-408.112l38.89 38.051M-519.952-408.112l38.89-38.05\" transform=\"translate(300.927 -1027.612)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M184.027-110.906 88.823-22.978M184.027-110.906l-95.204-87.929\" transform=\"translate(-1480.992 -890.292)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"m-179.326-367.222 95.203 87.928M-179.326-367.222l95.203-87.929\" transform=\"translate(-2428.276 -633.976)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><g stroke-width=\".97482073\"><path d=\"m-158.467 96.672 38.89 38.05M-158.467 96.672l38.89-38.052\" transform=\"matrix(1.02602 0 0 1.02564 -36.933 -1149.25)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.02724552\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><path d=\"M-629.803-110.386c0 27.68 16.681 52.636 42.264 63.229 25.583 10.593 55.03 4.738 74.611-14.836 19.58-19.573 25.438-49.01 14.841-74.583-10.597-25.574-35.13-42.246-62.82-42.246l-68.843.003\" transform=\"translate(430.232 -871.275)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-1528.327-888.418h-175.95l90.042-75.866zm-106.818 100.074h-46.533v-100.074h129.18v100.074h-46.533m-36.115-.118v-48.06 0h36.115v48.06\" transform=\"translate(244.173 202.685)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><g stroke-width=\".97482073\"><path d=\"m-158.467 96.672 38.89 38.05M-158.467 96.672l38.89-38.052\" transform=\"matrix(-1.02602 0 0 1.02564 -616.627 -1149.25)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.02724552\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><path d=\"M-740.528-110.386c0 27.68-16.68 52.636-42.263 63.229-25.584 10.593-55.03 4.738-74.611-14.836-19.58-19.573-25.438-49.01-14.841-74.583 10.596-25.574 35.13-42.246 62.82-42.246l68.842.003\" transform=\"translate(286.538 -871.275)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><g transform=\"translate(3.226 -934.832)\"><circle cx=\"-690.901\" cy=\"-1105.169\" r=\"87.974\" transform=\"rotate(45)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></circle><circle cx=\"-690.901\" cy=\"-1105.169\" r=\"59.536\" transform=\"rotate(45)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></circle><path d=\"m335.03-1227.915 20.05 20.05M230.783-1332.162l20.05 20.05M250.833-1227.915l-20.05 20.05M355.08-1332.162l-20.05 20.05\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><g transform=\"translate(-47.294 -955.833)\"><ellipse cx=\"452.398\" cy=\"693.554\" rx=\"31.199\" ry=\"31.635\" transform=\"rotate(-90.006) skewX(-.011)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse><path d=\"m837.762-452.34-112.587-.006M781.102-426.26l.006-26.059M799.03-430.775l.006-21.572M816.957-426.283l.006-26.058\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><path d=\"m-112.512-183.042 38.32 95.425 102.595 6.956-78.912 65.932 25.087 99.723-87.09-54.676-87.09 54.676 25.088-99.723-78.913-65.932 102.595-6.956z\" transform=\"matrix(.62427 0 0 .62366 1139.519 -970.624)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"14.84131432\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><g transform=\"translate(242.764 -1331.016)\"><ellipse cx=\"518.3\" cy=\"619.601\" rx=\"23.977\" ry=\"23.822\" transform=\"matrix(.5075 -.86165 .8703 .49253 0 0)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26110744\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse><ellipse cx=\"406.422\" cy=\"684.842\" rx=\"23.977\" ry=\"23.822\" transform=\"matrix(.5075 -.86165 .8703 .49253 0 0)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26110744\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse><ellipse cx=\"525.334\" cy=\"762.389\" rx=\"23.977\" ry=\"23.822\" transform=\"matrix(.5075 -.86165 .8703 .49253 0 0)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26110744\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse><path d=\"m827.84-128.567 76.632 38.525M823.824-23.72l84.74-42.6\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><path d=\"m18.24-367.222 95.203-87.929M18.24-367.222l95.203 87.928\" transform=\"rotate(90 -747.15 -1814.189)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"m18.24-367.222 95.203-87.929M18.24-367.222l95.203 87.928\" transform=\"matrix(0 -1 -1 0 -2165.583 -935.357)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"m-179.326-367.222 95.203-62.485M-179.326-367.222l95.203 62.484\" transform=\"translate(-833.61 -302.174)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M1800.444-591.196v175.857\" transform=\"translate(-2822.69 -166.129)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"m-179.326-367.222 95.203-62.485M-179.326-367.222l95.203 62.484\" transform=\"matrix(-1 0 0 1 -729.548 -310.64)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-348.818-389.608v175.857\" transform=\"translate(-192.094 -376.183)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><g transform=\"translate(1672.474 -501.928)\"><ellipse cx=\"-1833.87\" cy=\"-222.459\" rx=\"41.306\" ry=\"41.449\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse><path d=\"M-1921.576-88.029h175.413m-175.413 0a87.974 86.257 0 0 1-.268-6.724 87.974 86.257 0 0 1 87.974-86.257 87.974 86.257 0 0 1 87.975 86.257v0a87.974 86.257 0 0 1-.268 6.726\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><path d=\"M16.193-908.36c-5.38-20.223-23.863-34.319-45.004-34.319-1.688 0-3.375.091-5.053.273m-39.875 34.013c-.523-.02-1.047-.03-1.57-.03-22.902 0-41.467 18.365-41.467 41.018 0 9.846 2.163 21.36 10.074 26.799 42.647 29.32 113.167 29.327 155.81 0 7.91-5.44 10.064-16.953 10.064-26.799 0-22.653-18.565-41.017-41.466-41.017-.524 0-1.047.01-1.57.029m-89.932.034c5.379-20.224 23.863-34.32 45.003-34.32 1.688 0 3.376.091 5.054.273M-429.927-2070.053h175.948v175.948h-175.948z\" transform=\"translate(244.173 202.685)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><g opacity=\"1\"><path d=\"M-516.693-200.039h25.929v25.929h-25.929zM-462.983-200.039h25.929v25.929h-25.929zM-409.273-200.039h25.929v25.929h-25.929zM-516.693-142.889h25.929v25.929h-25.929zM-462.983-142.889h25.929v25.929h-25.929zM-409.273-142.889h25.929v25.929h-25.929z\" transform=\"translate(352.238 -1620.896)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path></g><path d=\"M-429.927-2051.751h175.948v139.344h-175.948z\" transform=\"translate(244.173 202.685)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-1630.547-1101.345h116.03v175.953h-116.03z\" transform=\"translate(178.802 -766.026)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-1696.568-1013.369h132.042M-1564.526-1013.369l-38.889 38.051M-1564.526-1013.369l-38.889-38.05\" transform=\"translate(178.802 -766.026)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M-2486.665-2693.843h116.03v175.953h-116.03z\" transform=\"translate(1440.261 826.472)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"6.19999981\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-2420.644-2605.867h-132.042M-2552.686-2605.867l38.89 38.05M-2552.686-2605.867l38.89-38.051\" transform=\"translate(1440.261 826.472)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><g transform=\"translate(100.233 -233.208)\"><path d=\"M510.393-419.255h99.06M510.393-478.44h99.06M510.393-360.07h99.06\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><circle cx=\"491.237\" cy=\"-478.44\" r=\"4.63\" opacity=\"1\" fill=\"#ffffff\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"fill-000000\"></circle><circle cx=\"491.237\" cy=\"-419.255\" r=\"4.63\" opacity=\"1\" fill=\"#ffffff\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"fill-000000\"></circle><circle cx=\"491.237\" cy=\"-360.069\" r=\"4.63\" opacity=\"1\" fill=\"#ffffff\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"fill-000000\"></circle><path d=\"M433.623-419.255h38.457M433.623-478.44h38.457M433.623-360.07h38.457\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path></g><path d=\"m-2794.504-2031.083-21.048-23.28h-35.36m-32.911 23.28 21.048-23.28h35.36m111.216 144.568h-175.948v-121.288h175.948v121.288z\" transform=\"translate(244.173 202.685)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><path d=\"M744.321-2034.872h175.948v105.584H744.321z\" transform=\"translate(244.173 202.685)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041508\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"m920.269-2034.872-175.962-.336 87.69 78.01z\" transform=\"translate(244.173 202.685)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"m803.846-1981.917-59.54 52.966 175.963-.337-59.796-52.617-28.461 25.044z\" transform=\"translate(244.173 202.685)\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><path d=\"M-1185.807-2341.564v-133.063h-42.622v155.069h61.812v-175.943h-83.078v153.938\" transform=\"translate(244.173 202.685)\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-opacity=\"1\" class=\"stroke-000000\"></path><g transform=\"translate(278.302 196.1)\"><path d=\"M763.417-840.016a150.885 154.112 0 0 1 50.689-8.956 150.885 154.112 0 0 1 50.686 8.955M744.758-872.992a187.686 191.7 0 0 1 69.355-13.569 187.686 191.7 0 0 1 69.338 13.562M726.192-905.84a224.488 229.289 0 0 1 87.901-18.31 224.488 229.289 0 0 1 87.923 18.319\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></path><ellipse cx=\"814.104\" cy=\"-798.318\" rx=\"18.761\" ry=\"18.767\" opacity=\"1\" fill=\"none\" fill-opacity=\"1\" fill-rule=\"nonzero\" stroke=\"#ffffff\" stroke-width=\"9.26041603\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"4\" stroke-dasharray=\"none\" stroke-dashoffset=\"0\" stroke-opacity=\"1\" paint-order=\"normal\" class=\"stroke-000000\"></ellipse></g></svg>\n                    </span>\n                </div>\n                <div id=\"review-form-container\">\n                    <form action=\"\">\n                        <label for=\"comment\">Comment:</label><br>\n                        <textarea id=\"comment-input\" name=\"comment\" rows=\"10\"></textarea><br><br>\n                        <label>How would you rate the products and service?</label>\n                        <div class=\"review-form-rating-bar\">\n<!--                            <div class=\"star\"></div>-->\n<!--                            <div class=\"star\"></div>-->\n<!--                            <div class=\"star\"></div>-->\n<!--                            <div class=\"star\"></div>-->\n<!--                            <div class=\"star\"></div>-->\n                        </div> \n                        <div id=\"review-form-bottom\">\n                            <span class=\"empty-space\"></span>\n                            <button id=\"cancel\">\n                                <svg width=\"16\" height=\"16\" viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 27.17L31.17 34 24 26.83 16.83 34 14 31.17 21.17 24 14 16.83 16.83 14 24 21.17 31.17 14 34 16.83 26.83 24 34 31.17z\" fill=\"#00bfa5\" class=\"fill-000000\"></path><path d=\"M0 0h48v48H0z\" fill=\"none\"></path></svg>\n                                <span>Cancel</span>\n                            </button>\n                            <button id=\"post\">\n                                <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 16 16\"><path d=\"M5 9v5l4-3 4 5 3-16L0 8z\" fill=\"#ffffff\" class=\"fill-000000\"></path></svg>\n                                <span>Post</span> \n                            </button> \n                        </div>\n                    </form>\n                </div>\n    </div>\n";
};

exports.render = render;

},{}],19:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.onload = function () {
  var main = document.querySelector("#main");
  new _app["default"](main).init();
};

},{"./app.js":3}]},{},[19]);
