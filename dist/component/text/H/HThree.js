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

var HeadThree = function (_React$Component) {
    _inherits(HeadThree, _React$Component);

    function HeadThree(props) {
        _classCallCheck(this, HeadThree);

        var _this = _possibleConstructorReturn(this, (HeadThree.__proto__ || Object.getPrototypeOf(HeadThree)).call(this, props));

        _this.h3Style = {
            letterSpacing: "-.02em",
            fontWeight: "500",
            fontStyle: "normal",
            fontSize: "1.5em",
            lineHeight: "1.04",
            marginBottom: '2rem'
        };
        if (_this.props.align) {
            _this.h3Style = Object.assign(_this.h3Style, { textAlign: _this.props.align });
        }
        if (_this.props.fntSz) {
            _this.h3Style = Object.assign(_this.h3Style, { fontSize: _this.props.fntSz });
        }
        if (_this.props.fntWt) {
            _this.h3Style = Object.assign(_this.h3Style, { fontWeight: _this.props.fntWt });
        }
        if (_this.props.color) {
            _this.h3Style = Object.assign(_this.h3Style, { color: _this.props.color });
        }

        return _this;
    }

    _createClass(HeadThree, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "h3",
                { style: this.h3Style },
                this.props.children
            );
        }
    }]);

    return HeadThree;
}(_react2.default.Component);

exports.default = HeadThree;