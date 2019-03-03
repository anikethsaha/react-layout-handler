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

var Grid25 = function (_React$Component) {
    _inherits(Grid25, _React$Component);

    function Grid25(props) {
        _classCallCheck(this, Grid25);

        var _this = _possibleConstructorReturn(this, (Grid25.__proto__ || Object.getPrototypeOf(Grid25)).call(this, props));

        _this.styleGrid25 = {
            width: '30.4%',

            padding: '.5em',
            float: 'left'
        };
        if (_this.props.bgColor) {
            _this.styleGrid25 = Object.assign(_this.styleGrid25, { backgroundColor: _this.props.bgColor });
        }
        if (_this.props.bordr) {
            _this.styleGrid25 = Object.assign(_this.styleGrid25, { border: _this.props.bordr });
        }
        if (_this.props.p) {
            _this.styleGrid25 = Object.assign(_this.styleGrid25, { padding: _this.props.p });
        }
        if (_this.props.m) {
            _this.styleGrid25 = Object.assign(_this.styleGrid25, { margin: _this.props.m });
        }
        if (screen.width <= 500) {
            _this.styleGrid25 = Object.assign(_this.styleGrid25, { width: '100%', padding: '1em 0' });
        }
        return _this;
    }

    _createClass(Grid25, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.styleGrid25 },
                this.props.children
            );
        }
    }]);

    return Grid25;
}(_react2.default.Component);

Grid25.propTypes = {};

exports.default = Grid25;