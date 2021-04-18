import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PRIZE, RANK } from '../../../constants/number';
import LotteryBall from '../lottery-ball';
import './style.scss';

class PurchaseNumberItem extends React.Component {
  constructor(props) {
    super(props);
  }

  calculatePrize() {
    switch (this.props.winningBallCount) {
      case 3:
        return PRIZE.FIFTH;

      case 4:
        return PRIZE.FOURTH;

      case 5:
        if (this.props.bonusBallCount) {
          return PRIZE.SECOND;
        }

        return PRIZE.THIRD;

      case 6:
        return PRIZE.FIRST;

      default:
        return 0;
    }
  }

  render() {
    return (
      <>
        <li className='purchase-number-item'>
          <div className='lottery-balls-container'>
            {this.props.ticketNumbers.map((number) => {
              {
                this.props.winningBallCount &&
                  this.props.onCalculateTotalPrize(this.calculatePrize());
              }
              return (
                <LotteryBall
                  colored={
                    this.props.winningNumber &&
                    [...this.props.winningNumber, this.props.bonusNumber].includes(number)
                  }
                  key={uuidv4()}
                  numberValue={number}
                  toggled={this.props.toggled}
                ></LotteryBall>
              );
            })}
          </div>
        </li>
      </>
    );
  }
}

export default PurchaseNumberItem;
