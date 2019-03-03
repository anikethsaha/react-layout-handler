'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SmallTitles = function (_React$Component) {
    _inherits(SmallTitles, _React$Component);

    function SmallTitles(props) {
        _classCallCheck(this, SmallTitles);

        var _this = _possibleConstructorReturn(this, (SmallTitles.__proto__ || Object.getPrototypeOf(SmallTitles)).call(this, props));

        _this.SmallTitlesStyle = {
            fontSize: '24px',
            margin: ".78em auto"
        };
        if (_this.props.align) {
            _this.SmallTitlesStyle = Object.assign(_this.SmallTitlesStyle, { textAlign: _this.props.align });
        }
        if (_this.props.color) {
            _this.SmallTitlesStyle = Object.assign(_this.SmallTitlesStyle, { color: _this.props.color });
        }
        return _this;
    }

    _createClass(SmallTitles, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                { style: this.SmallTitlesStyle },
                this.props.children
            );
        }
    }]);

    return SmallTitles;
}(_react2.default.Component);

exports.default = SmallTitles;