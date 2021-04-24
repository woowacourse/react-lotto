import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import NumberInput from '../UtilComponent/NumberInput/index';
import Button from '../UtilComponent/Button/index';
import { isInputValueExist, isInputValueDuplicated, isInputValueChanged } from './Validations';
import { BONUS_BALL_LENGTH, LOTTERY_BALL_LENGTH } from '../../constants/number';
import './style.scss';

class WinningNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winningNumberInputs: new Array(LOTTERY_BALL_LENGTH + BONUS_BALL_LENGTH).fill(0),
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

  onChangeWinningNumber(e, index) {
    const inputValue = Number(e.target.value);
    if (!isInputValueChanged(this.state.winningNumberInputs[index], inputValue)) return;

    const newWinningNumberInputs = [...this.state.winningNumberInputs];
    newWinningNumberInputs[index] = inputValue;

    if (!isInputValueExist(inputValue)) {
      this.setState({
        winningNumberInputs: newWinningNumberInputs,
        currentInputIndex: index,
      });
      return;
    }

    if (isInputValueDuplicated(this.state, inputValue)) {
      alert('입력값이 중복되었습니다.');
      e.target.value = '';
      e.target.focus();
      return;
    }

    this.setState({
      winningNumberInputs: newWinningNumberInputs,
      currentInputIndex: index + 1,
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.onWinningNumberSubmit(e)}>
        <div className='winning-number-form'>
          {[...this.state.winningNumberInputs].map((number, index) => {
            return (
              <NumberInput
                isCurrentInput={this.state.currentInputIndex === index}
                min='1'
                max='45'
                key={uuidv4()}
                customClass={
                  index < this.state.winningNumberInputs.length - 1
                    ? 'winning-number'
                    : 'bonus-number'
                }
                defaultValue={number ? number : ''}
                onInputFocusOut={(e) => this.onChangeWinningNumber(e, index)}
              />
            );
          })}
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
