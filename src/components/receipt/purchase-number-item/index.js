import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import WinningNumber from '../../winning-number';
import LotteryBall from '../lottery-ball';
import './style.scss';

class PurchaseNumberItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='purchase-number-item'>
        {this.props.ticketNumbers.map((number) => (
          <LotteryBall
            colored={this.props.winningNumber && this.props.winningNumber.includes(number)}
            key={uuidv4()}
            numberValue={number}
            toggled={this.props.toggled}
          ></LotteryBall>
        ))}
      </li>
    );
  }
}

export default PurchaseNumberItem;
