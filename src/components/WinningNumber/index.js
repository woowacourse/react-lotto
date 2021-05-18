import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import NumberInput from '../UtilComponent/NumberInput/index';
import Button from '../UtilComponent/Button/index';
import { BONUS_BALL_LENGTH, LOTTERY_BALL_LENGTH } from '../../constants/number';
import './style.scss';

class WinningNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInputIndex: 0,
    };
  }

  onWinningNumberSubmit(e) {
    e.preventDefault();
    // TODO: 깔끔한 방법 찾기
    const winningNumbers = [];
    e.target
      .querySelectorAll('.winning-number')
      .forEach((input) => winningNumbers.push(Number(input.value)));

    const bonusNumber = Number(e.target.querySelector('.bonus-number').value);

    this.props.onHandleSubmit(winningNumbers, bonusNumber);
    this.props.onModalButtonClick();
  }

  isInputValueChanged(currentInputValue, inputValue) {
    return currentInputValue === inputValue;
  }

  isInputValueExist(inputValue) {
    return !!inputValue;
  }

  isInputValueDuplicated(winningNumbers, inputValue, index) {
    const currentIndex = winningNumbers.findIndex((el) => el === inputValue);
    if (currentIndex !== -1 && currentIndex !== index) {
      return true;
    }
    return false;
  }

  onChangeWinningNumber(e, index) {
    if (typeof index !== 'number') return;
    const inputValue = Number(e.target.value.slice(0, 2));

    const newWinningNumberInputs = [
      ...this.props.lotto.winningNumbers,
      this.props.lotto.bonusNumber,
    ];
    newWinningNumberInputs[index] = inputValue;
    const bonusNumber = Number(newWinningNumberInputs.splice(newWinningNumberInputs.length - 1, 1));

    if (!this.isInputValueExist(inputValue)) {
      this.props.onHandleSetWinningNumbers({
        winningNumbers: newWinningNumberInputs,
        bonusNumber,
      });
      this.setState({
        currentInputIndex: index,
      });
      return;
    }

    if (
      this.isInputValueDuplicated(
        [...this.props.lotto.winningNumbers, this.props.lotto.bonusNumber],
        inputValue,
        index
      )
    ) {
      alert('입력값이 중복되었습니다.');
      e.target.value = '';
      e.target.focus();
      return;
    }

    this.props.onHandleSetWinningNumbers({
      winningNumbers: newWinningNumberInputs,
      bonusNumber,
    });
    this.setState({
      currentInputIndex: index + 1,
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.onWinningNumberSubmit(e)}>
        <div className='winning-number-form'>
          {[...this.props.lotto.winningNumbers, this.props.lotto.bonusNumber].map(
            (number, index) => {
              return (
                <NumberInput
                  isCurrentInput={this.state.currentInputIndex === index}
                  min='1'
                  max='45'
                  key={uuidv4()}
                  customClass={
                    index <
                    [...this.props.lotto.winningNumbers, this.props.lotto.bonusNumber].length - 1
                      ? 'winning-number'
                      : 'bonus-number'
                  }
                  defaultValue={number ? number : ''}
                  onInputFocusOut={(e) => this.onChangeWinningNumber(e, index)}
                />
              );
            }
          )}
        </div>
        <Button buttonText='결과 확인하기' />
      </form>
    );
  }
}

WinningNumber.propTypes = {
  onHandleSubmit: PropTypes.func,
  onModalButtonClick: PropTypes.func,
};

export default WinningNumber;
