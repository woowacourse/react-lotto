import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LOTTERY_NUMBERS_LENGTH } from '../../constants/number';
import Button from '../UtilComponent/Button/index';
import NumberInput from '../UtilComponent/NumberInput/index';
import './style.scss';

class WinningNumber extends React.Component {
  constructor(props) {
    super(props);
    this.inputIds = [...Array(LOTTERY_NUMBERS_LENGTH)].map(() => uuidv4());
    Array(LOTTERY_NUMBERS_LENGTH)
      .fill(0)
      .forEach((_, idx) => {
        this[`inputRef${idx}`] = React.createRef();
      });
  }

  componentDidMount() {
    this.inputRef0.current.focus();
  }

  onWinningNumberSubmit(e) {
    e.preventDefault();
    const lotteryNumbers = this.props.lotteryNumbers.map((_, idx) => ({
      value: Number(this[`inputRef${idx}`].current.value),
      type: this.props.lotteryNumbers[idx].type,
    }));

    this.props.onHandleChangeLotteryNumbers(lotteryNumbers);
    this.props.onModalButtonClick();
  }

  isInputValueExist(inputValue) {
    return !!inputValue;
  }

  isInputValueDuplicated(lotteryNumbers, inputValue, index) {
    const idx = lotteryNumbers.findIndex((el) => el.value === inputValue);
    return idx !== -1 && idx !== index;
  }

  onBlurLotteryNumberInput(e, index) {
    const inputValue = Number(e.target.value);
    const lotteryNumbers = [...this.props.lotteryNumbers];
    lotteryNumbers[index].value = inputValue;

    if (!this.isInputValueExist(inputValue)) return;

    if (this.isInputValueDuplicated(this.props.lotteryNumbers, inputValue, index)) {
      alert('입력값이 중복되었습니다.');
      e.target.value = '';
      e.target.focus();
      return;
    }

    this.props.onHandleChangeLotteryNumbers(lotteryNumbers);
  }

  onChangeLotteryNumber(e, index) {
    const inputValue = Math.min(Number(e.target.value), 45);
    const lotteryNumbers = [...this.props.lotteryNumbers];

    lotteryNumbers[index] = {
      value: inputValue,
      type: lotteryNumbers[index].type,
    };

    this.props.onHandleChangeLotteryNumbers(lotteryNumbers);
  }

  render() {
    return (
      <form onSubmit={(e) => this.onWinningNumberSubmit(e)}>
        <div className='winning-number-form'>
          {this.props.lotteryNumbers.map(({ value, type }, idx) => (
            <NumberInput
              min='1'
              max='45'
              key={this.inputIds[idx]}
              ref={this[`inputRef${idx}`]}
              customClass={`${type}-number`}
              value={value || ''}
              onBlur={(e) => this.onBlurLotteryNumberInput(e, idx)}
              onChange={(e) => this.onChangeLotteryNumber(e, idx)}
            />
          ))}
        </div>
        <Button>결과 확인하기</Button>
      </form>
    );
  }
}

WinningNumber.propTypes = {
  onHandleSubmit: PropTypes.func,
  onModalButtonClick: PropTypes.func,
};

export default WinningNumber;
