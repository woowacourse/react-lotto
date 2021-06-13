import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import chooseBallColor from '../../../utils/colorBall';
import LotteryBall from '../LotteryBall';
import './style.scss';

const PurchaseNumberItem = ({ lotteryNumbers, ticketNumbers, toggled }) => {
  const lotteryBallIds = [...Array(ticketNumbers.length)].map(() => uuidv4());

  return (
    <li className='purchase-number-item'>
      <div className='lottery-balls-container'>
        {ticketNumbers.map((number, idx) => (
          <LotteryBall
            colored={
              lotteryNumbers &&
              lotteryNumbers.find((lotteryNumber) => lotteryNumber.value === number)
            }
            key={lotteryBallIds[idx]}
            numberValue={number}
            toggled={toggled}
            ballColor={chooseBallColor(number)}
          />
        ))}
      </div>
    </li>
  );
};

export default PurchaseNumberItem;
