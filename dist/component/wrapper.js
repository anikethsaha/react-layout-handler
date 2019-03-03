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

var Wrapper = function (_React$Component) {
    _inherits(Wrapper, _React$Component);

    function Wrapper(props) {
        _classCallCheck(this, Wrapper);

        var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));

        _this.layoutStyle = {
            fontFamily: "sans-serif",
            display: "block",
            margin: "0",
            padding: "1em",
            color: "#3d4852",
            minWidth: '1008px',
            backgroundColor: 'white'
        };
        if (_this.props.fontSize) {
            _this.layoutStyle = Object.assign(_this.layoutStyle, { fontSize: _this.props.fontSize });
        }
        if (_this.props.color) {
            _this.layoutStyle = Object.assign(_this.layoutStyle, { color: _this.props.color });
        }
        if (_this.props.bgColor) {
            _this.layoutStyle = Object.assign(_this.layoutStyle, { backgroundColor: _this.props.bgColor });
        }
        if (screen.width <= 500) {
            _this.layoutStyle = Object.assign(_this.layoutStyle, { width: '100%', padding: '.5em 0', textAlign: 'center' });
        }

        return _this;
    }

    _createClass(Wrapper, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { style: this.layoutStyle },
                this.props.children
            );
        }
    }]);

    return Wrapper;
}(_react2.default.Component);

Wrapper.propTypes = {};

exports.default = Wrapper;