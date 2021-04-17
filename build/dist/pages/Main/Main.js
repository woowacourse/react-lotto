function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import Button from '../../components/Button/Button.js';
import LottoNumberList from '../../components/LottoNumberList/LottoNumberList.js';
import PageTitle from '../../components/PageTitle/PageTitle.js';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch.js';
import { ALERT_MESSAGE, LOTTO, PATH } from '../../constants/index.js';
import { purchaseLottoList } from '../../services/Main.js';
import { isEmptyObject } from '../../utils/index.js';
import { Styled } from './Main.style.js';

var Main = /*#__PURE__*/function (_Component) {
  _inherits(Main, _Component);

  var _super = _createSuper(Main);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this, props);
    _this.state = {
      moneyInput: '',
      lottoList: {},
      isNumberShowing: false
    };
    _this.handleSubmitMoneyInput = _this.handleSubmitMoneyInput.bind(_assertThisInitialized(_this));
    _this.handleChangeMoneyInput = _this.handleChangeMoneyInput.bind(_assertThisInitialized(_this));
    _this.handleToggleSwitch = _this.handleToggleSwitch.bind(_assertThisInitialized(_this));
    _this.handleClickEnterWinning = _this.handleClickEnterWinning.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Main, [{
    key: "handleSubmitMoneyInput",
    value: function handleSubmitMoneyInput(event) {
      event.preventDefault();
      var newLottoList = purchaseLottoList(this.state.moneyInput);
      this.setState({
        lottoList: newLottoList
      });
    }
  }, {
    key: "handleChangeMoneyInput",
    value: function handleChangeMoneyInput(event) {
      this.setState({
        moneyInput: Number(event.target.value)
      });
    }
  }, {
    key: "handleToggleSwitch",
    value: function handleToggleSwitch(event) {
      this.setState({
        isNumberShowing: event.target.checked
      });
    }
  }, {
    key: "handleClickEnterWinning",
    value: function handleClickEnterWinning() {
      var _this$state = this.state,
          lottoList = _this$state.lottoList,
          moneyInput = _this$state.moneyInput;
      var history = this.props.history;

      if (!moneyInput || isEmptyObject(lottoList)) {
        alert(ALERT_MESSAGE.NO_PURCHASED_LOTTO);
        return;
      }

      history.push({
        pathname: PATH.ENTER_WINNING,
        state: {
          lottoList: lottoList,
          moneyInput: moneyInput
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          lottoList = _this$state2.lottoList,
          moneyInput = _this$state2.moneyInput,
          isNumberShowing = _this$state2.isNumberShowing;
      var lottoCount = Object.entries(lottoList).length;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, null, "\uB85C\uB610 \uAD6C\uB9E4"), /*#__PURE__*/React.createElement(Styled.Form, {
        onSubmit: this.handleSubmitMoneyInput
      }, /*#__PURE__*/React.createElement(Styled.MoneyInput, {
        type: "number",
        value: moneyInput,
        min: LOTTO.PRICE,
        onChange: this.handleChangeMoneyInput,
        disabled: lottoCount > 0 ? 'disabled' : '',
        placeholder: "\uB3C8\uC744 \uB0B4\uC2DC\uC624",
        required: true,
        autoFocus: true
      }), /*#__PURE__*/React.createElement(Button, {
        type: "submit",
        disabled: lottoCount > 0 ? 'disabled' : '',
        minWidth: '80px'
      }, "\uAD6C\uC785")), /*#__PURE__*/React.createElement(Styled.LottoListTop, null, /*#__PURE__*/React.createElement(Styled.LottoCountContainer, null, "\uD604\uC7AC \uAD6C\uC785\uD55C \uB85C\uB610 ", /*#__PURE__*/React.createElement(Styled.LottoCount, null, lottoCount), "\uAC1C"), /*#__PURE__*/React.createElement(ToggleSwitch, {
        title: "\uBC88\uD638 \uBCF4\uAE30",
        isChecked: isNumberShowing,
        onChange: this.handleToggleSwitch
      })), isNumberShowing && /*#__PURE__*/React.createElement(LottoNumberList, {
        lottoList: lottoList
      }), /*#__PURE__*/React.createElement(Button, {
        onClick: this.handleClickEnterWinning
      }, "\uD83E\uDD29 \uB2F9\uCCA8 \uBC88\uD638 \uC785\uB825"));
    }
  }]);

  return Main;
}(Component);

export default Main;