'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = function (_React$Component) {
    _inherits(Code, _React$Component);

    function Code(props) {
        _classCallCheck(this, Code);

        var _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, props));

        _this.codeStyle = {
            padding: ".2rem .5rem",
            margin: " 0 .2rem",
            fontSize: "90%",
            whiteSpace: "nowrap",
            background: "#F1F1F1",
            border: "1px solid #E1E1E1",
            borderRadius: "4px"

        };
        return _this;
    }

    _createClass(Code, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'code',
                { style: this.codeStyle },
                this.props.children
            );
        }
    }]);

    return Code;
}(_react2.default.Component);

Code.propTypes = {};

exports.default = Code;