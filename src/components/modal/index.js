import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PurchaseNumberItem from '../receipt/purchase-number-item';
import './style.scss';
class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  countWinningBall(ticket) {
    return ticket.filter((ball) => this.props.winningNumber.includes(ball)).length;
  }

  countBonusBall(ticket) {
    const winningBonusBall = ticket.find((ball) => ball === this.props.bonusNumber);
    return winningBonusBall && winningBonusBall.length;
  }

  render() {
    return (
      <>
        <div className='modal'>
          <div className='modal-inner'>
            <h1>결과 확인하기</h1>
            {this.props.winningNumber}
            {this.props.receipt.map((ticket) => (
              <PurchaseNumberItem
                key={uuidv4()}
                bonusNumber={this.props.bonusNumber}
                winningNumber={this.props.winningNumber}
                ticketNumbers={ticket}
                toggled={true}
                winningBallCount={this.countWinningBall(ticket)}
                bonusBallCount={this.countBonusBall(ticket)}
              ></PurchaseNumberItem>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
