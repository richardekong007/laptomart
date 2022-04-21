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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Home = _interopRequireDefault(require("../src/component/Home.js"));

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

  _defineProperty(this, "init", function () {
    _this.render();
  });

  _defineProperty(this, "render", function () {
    _classPrivateFieldGet(_this, _home).render();
  });

  _defineProperty(this, "addEventListeners", function () {});

  _classPrivateFieldSet(this, _container, container);

  _classPrivateFieldSet(this, _home, new _Home["default"](_classPrivateFieldGet(this, _container)));
});

exports["default"] = App;

},{"../src/component/Home.js":3}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tinyEmitter = require("tiny-emitter");

var _Home = require("../template/Home.js");

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

var Home = /*#__PURE__*/function (_TinyEmitter) {
  _inherits(Home, _TinyEmitter);

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
}(_tinyEmitter.TinyEmitter);

exports["default"] = Home;

},{"../template/Home.js":4,"tiny-emitter":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

var render = function render() {
  return "\n <div id=\"container\">\n    <div id=\"section1\">\n            <p id=\"headline\">\n                Experience the efficiency behind moderately used mid-ranged, clean and affordable laptops\n            </p>\n            <br>\n            <span id=\"search-label\">Find your best deal</span>\n            <div id=\"search-bar\">\n                <input type=\"text\" placeholder=\"Search by manufacturer, model or specifications\"/>\n                <img id=\"search-btn\" src=\"/public/icon/search-icon.svg\" alt=\"search-icon\"/>\n            </div>\n    </div>\n    <div id=\"section2\" class=\"section\">\n\t    <div class=\"section-header\">\n\t\t    <img src=\"/public/icon/group.svg\" alt=\"group-icon\">\n\t\t\t    <p>We strive to fulfill your desires by connecting you to \n                   moderately used laptops which are\n\t\t\t    </p>\t\n\t    </div>\n\t    <div class=\"section-list\">\n\t\t    <ul>\n\t\t\t    <li>Affordable</li>\n\t\t\t    <li>Reliable</li>\n\t\t\t    <li>Durable</li>\n                <li>Ergonomic</li>\n                <li>Customizable</li>\n                <li>Resalable</li>\n                <li>Maintainable</li>\n                <li>Upgradable</li>\n\t\t    </ul>\n\t    </div>\n    </div>\n    <div class=\"section\">\n\t        <div class=\"section-header\">\n\t\t        <img src=\"/public/icon/gear.svg\" alt=\"gear\">\n\t\t        <p>We Are Your Best Bet</p>\n\t        </div>\n\t        <div id=\"section3-contents\">\n                <div class=\"sub-section\">\n                    <div class=\"sub-section-header\">\n                        <img src=\"/public/icon/refund.svg\" alt=\"refund\">\n                        <p>7 Days refund/return-back policy</p>\n                    </div>\n                    <div class=\"desc\">\n                        We accept all returns made on devices\n                        which have been purchased within 7 days, especially\n                        as a result of certain unintentional defects incurred\n                        by our team or certain defects not discovered before \n                        purchase.   \n                    </div>\n                </div>\n                <div class=\"sub-section\">\n                    <div class=\"sub-section-header\">\n                        <img src=\"/public/icon/van.svg\" alt=\"van\">\n                        <p>Delivery Service</p>\n                    </div>\n                    <div class=\"desc\">\n                        We work with our trusted experts to deliver your devices safely\n                        to any convenient city within the nation, especially after \n                        processing your payments.\n                    </div>\n                </div>\n                <div class=\"sub-section\">\n                    <div class=\"sub-section-header\">\n                        <img src=\"/public/icon/maintenance.svg\" alt=\"maintenance\">\n                        <p>Maintenance</p>\n                    </div>\n                    <div class=\"desc\">\n                        You are assured of being connected to our trusted\n                        system engineers, even 7 days after purchasing the \n                        product\n                    </div>\n                </div>\n                <div class=\"sub-section\">\n                    <div class=\"sub-section-header\">\n                        <img src=\"/public/icon/customize.svg\" alt=\"customize\">\n                        <p>Device Customization</p>\n                    </div>\n                    <div class=\"desc\">\n                        Tell us what you need and let's work towards satisfying \n                        you by fine-tuning your device in accordance with your request.\n                    </div>\n                </div>\n            </div>\n    </div>\n    <div id=\"section4\" class=\"section\">\n        <div class=\"section-header\">\n            <img src=\"/public/icon/benefit.svg\" alt=\"benefit\">\n            <p>What you get for your money?</p>\n        </div>\n        <div class=\"section-list\">    \n            <ul>\n                <li>Moderately used laptops.</li>\n                <li>High-end device with the best of memory and storage specifications</li>\n                <li>Durable power adapters.</li>\n                <li>Activated operating system equipped with office productivity tools</li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"section-header\">\n            <img src=\"/public/icon/feature.svg\" alt=\"feature\">\n            <p>Features</p>\n        </div>\n        <div id=\"feature-section\">    \n            <div>\n                <img src=\"/public/icon/power.svg\" alt=\"power\">\n                <b>Durable Chargers</b>\n            </div>\n            <div>\n                <img src=\"/public/icon/battery.svg\" alt=\"battery\">\n                <b>Battery of energy capacity between normal and excellent</b>\n            </div>\n            <div>\n                <img src=\"/public/icon/memory.svg\" alt=\"memory\">\n                <b>Memories of various capacities</b>\n            </div>\n            <div>\n                <img src=\"/public/icon/disk.svg\" alt=\"disk\">\n                <b>Functional Operating System and productivity software</b>\n            </div>\n        </div>   \n    </div>\n    <div class=\"section-header section\">\n        <img src=\"/public/icon/terms.svg\" alt=\"info\">\n        <p>Terms and conditions applied</p>\n    </div> \n</div>";
};

exports.render = render;

},{}],5:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.onload = function () {
  var main = document.querySelector("#main");
  new _app["default"](main).init();
};

},{"./app.js":2}]},{},[5]);
