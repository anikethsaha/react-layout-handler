'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.P = exports.Code = exports.ST = exports.MT = exports.LT = exports.XLT = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _H = require('./H');

Object.defineProperty(exports, 'H1', {
    enumerable: true,
    get: function get() {
        return _H.H1;
    }
});
Object.defineProperty(exports, 'H2', {
    enumerable: true,
    get: function get() {
        return _H.H2;
    }
});
Object.defineProperty(exports, 'H3', {
    enumerable: true,
    get: function get() {
        return _H.H3;
    }
});
Object.defineProperty(exports, 'H4', {
    enumerable: true,
    get: function get() {
        return _H.H4;
    }
});
Object.defineProperty(exports, 'H5', {
    enumerable: true,
    get: function get() {
        return _H.H5;
    }
});
Object.defineProperty(exports, 'H6', {
    enumerable: true,
    get: function get() {
        return _H.H6;
    }
});

var _code = require('./code');

var _code2 = _interopRequireDefault(_code);

var _Titles = require('./Titles');

var _P = require('./P');

var _P2 = _interopRequireDefault(_P);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.XLT = _Titles.ExtraLargeTitles;
exports.LT = _Titles.LargeTitles;
exports.MT = _Titles.MediumTitles;
exports.ST = _Titles.SmallTitles;
exports.Code = _code2.default;
exports.P = _P2.default;