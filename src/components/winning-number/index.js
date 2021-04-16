import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NumberInput from '../util-component/number-input/index';
import Button from '../util-component/button/index';
import { BONUS_BALL_LENGTH, LOTTERY_BALL_LENGTH } from '../../constants/number';

class WinningNumber extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {[...Array(LOTTERY_BALL_LENGTH + BONUS_BALL_LENGTH)].map(() => {
          return <NumberInput min='1' max='45' key={uuidv4()} />;
        })}
        <Button buttonText='결과 확인하기'></Button>
      </div>
    );
  }
}

export default WinningNumber;
