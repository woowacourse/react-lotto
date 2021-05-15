/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../shared';
import { validatePurchaseAmount, payForLotto, getLottoBundle } from './service';
import { MESSAGE } from '../../../constants';
import './style.css';

const initialState = {
  inputStatus: {
    isValidAmount: false,
    validationMessage: '',
    isSubmitted: false,
  },
};

export const PurchaseForm = (props) => {
  const { setLottoBundle, shouldReset, finishReset } = props;
  const [inputStatus, setInputStatus] = useState(initialState.inputStatus);
  const { isValidAmount, validationMessage, isSubmitted } = inputStatus;

  const paymentInputRef = useRef(null);
  const onChangeInput = (e) => {
    const money = e.target.value;
    const { isValidAmount, validationMessage } = validatePurchaseAmount(money);

    setInputStatus((prevState) => ({ ...prevState, isValidAmount, validationMessage }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const money = e.target.input.value;
    const { change, numOfLotto } = payForLotto(money);

    if (change > 0) {
      alert(MESSAGE.PURCHASE_AMOUNT_HAS_CHANGE(change));
    }
    setLottoBundle(getLottoBundle(numOfLotto));
    setInputStatus((prevState) => ({ ...prevState, isSubmitted: true }));
  };

  useEffect(() => {
    paymentInputRef.current.focus();
    paymentInputRef.current.value = '';
    setInputStatus(() => initialState.inputStatus);
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
            ref={paymentInputRef}
            disabled={isSubmitted}
          />
        </label>
        <div className="PurchaseForm__button_wrapper">
          <Button
            hi="hi"
            type="submit"
            className="PurchaseForm__button"
            disabled={!isValidAmount || isSubmitted}
          >
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
