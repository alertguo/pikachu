// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.skin *::after,\n.skin *::before {\n  box-sizing: border-box;\n}\n.skin {\n  background: #ffe600;\n  min-height: 50vh;\n  position: relative;\n}\n.nose {\n  border: 10px solid;\n  border-color: #000000 transparent transparent;\n  /* \u53EF\u4EE5\u6709\u56DB\u79CD\u989C\u8272\uFF0C\u8FD9\u91CC\u53EA\u7559\u4E0B\u4E0A\u9762\u7684\u4E09\u89D2\uFF0C\u4E24\u8FB9\u7684\u53D8\u900F\u660E */\n  border-bottom: none;\n  width: 0;\n  height: 0;\n  position: relative;\n  left: 50%;\n  top: 145px;\n  margin-left: -10px;\n  /* \u5C45\u4E2D\u64CD\u4F5C\uFF0C\u4E0D\u7136\u5C31\u662F\u4E09\u89D2\u5F62\u7684\u6700\u5DE6\u8FB9\u5904\u4E8E\u5C45\u4E2D\u4F4D\u7F6E */\n  z-index: 10;\n  /* \u9632\u6B62\u88AB\u4E0A\u5634\u5507\u8986\u76D6 */\n}\n@keyframes wave{\n  0%{\n    transform: rotate(0deg);\n  }\n  33%{\n    transform: rotate(5deg);\n  }\n  66%{\n    transform: rotate(-5deg);\n  }\n  100%{\n    transform: rotate(0deg);\n  }\n}\n.nose:hover{\n  transform-origin: center bottom;\n  /* \u66F4\u6539\u5143\u7D20\u53D8\u5F62\u7684\u539F\u70B9\u4E3A\u6700\u4E0B\u9762\u4E2D\u95F4\u7684\u70B9 */\n  animation: wave 230ms linear infinite ;\n}\n.arc {\n  position: absolute;\n  /* \u76F8\u5BF9\u4E8E\u4E09\u89D2\u5F62\u7EDD\u5BF9\u5B9A\u4F4D */\n  width: 20px;\n  height: 6px;\n  background: #000000;\n  top: -16px;\n  left: -10px;\n  border-radius: 10px 10px 0 0;\n}\n.eye {\n  border: 2px solid #000000;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  margin-left: -32px;\n  background: #2e2e2e;\n  border-radius: 50%;\n}\n.eye::before {\n  content: '';\n  /* \u6DFB\u52A0content\uFF0C\u4F2A\u5143\u7D20\u624D\u770B\u5F97\u89C1 */\n  display: block;\n  border: 3px solid #000000;\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  position: relative;\n  left: 6px;\n  top: 2px;\n}\n.eye.left {\n  transform: translateX(-100px);\n  /* \u4E0A\u9762\u5DF2\u7ECF\u7528margin\u505A\u5B9A\u4F4D\u4E86\uFF0C\u8FD9\u91CC\u5C31\u7528transform\u6765\u6539\u4F4D\u7F6E */\n}\n.eye.right {\n  transform: translateX(100px);\n}\n.mouth {\n  width: 160px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  margin-left: -80px;\n  top: 170px;\n}\n.mouth .up {\n  position: relative;\n  top: -20px;\n  z-index: 1;\n}\n.mouth .up .lip {\n  position: relative;\n  border: 3px solid black;\n  width: 80px;\n  height: 25px;\n  border-top-color: transparent;\n  /* \u53BB\u6389\u77E9\u5F62\u7684\u4E0A\u9762\u90E8\u5206 */\n  border-right-color: transparent;\n  /* \u8FD9\u91CC\u5E76\u4E0D\u80FD\u5B8C\u5168\u53BB\u6389\u77E9\u5F62\u53F3\u8FB9\u90E8\u5206\uFF0C\u4E0B\u9762\u52A0\u4E2A\u4F2A\u5143\u7D20\u8986\u76D6\u6389 */\n  position: absolute;\n  left: 50%;\n  margin-left: -40px;\n  background: #ffe600;\n}\n.mouth .up .lip.left {\n  border-radius: 0 0 0 50px;\n  transform: rotate(-15deg) translateX(-42px);\n}\n.mouth .up .lip.right {\n  border-radius: 0 0 50px 0;\n  transform: rotate(15deg) translateX(42px);\n}\n.mouth .up .lip::before {\n  content: '';\n  display: block;\n  background: #ffe600;\n  width: 7px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n}\n.mouth .up .lip.left::before {\n  right: -6px;\n}\n.mouth .up .lip.right::before {\n  left: -6px;\n}\n\n.mouth .down {\n  height: 160px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.mouth .down .yuan1 {\n  border: 3px solid black;\n  width: 150px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 75px/300px;\n  background: #9b000a;\n  overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2 {\n  height: 300px;\n  width: 200px;\n  position: absolute;\n  left: 50%;\n  bottom: -175px;\n  margin-left: -100px;\n  border-radius: 100px;\n  background: #ff485f;\n}\n.face {\n  border: 3px solid #000000;\n  width: 88px;\n  height: 88px;\n  position: absolute;\n  left: 50%;\n  top: 200px;\n  margin-left: -44px;\n  border-radius: 50%;\n  background: #ff0000;\n}\n.face.left {\n  transform: translateX(-160px);\n}\n.face.right {\n  transform: translateX(160px);\n}\n";
var _default = string; // 导出内容

exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 50,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  n: 1,
  events: {
    '#btnPause': 'pause',
    // 取消定时器
    '#btnPlay': 'play',
    // 重新设置定时器
    '#btnSlow': 'slow',
    //先取消定时器，再设置
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play(); // 相当于let id = setInterval(run, time)
  },
  // 初始化代码
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  // 绑定事件
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id); // 取消定时器的id

      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight; // 自己滚动
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.63f4a402.js.map