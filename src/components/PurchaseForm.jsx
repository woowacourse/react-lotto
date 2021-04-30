import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LOTTO } from '../utils/constants';

const PurchaseForm = (props) => {
  const { handleTickets, tickets, isReset } = props;

  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const resetState = () => {
    setInputValue('');
    setIsValid(false);
  };

  const calculatePurchaseTicketCount = (inputValue) => {
    return Math.floor(Number(inputValue) / LOTTO.UNIT_PRICE);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ticketCount = calculatePurchaseTicketCount(inputValue);
    handleTickets(ticketCount);
  };

  const handleInputChange = ({ target: { value, valueAsNumber } }) => {
    setInputValue(value);
    setIsValid(!(value === '' || valueAsNumber < LOTTO.MIN_PRICE || valueAsNumber > LOTTO.MAX_PRICE));
  };

  useEffect(() => {
    resetState();
  }, [isReset]);

  return (
    <form className="mt-5 mb-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">구입할 금액을 입력해주세요.</h2>
      <div className="flex my-2">
        <label htmlFor="purchase-input" className="sr-only">
          구입 금액 입력란
        </label>
        <input
          id="purchase-input"
          type="number"
          className={`
            w-full py-2 px-3 appearance-textfield border rounded shadow text-gray-700 leading-tight
            focus:outline-none focus:shadow-outline mr-2 focus:ring-1.5
            ${isValid ? 'ring-blue-700' : 'ring-rose-500'}
          `}
          placeholder="구입 금액"
          onChange={handleInputChange}
          value={inputValue}
          disabled={tickets.length > 0}
        />
        <button
          type="submit"
          className="font-bold py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white min-w-1/8 "
          disabled={tickets.length > 0 || !isValid}
        >
          확인
        </button>
      </div>
      {tickets.length > 0 || isValid ? (
        ''
      ) : isValid ? (
        tickets.length === 0 && (
          <div className="text-blue-700 h-4 ">
            {`${calculatePurchaseTicketCount(inputValue)}장의 로또를 구매하실 수
              있습니다. `}
          </div>
        )
      ) : (
        <div className="text-rose-500 h-4 ">
          {`${LOTTO.MIN_PRICE.toLocaleString('en-US')}원 이상 ${LOTTO.MAX_PRICE.toLocaleString('en-US')}원 이하의
          금액을 입력해주세요.`}
        </div>
      )}
    </form>
  );
};

export default PurchaseForm;

PurchaseForm.propTypes = {
  handleTickets: PropTypes.func.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  isReset: PropTypes.func.isRequired,
};
