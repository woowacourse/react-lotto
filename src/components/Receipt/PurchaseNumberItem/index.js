import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import LotteryBall from '../../shared/LotteryBall';

import { chooseBallColor } from '../../service';

import './style.scss';

const PurchaseNumberItem = ({ lotteryNumbers, ticketNumbers, isToggled }) => {
  const lotteryBallIds = [...Array(ticketNumbers.length)].map(() => uuidv4());

  return (
    <li className='purchase-number-item'>
      <div className='lottery-balls-container'>
        {ticketNumbers.map((number, idx) => (
          <LotteryBall
            key={lotteryBallIds[idx]}
            isColored={
              lotteryNumbers &&
              lotteryNumbers.find((lotteryNumber) => lotteryNumber.value === number)
            }
            isToggled={isToggled}
            numberValue={number}
            ballColor={chooseBallColor(number)}
          />
        ))}
      </div>
    </li>
  );
};

export default PurchaseNumberItem;
