import React from 'react';
import PropTypes from 'prop-types';

const WinningNumberInput = (props) => {
  const {
    index,
    winningNumberInputValues,
    isValidInputValue,
    handleWinningNumberInputChange,
    handleInputFocus,
  } = props;

  return (
    <>
      <label htmlFor={`winning-number-${index}`} className="sr-only">
        {`${index + 1}번째 당첨 번호`}
      </label>
      <input
        id={`winning-number-${index}`}
        type="number"
        className={`border rounded appearance-textfield shadow mx-1 text-xl text-center w-14 h-14 focus:outline-none focus:shadow-outline focus:ring-1.5 ${
          isValidInputValue(winningNumberInputValues[index]) ? 'ring-blue-700' : 'ring-rose-500'
        }`}
        name={`winning-number-${index}`}
        value={winningNumberInputValues[index]}
        onChange={handleWinningNumberInputChange}
        onFocus={handleInputFocus}
      />
    </>
  );
};

export default WinningNumberInput;

WinningNumberInput.propTypes = {
  index: PropTypes.number,
  winningNumberInputValues: PropTypes.array,
  isValidInputValue: PropTypes.func,
  handleWinningNumberInputChange: PropTypes.func,
  handleInputFocus: PropTypes.func,
};
