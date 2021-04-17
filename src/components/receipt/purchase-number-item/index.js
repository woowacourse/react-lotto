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
    let prize = 0;
    switch (this.props.winningBallCount) {
      case 3:
        prize = PRIZE.FIFTH;
        break;
      case 4:
        prize = PRIZE.FOURTH;
        break;
      case 5:
        if (this.props.bonusBallCount) {
          prize = PRIZE.SECOND;
          break;
        }
        prize = PRIZE.THIRD;
        break;
      case 6:
        prize = PRIZE.FIRST;
        break;

      default:
        prize = 0;
    }

    this.props.onCalculateTotalPrize(prize);
    return prize;
  }

  calculateRank() {
    switch (this.props.winningBallCount) {
      case 3:
        return RANK.FIFTH;
      case 4:
        return RANK.FOURTH;
      case 5:
        if (this.props.bonusBallCount) {
          return RANK.SECOND;
        }
        return RANK.THIRD;
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
