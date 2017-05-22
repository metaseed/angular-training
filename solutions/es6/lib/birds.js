"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bird = exports.Bird = function () {
  function Bird(height) {
    _classCallCheck(this, Bird);

    this.height = height;
  }

  _createClass(Bird, [{
    key: "walk",
    value: function walk() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          return resolve("Bird finished walking!");
        }, _this.height * 500);
      });
    }
  }]);

  return Bird;
}();

var Penguin = exports.Penguin = function (_Bird) {
  _inherits(Penguin, _Bird);

  function Penguin(height, type) {
    _classCallCheck(this, Penguin);

    var _this2 = _possibleConstructorReturn(this, (Penguin.__proto__ || Object.getPrototypeOf(Penguin)).call(this, height));

    _this2.type = type;
    return _this2;
  }

  _createClass(Penguin, [{
    key: "walk",
    value: function walk() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          return resolve(_this3.type + " penguin finished walking!");
        }, _this3.height * 1000);
      });
    }
  }, {
    key: "swim",
    value: function swim() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          return resolve(_this4.type + " penguin finished swimming!");
        }, _this4.height * 100);
      });
    }
  }]);

  return Penguin;
}(Bird);