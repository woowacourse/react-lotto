import React, { useEffect, useRef, useCallback } from 'react';
import { isValidPurchaseAmount, isNumbersInValidRange } from '../../../utils/validator';
import { MESSAGE } from '../../../constants/messages';
import { MIN_PURCHASE_AMOUNT, MAX_PURCHASE_AMOUNT } from '../../../constants/standard';

const PurchaseAmountForm = ({ purchaseAmount, handleChange, isPurchaseAmountSubmitted, buyLottoTickets }) => {
  const inputRef = useRef();

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      const purchaseAmount = event.target['purchaseAmount'].value;
      if (!isValidPurchaseAmount(purchaseAmount)) {
        alert(MESSAGE.INVALID_PURCHASE_AMOUNT);
        return;
      }

      if (!isNumbersInValidRange([purchaseAmount], MIN_PURCHASE_AMOUNT, MAX_PURCHASE_AMOUNT)) {
        alert(MESSAGE.OUT_RANGED_PURCHASE_AMOUNT);
        return;
      }

      buyLottoTickets(purchaseAmount);
    },
    [buyLottoTickets]
  );

  useEffect(() => {
    inputRef.current.focus();
  }, [purchaseAmount]);

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
          value={purchaseAmount}
          onChange={handleChange}
          disabled={isPurchaseAmountSubmitted}
          required
        />
        <button className="btn btn-cyan" disabled={isPurchaseAmountSubmitted}>
          확인
        </button>
      </div>
    </form>
  );
};

export default PurchaseAmountForm;
