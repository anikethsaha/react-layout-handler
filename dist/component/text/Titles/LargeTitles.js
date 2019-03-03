"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LargeTitles = function (_React$Component) {
    _inherits(LargeTitles, _React$Component);

    function LargeTitles(props) {
        _classCallCheck(this, LargeTitles);

        var _this = _possibleConstructorReturn(this, (LargeTitles.__proto__ || Object.getPrototypeOf(LargeTitles)).call(this, props));

        _this.LargeTitlesStyle = {
            fontSize: "3.3rem",
            fontWeight: "bold",
            letterSpacing: "-0.5px",
            display: "block",
            lineHeight: "1.2",
            margin: ".78em auto"
        };
        if (_this.props.align) {
            _this.LargeTitlesStyle = Object.assign(_this.LargeTitlesStyle, { textAlign: _this.props.align });
        }
        if (_this.props.color) {
            _this.LargeTitlesStyle = Object.assign(_this.LargeTitlesStyle, { color: _this.props.color });
        }
        return _this;
    }

    _createClass(LargeTitles, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "h1",
                { style: this.LargeTitlesStyle },
                this.props.children
            );
        }
    }]);

    return LargeTitles;
}(_react2.default.Component);

exports.default = LargeTitles;