"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

var _facebook = _interopRequireDefault(require("./svg/facebook.svg"));

var _instagram = _interopRequireDefault(require("./svg/instagram.svg"));

var _twitter = _interopRequireDefault(require("./svg/twitter.svg"));

var _medium = _interopRequireDefault(require("./svg/medium.svg"));

var _producthunt = _interopRequireDefault(require("./svg/producthunt.svg"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var icons = {
  facebook: {
    icon: _facebook["default"],
    url: 'https://www.facebook.com/newdigitalschool'
  },
  twitter: {
    icon: _instagram["default"],
    url: 'https://twitter.com/newdigitschool'
  },
  instagram: {
    icon: _twitter["default"],
    url: 'https://www.instagram.com/thenewdigitalschool'
  },
  medium: {
    icon: _medium["default"],
    url: 'https://medium.com/the-new-digital-school'
  },
  producthunt: {
    icon: _producthunt["default"],
    url: 'https://www.producthunt.com/posts/the-new-digital-school'
  }
};

var getUrl = function getUrl(socialIcon) {
  return icons[socialIcon].url;
};

var getIcon = function getIcon(socialIcon) {
  return icons[socialIcon].icon;
};

var Icon =
/*#__PURE__*/
function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "Icons-single"
      }, _react["default"].createElement("a", {
        href: getUrl(this.props.socialIcon),
        target: "_blank",
        rel: "noopener noreferrer"
      }, _react["default"].createElement("img", {
        src: getIcon(this.props.socialIcon),
        alt: this.props.alt
      })));
    }
  }]);

  return Icon;
}(_react.Component);

exports["default"] = Icon;
Icon.propTypes = {
  alt: _propTypes["default"].string.isRequired,
  socialIcon: _propTypes["default"].string.isRequired
};

//# sourceMappingURL=icon.js.map