import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { LOTTO } from '../utils';

const calculatePurchaseTicketCount = (inputValue) => {
  return Math.floor(Number(inputValue) / LOTTO.UNIT_PRICE);
};

const PurchaseForm = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (props.isReset) {
      resetState();
    }
  }, [props.isReset]);

  const resetState = () => {
    setInputValue('');
    setIsValid(false);
  };

  const handleInputChange = ({ target: { value, valueAsNumber } }) => {
    setInputValue(value);
    setIsValid([value !== '', valueAsNumber >= LOTTO.MIN_PRICE, valueAsNumber <= LOTTO.MAX_PRICE].every(Boolean));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ticketCount = calculatePurchaseTicketCount(inputValue);

    props.setTicketCount(ticketCount);
  };

  return (
    <form className="mb-4 mt-5" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">구입할 금액을 입력해주세요.</h2>
      <div className="flex my-2">
        <label htmlFor="purchase-input" className="sr-only">
          구입 금액 입력란
        </label>
        <input
          id="purchase-input"
          type="number"
          className={cx(
            'appearance-textfield mr-2 px-3 py-2 w-full text-gray-700 leading-tight border rounded focus:outline-none shadow focus:ring-1.5',
            isValid ? 'ring-blue-700' : 'ring-rose-500'
          )}
          placeholder="구입 금액"
          onChange={handleInputChange}
          value={inputValue}
          disabled={props.tickets.length > 0}
        />
        <button
          type="submit"
          className="px-4 py-2 min-w-1/8 text-white font-bold bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 rounded focus:outline-none focus:ring-2"
          disabled={props.tickets.length > 0 || !isValid}
        >
          확인
        </button>
      </div>
      {isValid ? (
        props.tickets.length === 0 && (
          <div className="h-4 text-blue-700">
            {`${calculatePurchaseTicketCount(inputValue)}장의 로또를 구매하실 수
                있습니다. `}
          </div>
        )
      ) : (
        <div className="h-4 text-rose-500">
          {`${LOTTO.MIN_PRICE.toLocaleString('en-US')}원 이상 ${LOTTO.MAX_PRICE.toLocaleString('en-US')}원 이하의
            금액을 입력해주세요.`}
        </div>
      )}
    </form>
  );
};

PurchaseForm.propTypes = {
  setTicketCount: PropTypes.func.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  isReset: PropTypes.bool.isRequired,
};

export default PurchaseForm;
