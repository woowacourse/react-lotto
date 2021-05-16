import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BONUS_BALL_LENGTH, LOTTERY_BALL_LENGTH } from '../../constants/number';
import Button from '../UtilComponent/Button/index';
import NumberInput from '../UtilComponent/NumberInput/index';
import './style.scss';

class WinningNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winningNumberInputs: [...Array(LOTTERY_BALL_LENGTH + BONUS_BALL_LENGTH)].map(() => ({
        value: 0,
        id: uuidv4(),
      })),
    };
    [...Array(LOTTERY_BALL_LENGTH + BONUS_BALL_LENGTH).fill(0)].forEach((_, idx) => {
      this[`inputRef${idx}`] = React.createRef();
    });
  }

  componentDidMount() {
    this.inputRef0.current.focus();
  }

  onWinningNumberSubmit(e) {
    e.preventDefault();
    const winningNumbers = [];
    [...Array(LOTTERY_BALL_LENGTH).fill(0)].forEach((_, idx) => {
      winningNumbers.push(Number(this[`inputRef${idx}`].current.value));
    });

    const bonusNumber = Number(this.inputRef6.current.value);

    this.props.onHandleSubmit(winningNumbers, bonusNumber);
    this.props.onModalButtonClick();
  }

  isInputValueExist(inputValue) {
    return !!inputValue;
  }

  isInputValueDuplicated({ winningNumberInputs }, inputValue, index) {
    const idx = winningNumberInputs.findIndex((el) => el.value === inputValue);
    return idx !== -1 && idx !== index;
  }

  onChangeWinningNumber(e, index) {
    const inputValue = Number(e.target.value);
    const newWinningNumberInputs = [...this.state.winningNumberInputs];
    newWinningNumberInputs[index].value = inputValue;

    if (!this.isInputValueExist(inputValue)) return;

    if (this.isInputValueDuplicated(this.state, inputValue, index)) {
      alert('입력값이 중복되었습니다.');
      e.target.value = '';
      e.target.focus();
      return;
    }

    this.setState({
      winningNumberInputs: newWinningNumberInputs,
    });
  }

  onChangeInputNumber(e, index) {
    let inputValue = e.target.value;
    const newWinningNumberInputs = [...this.state.winningNumberInputs];

    if (inputValue.length > 2) {
      inputValue = inputValue.slice(0, 2);
      console.log(inputValue);
    }

    newWinningNumberInputs.splice(index, 1, {
      value: Number(inputValue),
      id: this.state.winningNumberInputs[index].id,
    });
    // 숫자를 2자리로 잘르는 게 안되고있음.

    console.log(newWinningNumberInputs);

    this.setState({
      winningNumberInputs: newWinningNumberInputs,
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.onWinningNumberSubmit(e)}>
        <div className='winning-number-form'>
          {[...this.state.winningNumberInputs].map(({ value, id }, index) => (
            <NumberInput
              min='1'
              max='45'
              key={id}
              ref={this[`inputRef${index}`]}
              customClass={
                index < this.state.winningNumberInputs.length - 1
                  ? 'winning-number'
                  : 'bonus-number'
              }
              defaultValue={value || ''}
              onBlur={(e) => this.onChangeWinningNumber(e, index)}
              onChange={(e) => this.onChangeInputNumber(e, index)}
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
