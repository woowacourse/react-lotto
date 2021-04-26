import React from 'react';
import PropTypes from 'prop-types';

export default class WinningNumberInput extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    winningNumberInputValues: PropTypes.array,
    isValidInputValue: PropTypes.func,
    handleWinningNumberInputChange: PropTypes.func,
    handleInputFocus: PropTypes.func,
  };

  render() {
    return (
      <>
        <label htmlFor={`winning-number-${this.props.index}`} className="sr-only">
          {`${this.props.index + 1}번째 당첨 번호`}
        </label>
        <input
          id={`winning-number-${this.props.index}`}
          type="number"
          className={`border rounded appearance-textfield shadow mx-1 text-xl text-center w-14 h-14 focus:outline-none focus:shadow-outline focus:ring-1.5 ${
            this.props.isValidInputValue(this.props.winningNumberInputValues[this.props.index])
              ? 'ring-blue-700'
              : 'ring-rose-500'
          }`}
          name={`winning-number-${this.props.index}`}
          value={this.props.winningNumberInputValues[this.props.index]}
          onChange={this.props.handleWinningNumberInputChange}
          onFocus={this.props.handleInputFocus}
        />
      </>
    );
  }
}
