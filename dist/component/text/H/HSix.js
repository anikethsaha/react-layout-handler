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

var HeadSix = function (_React$Component) {
    _inherits(HeadSix, _React$Component);

    function HeadSix(props) {
        _classCallCheck(this, HeadSix);

        var _this = _possibleConstructorReturn(this, (HeadSix.__proto__ || Object.getPrototypeOf(HeadSix)).call(this, props));

        _this.h6Style = {

            fontWeight: "500",
            fontStyle: "normal",
            fontSize: ".75em",
            lineHeight: "1.04",
            marginBottom: '2rem'
        };
        if (_this.props.align) {
            _this.h6Style = Object.assign(_this.h6Style, { textAlign: _this.props.align });
        }
        if (_this.props.fntSz) {
            _this.h6Style = Object.assign(_this.h6Style, { fontSize: _this.props.fntSz });
        }
        if (_this.props.fntWt) {
            _this.h6Style = Object.assign(_this.h6Style, { fontWeight: _this.props.fntWt });
        }
        if (_this.props.color) {
            _this.h6Style = Object.assign(_this.h6Style, { color: _this.props.color });
        }
        return _this;
    }

    _createClass(HeadSix, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "h6",
                { style: this.h6Style },
                this.props.children
            );
        }
    }]);

    return HeadSix;
}(_react2.default.Component);

exports.default = HeadSix;