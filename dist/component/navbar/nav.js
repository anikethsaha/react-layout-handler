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

var Nav = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props) {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

        _this.styleNav = {
            width: '100%',
            padding: '.5em 0',
            height: '2.5em',
            backgroundColor: 'white'
        };
        if (_this.props.bgColor) {
            _this.styleNav = Object.assign(_this.styleNav, { backgroundColor: _this.props.bgColor });
        }
        if (_this.props.position) {
            _this.styleNav = Object.assign(_this.styleNav, { position: _this.props.position });
        }
        if (_this.props.height) {
            _this.styleNav = Object.assign(_this.styleNav, { height: _this.props.height });
        }
        if (screen.width <= 500) {
            _this.styleNav = Object.assign(_this.styleNav, { width: '100%', padding: '1em 0' });
        }
        return _this;
    }

    _createClass(Nav, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { style: this.styleNav },
                this.props.children
            );
        }
    }]);

    return Nav;
}(_react2.default.Component);

Nav.propTypes = {};

exports.default = Nav;