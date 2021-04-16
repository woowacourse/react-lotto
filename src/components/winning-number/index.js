import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NumberInput from '../util-component/number-input/index';
import Button from '../util-component/button/index';
import { LOTTERY_BALL_LENGTH } from '../../constants/number';

class WinningNumber extends React.Component {
  constructor(props) {
    super(props);
  }

  onWinningNumberSubmit(e) {
    e.preventDefault();

    // TODO: 깔끔한 방법 찾기
    const winningNumbers = [];
    e.target
      .querySelectorAll('.winning-number')
      .forEach((winningNumberInput) => winningNumbers.push(Number(winningNumberInput.value)));
    const bonusNumber = Number(e.target.querySelector('.bonus-number').value);

    this.props.onHandleSubmit(winningNumbers, bonusNumber);
    this.props.onModalButtonClick();
  }

  render() {
    return (
      <form onSubmit={(e) => this.onWinningNumberSubmit(e)}>
        {[...Array(LOTTERY_BALL_LENGTH)].map(() => {
          return <NumberInput min='1' max='45' key={uuidv4()} customClass={'winning-number'} />;
        })}
        <NumberInput min='1' max='45' key={uuidv4()} customClass={'bonus-number'} />
        <Button buttonText='결과 확인하기'></Button>
      </form>
    );
  }
}

export default WinningNumber;
