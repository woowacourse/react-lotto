import { useEffect, useRef, useState } from 'react';
import { getLottoBundle, validateValue } from './PurchaseForm.service';
import './PurchaseForm.style.css';

const PurchaseForm = ({ isPurchasedLotto, setIsPurchasedLotto, setLottoBundle, isReset, setIsReset }) => {
  const [validationMessage, setValidationMessage] = useState('');
  const [isValidAmount, setIsValidAmount] = useState(false);
  const textInput = useRef(null);

  const onChangeInput = (event) => {
    const inputValue = event.target.value;
    const { message, isValidInputValue } = validateValue(inputValue);

    setValidationMessage(message);
    setIsValidAmount(isValidInputValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const money = event.target.input.valueAsNumber;

    setIsPurchasedLotto(true);
    setLottoBundle(getLottoBundle(money));
  };

  useEffect(() => {
    textInput.current.focus();
    textInput.current.value = '';
    setIsReset(false);
  }, [isReset]);

  return (
    <div>
      <form className="purchase-amount-form" onSubmit={onSubmit}>
        <label htmlFor="purchase-amount-input" className="purchase-amount-label">
          <span className="purchase-amount-text">구입할 금액을 입력해주세요.</span>
          <input
            id="purchase-amount-input"
            name="input"
            type="number"
            placeholder="구입 금액"
            onChange={onChangeInput}
            ref={textInput}
            required
          />
        </label>
        <div className="purchase-button-wrapper">
          <button type="submit" className="purchase-button" disabled={!isValidAmount || isPurchasedLotto}>
            구매
          </button>
        </div>
      </form>
      <div className="validation-message">{validationMessage}</div>
    </div>
  );
};

export default PurchaseForm;
