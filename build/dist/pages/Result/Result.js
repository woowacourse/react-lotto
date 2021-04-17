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
import { Link, Redirect } from '../../pkg/react-router-dom.js';
import Styled from './Result.style.js';
import Button from '../../components/Button/Button.js';
import LottoNumberList from '../../components/LottoNumberList/LottoNumberList.js';
import LottoNumberItem from '../../components/LottoNumberItem/LottoNumberItem.js';
import Modal from '../../components/Modal/Modal.js';
import WinningTable from '../../components/WinningTable/WinningTable.js';
import PageTitle from '../../components/PageTitle/PageTitle.js';
import { getProfitRate, getWinningResult } from '../../services/Result.js';

var Result = /*#__PURE__*/function (_Component) {
  _inherits(Result, _Component);

  var _super = _createSuper(Result);

  function Result(props) {
    var _this;

    _classCallCheck(this, Result);

    _this = _super.call(this, props);
    _this.state = {
      isModalOpen: false
    };
    _this.handleOpenDetail = _this.handleOpenDetail.bind(_assertThisInitialized(_this));
    _this.handleCloseDetail = _this.handleCloseDetail.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Result, [{
    key: "handleOpenDetail",
    value: function handleOpenDetail() {
      this.setState({
        isModalOpen: true
      });
    }
  }, {
    key: "handleCloseDetail",
    value: function handleCloseDetail(event) {
      if (event.target !== event.currentTarget) return;
      this.setState({
        isModalOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isModalOpen = this.state.isModalOpen;

      var _ref = this.props.location.state || {},
          _ref$lottoList = _ref.lottoList,
          lottoList = _ref$lottoList === void 0 ? {} : _ref$lottoList,
          _ref$moneyInput = _ref.moneyInput,
          moneyInput = _ref$moneyInput === void 0 ? null : _ref$moneyInput,
          _ref$winningNumber = _ref.winningNumber,
          winningNumber = _ref$winningNumber === void 0 ? {} : _ref$winningNumber,
          _ref$bonusNumber = _ref.bonusNumber,
          bonusNumber = _ref$bonusNumber === void 0 ? null : _ref$bonusNumber;

      var winningResult = getWinningResult(lottoList, {
        winningNumber: winningNumber,
        bonusNumber: bonusNumber
      });
      var profitRate = getProfitRate(winningResult, moneyInput);
      return /*#__PURE__*/React.createElement(React.Fragment, null, !this.props.location.state && /*#__PURE__*/React.createElement(Redirect, {
        to: "/"
      }), /*#__PURE__*/React.createElement(PageTitle, null, "\uC5BC\uB9C8\uB098 \uC783\uC5C8\uC744\uAE4C\uC694?"), /*#__PURE__*/React.createElement(Styled.WinningNumber, null, /*#__PURE__*/React.createElement(Styled.NumberWrapper, null, /*#__PURE__*/React.createElement(Styled.NumberBorder, null, Object.values(winningNumber).map(function (number) {
        return /*#__PURE__*/React.createElement(LottoNumberItem, {
          key: "winning-number-".concat(number)
        }, number);
      })), /*#__PURE__*/React.createElement(Styled.NumberText, null, "\uB2F9\uCCA8 \uBC88\uD638")), /*#__PURE__*/React.createElement(Styled.PlusIcon, null, "\u2795"), /*#__PURE__*/React.createElement(Styled.NumberWrapper, null, /*#__PURE__*/React.createElement(Styled.NumberBorder, null, /*#__PURE__*/React.createElement(LottoNumberItem, null, bonusNumber)), /*#__PURE__*/React.createElement(Styled.NumberText, null, "\uBCF4\uB108\uC2A4 \uBC88\uD638"))), /*#__PURE__*/React.createElement(LottoNumberList, {
        lottoList: lottoList,
        winningNumber: winningNumber,
        bonusNumber: bonusNumber
      }), /*#__PURE__*/React.createElement(Styled.ButtonContainer, null, /*#__PURE__*/React.createElement(Button, {
        onClick: this.handleOpenDetail
      }, "\u2728 \uACB0\uACFC \uD655\uC778"), /*#__PURE__*/React.createElement(Link, {
        to: "/"
      }, /*#__PURE__*/React.createElement(Button, {
        bgColor: "#d6d6d6"
      }, "\u21AA\uFE0F \uB2E4\uC2DC \uC2DC\uC791"))), isModalOpen && /*#__PURE__*/React.createElement(Modal, {
        onClose: this.handleCloseDetail
      }, /*#__PURE__*/React.createElement(Modal.Title, null, "\uB2F9\uCCA8 \uACB0\uACFC \uC0C1\uC138 \uBCF4\uAE30"), /*#__PURE__*/React.createElement(WinningTable, {
        winningResult: winningResult
      }), /*#__PURE__*/React.createElement(Styled.ProfitRateMessage, null, "\uD83D\uDCB8\uB2F9\uC2E0\uC758 \uC218\uC775\uB960\uC744 ", /*#__PURE__*/React.createElement("strong", null, profitRate, "%"), "\uC785\uB2C8\uB2E4\uD83D\uDCB8")));
    }
  }]);

  return Result;
}(Component);

export default Result;