function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from '../../pkg/react.js';
import { WINNING_TABLE } from '../../constants/index.js';
import { currencyFormat } from '../../utils/index.js';
import Styled from './WinningTable.style.js';

var WinningTable = /*#__PURE__*/function (_Component) {
  _inherits(WinningTable, _Component);

  var _super = _createSuper(WinningTable);

  function WinningTable(props) {
    _classCallCheck(this, WinningTable);

    return _super.call(this, props);
  }

  _createClass(WinningTable, [{
    key: "render",
    value: function render() {
      var winningResult = this.props.winningResult;
      return /*#__PURE__*/React.createElement(Styled.Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(Styled.TableRow, null, /*#__PURE__*/React.createElement(Styled.TableHeader, null, "\uB4F1\uC218"), /*#__PURE__*/React.createElement(Styled.TableHeader, null, "\uC77C\uCE58 \uAC2F\uC218"), /*#__PURE__*/React.createElement(Styled.TableHeader, null, "\uB2F9\uCCA8\uAE08"), /*#__PURE__*/React.createElement(Styled.TableHeader, null, "\uB2F9\uCCA8 \uAC2F\uC218"))), /*#__PURE__*/React.createElement("tbody", null, Object.entries(winningResult).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            ranking = _ref2[0],
            winningCount = _ref2[1];

        return /*#__PURE__*/React.createElement(Styled.TableRow, {
          key: ranking
        }, /*#__PURE__*/React.createElement(Styled.TableItem, null, WINNING_TABLE[ranking].TITLE), /*#__PURE__*/React.createElement(Styled.TableItem, null, WINNING_TABLE[ranking].MATCH_CONDITION), /*#__PURE__*/React.createElement(Styled.TableItem, null, currencyFormat(WINNING_TABLE[ranking].PRIZE)), /*#__PURE__*/React.createElement(Styled.TableItem, null, /*#__PURE__*/React.createElement("span", null, winningCount), "\uAC1C"));
      })));
    }
  }]);

  return WinningTable;
}(Component);

WinningTable.defaultProps = {
  winningResult: {}
};
export default WinningTable;