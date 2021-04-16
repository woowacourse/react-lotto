import React from 'react';
import LotteryBall from '../lottery-ball';
import './style.scss';

class PurchaseNumberItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ticket = [1, 2, 3, 4, 5, 6, 7];
    return (
      <li className='purchase-number-item'>
        {ticket.map((number, idx) => (
          <LotteryBall key={idx} numberValue={number} toggled={this.props.toggled}></LotteryBall>
        ))}
      </li>
    );
  }
}

export default PurchaseNumberItem;
