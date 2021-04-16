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

  calculateRank() {
    switch (this.props.winningBallCount) {
      case 3:
        return RANK.FIFTH;
      case 4:
        return RANK.FOURTH;
      case 5:
        if (this.props.bonusBallCount) {
          return RANK.THIRD;
        }
        return RANK.SECOND;
      case 6:
        return RANK.FIRST;

      default:
        return 0;
    }
  }

  render() {
    const rank = this.calculateRank();
    return (
      <li className='purchase-number-item'>
        {this.props.ticketNumbers.map((number) => (
          <LotteryBall
            colored={
              this.props.winningNumber &&
              [...this.props.winningNumber, this.props.bonusNumber].includes(number)
            }
            key={uuidv4()}
            numberValue={number}
            toggled={this.props.toggled}
          ></LotteryBall>
        ))}
        <>
          {this.props.winningNumber &&
            `${rank ? `${rank}등 ` : ' '}${this.calculatePrize()}원 당첨!`}
        </>
      </li>
    );
  }
}

export default PurchaseNumberItem;
