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

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.styleMenu = {
            width: 'fit-content',
            padding: '0 .1em',
            marginRight: '.5em',
            backgroundColor: 'white',
            float: 'left',
            listStyle: 'none',
            fontSize: '1.125rem',
            color: '#606f7b',
            textDecoration: 'none',
            lineHeight: '1.15'
        };
        _this.alinkStyle = {
            fontWeight: '600',
            textDecoration: 'none',
            color: '#606f7b'
        };
        if (_this.props.bgColor) {
            _this.styleMenu = Object.assign(_this.styleMenu, { backgroundColor: _this.props.bgColor });
        }
        if (_this.props.position) {
            _this.styleMenu = Object.assign(_this.styleMenu, { position: _this.props.position });
        }
        if (_this.props.height) {
            _this.styleMenu = Object.assign(_this.styleMenu, { height: _this.props.height });
        }
        if (screen.width <= 500) {
            _this.styleMenu = Object.assign(_this.styleMenu, { width: '100%', padding: '1em 0' });
        }
        return _this;
    }

    _createClass(Menu, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                { style: this.styleMenu },
                _react2.default.createElement(
                    'a',
                    { href: this.props.alink || '#', style: this.alinkStyle },
                    this.props.children
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

Menu.propTypes = {};

exports.default = Menu;