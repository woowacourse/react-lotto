/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { createRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../shared';
import { validatePurchaseAmount, payForLotto, getLottoBundle } from './service';
import { MESSAGE } from '../../../constants';
import './style.css';

const initialState = {
  validationMessage: '',
  isInputDisabled: false,
  isSubmitButtonDisabled: true,
};

export const PurchaseForm = (props) => {
  const { setLottoBundle, shouldReset, finishReset } = props;
  const [validationMessage, setValidationMessage] = useState(initialState.validationMessage);
  const [isInputDisabled, setIsInputDisabled] = useState(initialState.isInputDisabled);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(
    initialState.isSubmitButtonDisabled,
  );
  const paymentInput = createRef();
  const onChangeInput = (e) => {
    const money = e.target.value;
    const { validationMessage, isSubmitButtonDisabled } = validatePurchaseAmount(money);

    setValidationMessage(validationMessage);
    setIsSubmitButtonDisabled(isSubmitButtonDisabled);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const money = e.target.input.value;
    const { change, numOfLotto } = payForLotto(money);

    if (change > 0) {
      alert(MESSAGE.PURCHASE_AMOUNT_HAS_CHANGE(change));
    }
    setLottoBundle(getLottoBundle(numOfLotto));
    setIsInputDisabled(true);
    setIsSubmitButtonDisabled(true);
  };

  useEffect(() => {
    paymentInput.current.focus();
    paymentInput.current.value = '';
    setIsInputDisabled(false);
    finishReset();
  }, [shouldReset]);

  return (
    <div>
      <form className="PurchaseForm" onSubmit={onSubmit}>
        <label className="PurchaseForm__label">
          <span className="PurchaseForm__text">구입할 금액을 입력해주세요.</span>
          <input
            className="PurchaseForm__input"
            name="input"
            type="number"
            min="0"
            max="100000"
            placeholder="구입 금액"
            onChange={onChangeInput}
            ref={paymentInput}
            disabled={isInputDisabled}
          />
        </label>
        <div className="PurchaseForm__button_wrapper">
          <Button type="submit" className="PurchaseForm__button" disabled={isSubmitButtonDisabled}>
            구매
          </Button>
        </div>
      </form>
      <div className="ValidationMessage">{validationMessage}</div>
    </div>
  );
};

PurchaseForm.propTypes = {
  setLottoBundle: PropTypes.func.isRequired,
  shouldReset: PropTypes.bool.isRequired,
  finishReset: PropTypes.func.isRequired,
};
