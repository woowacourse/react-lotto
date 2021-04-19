/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Button } from '../../shared';
import { validatePurchaseAmount, payForLotto } from './service';
import { MESSAGE } from '../../../constants';
import './style.css';

export default class PurchaseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validationMessage: '',
      isInputDisabled: false,
      isSubmitButtonDisabled: true,
    };
    this.paymentInput = React.createRef();
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.paymentInput.current.focus();
  }

  componentDidUpdate() {
    if (this.props.shouldReset) {
      this.paymentInput.current.value = '';
      this.paymentInput.current.disabled = false;
      this.paymentInput.current.focus();
      this.props.didReset();
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const money = e.target.input.value;
    const { change, numOfLotto } = payForLotto(money);

    if (change > 0) {
      alert(MESSAGE.PURCHASE_AMOUNT_HAS_CHANGE(change));
    }

    this.props.onPurchaseLotto({ numOfLotto });
    this.setState({ isInputDisabled: true, isSubmitButtonDisabled: true });
  }

  onChangeInput(e) {
    const money = e.target.value;
    const { validationMessage, isSubmitButtonDisabled } = validatePurchaseAmount(money);

    this.setState({ validationMessage, isSubmitButtonDisabled });
  }

  render() {
    const { validationMessage, isInputDisabled, isSubmitButtonDisabled } = this.state;

    return (
      <div>
        <form className="PurchaseForm" onSubmit={this.onSubmit}>
          <label className="PurchaseForm__label">
            <span className="PurchaseForm__text">구입할 금액을 입력해주세요.</span>
            <input
              className="PurchaseForm__input"
              name="input"
              type="number"
              placeholder="구입 금액"
              onChange={this.onChangeInput}
              ref={this.paymentInput}
              disabled={isInputDisabled}
            />
          </label>
          <div className="PurchaseForm__button_wrapper">
            <Button
              type="submit"
              className="PurchaseForm__button"
              disabled={isSubmitButtonDisabled}
            >
              구매
            </Button>
          </div>
        </form>
        <div className="ValidationMessage">{validationMessage}</div>
      </div>
    );
  }
}
