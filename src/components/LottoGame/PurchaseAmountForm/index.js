import React, { useEffect, useRef } from 'react';
import { isValidPurchaseAmount } from '../../../utils/validator';
import { MESSAGE } from '../../../constants/messages';

const PurchaseAmountForm = props => {
  const inputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    const purchaseAmount = event.target['purchaseAmount'].value;
    if (!isValidPurchaseAmount(purchaseAmount)) {
      alert(MESSAGE.INVALID_PURCHASE_AMOUNT);
      return;
    }

    props.buyLottoTickets(purchaseAmount);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [props.purchaseAmount]);

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <div className="mb-2 d-inline-block">구입할 금액을 입력해주세요.</div>
      <div className="flex">
        <input
          ref={inputRef}
          step="any"
          name="purchaseAmount"
          type="number"
          className="w-full mr-2 pl-2"
          placeholder="구입 금액"
          value={props.purchaseAmount}
          onChange={props.handleChange}
          disabled={props.isPurchaseAmountSubmitted}
          required
        />
        <button className="btn btn-cyan" disabled={props.isPurchaseAmountSubmitted}>
          확인
        </button>
      </div>
    </form>
  );
};

export default PurchaseAmountForm;
