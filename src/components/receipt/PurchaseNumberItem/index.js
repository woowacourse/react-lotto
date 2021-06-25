import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import LotteryBall from '../LotteryBall';
import chooseBallColor from '../../../utils/color-ball';
import calculatePrize from '../../../utils/calculate-prize';
import './style.scss';

const PurchaseNumberItem = ({
  ticketNumbers,
  winningBallCount,
  bonusBallCount,
  winningNumber,
  bonusNumber,
  toggled,
  onCalculateTotalPrize,
}) => {
  return (
    <li className='purchase-number-item'>
      <div className='lottery-balls-container'>
        {ticketNumbers.map((number) => {
          {
            winningBallCount &&
              onCalculateTotalPrize(calculatePrize(winningBallCount, bonusBallCount));
          }
          return (
            <LotteryBall
              colored={winningNumber && [...winningNumber, bonusNumber].includes(number)}
              key={uuidv4()}
              numberValue={number}
              toggled={toggled}
              ballColor={chooseBallColor(number)}
            />
          );
        })}
      </div>
    </li>
  );
};

export default PurchaseNumberItem;
