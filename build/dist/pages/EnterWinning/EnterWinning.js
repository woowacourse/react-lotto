function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import { Redirect } from '../../pkg/react-router-dom.js';
import Styled from './EnterWinning.style.js';
import { ALERT_MESSAGE, INPUT_NAME, LOTTO, PATH } from '../../constants/index.js';
import { initObject, isEmptyObject, isUniqueArray } from '../../utils/index.js';
import Button from '../../components/Button/Button.js';
import PageTitle from '../../components/PageTitle/PageTitle.js';

var EnterWinning = /*#__PURE__*/function (_Component) {
  _inherits(EnterWinning, _Component);

  var _super = _createSuper(EnterWinning);

  function EnterWinning(props) {
    var _this;

    _classCallCheck(this, EnterWinning);

    _this = _super.call(this, props);
    _this.state = {
      winningNumber: initObject(Object.values(INPUT_NAME.WINNING_NUMBER), ''),
      bonusNumber: ''
    };
    _this.handleChangeWinningNumber = _this.handleChangeWinningNumber.bind(_assertThisInitialized(_this));
    _this.handleChangeBonusNumber = _this.handleChangeBonusNumber.bind(_assertThisInitialized(_this));
    _this.handleSubmitWinningNumber = _this.handleSubmitWinningNumber.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EnterWinning, [{
    key: "handleChangeWinningNumber",
    value: function handleChangeWinningNumber(event) {
      this.setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          winningNumber: _objectSpread(_objectSpread({}, prevState.winningNumber), {}, _defineProperty({}, event.target.name, Number(event.target.value)))
        });
      });
    }
  }, {
    key: "handleChangeBonusNumber",
    value: function handleChangeBonusNumber(event) {
      this.setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          bonusNumber: Number(event.target.value)
        });
      });
    }
  }, {
    key: "handleSubmitWinningNumber",
    value: function handleSubmitWinningNumber(event) {
      event.preventDefault();
      var _this$state = this.state,
          winningNumber = _this$state.winningNumber,
          bonusNumber = _this$state.bonusNumber;
      var _this$props = this.props,
          location = _this$props.location,
          history = _this$props.history;
      var _location$state = location.state,
          lottoList = _location$state.lottoList,
          moneyInput = _location$state.moneyInput;
      var numberList = [].concat(_toConsumableArray(Object.values(winningNumber)), [bonusNumber]);

      if (!isUniqueArray(numberList)) {
        alert(ALERT_MESSAGE.DUPLICATED_WINNING_NUMBER);
        return;
      }

      history.push({
        pathname: PATH.RESULT,
        state: {
          lottoList: lottoList,
          moneyInput: moneyInput,
          winningNumber: winningNumber,
          bonusNumber: bonusNumber
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          winningNumber = _this$state2.winningNumber,
          bonusNumber = _this$state2.bonusNumber;
      return /*#__PURE__*/React.createElement(React.Fragment, null, !this.props.location.state && /*#__PURE__*/React.createElement(Redirect, {
        to: "/"
      }), /*#__PURE__*/React.createElement(PageTitle, null, "\uB2F9\uCCA8 \uBC88\uD638 \uC785\uB825"), /*#__PURE__*/React.createElement("p", null, "\uC9C0\uB09C \uC8FC \uB2F9\uCCA8\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleSubmitWinningNumber
      }, /*#__PURE__*/React.createElement(Styled.InputGroup, null, /*#__PURE__*/React.createElement(Styled.Fieldset, null, /*#__PURE__*/React.createElement("legend", {
        hidden: true
      }, "\uB2F9\uCCA8 \uBC88\uD638 \uC785\uB825"), Object.keys(winningNumber).map(function (key, index) {
        return /*#__PURE__*/React.createElement(Styled.NumberInput, {
          key: key,
          type: "number",
          min: LOTTO.MIN_NUMBER,
          max: LOTTO.MAX_NUMBER,
          name: key,
          "aria-label": "".concat(index + 1, "\uBC88\uC9F8 \uB2F9\uCCA8 \uBC88\uD638"),
          value: winningNumber[key],
          onChange: _this2.handleChangeWinningNumber,
          required: true,
          autoFocus: index === 0
        });
      })), /*#__PURE__*/React.createElement(Styled.PlusIcon, null, "\u2795"), /*#__PURE__*/React.createElement("label", {
        htmlFor: "bonus-number",
        hidden: true
      }, "\uBCF4\uB108\uC2A4 \uBC88\uD638"), /*#__PURE__*/React.createElement(Styled.NumberInput, {
        type: "number",
        min: LOTTO.MIN_NUMBER,
        max: LOTTO.MAX_NUMBER,
        id: "bonus-number",
        name: "bonus-number",
        value: bonusNumber,
        onChange: this.handleChangeBonusNumber,
        required: true
      })), /*#__PURE__*/React.createElement(Button, null, "\uD83E\uDD41 \uB2F9\uCCA8 \uACB0\uACFC \uD655\uC778")));
    }
  }]);

  return EnterWinning;
}(Component);

export default EnterWinning;