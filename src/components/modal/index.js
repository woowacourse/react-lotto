import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PurchaseNumberItem from '../receipt/purchase-number-item';
import LotteryBall from '../receipt/lottery-ball';
import Button from '../util-component/button';
import './style.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrize: 0,
      earningRate: 0,
    };
    this.tempTotalPrize = 0;
  }

  countWinningBall(ticket) {
    return ticket.filter((ball) => this.props.winningNumber.includes(ball)).length;
  }

  countBonusBall(ticket) {
    const winningBonusBall = ticket.find((ball) => ball === this.props.bonusNumber);

    return winningBonusBall ? 1 : 0;
  }

  calculateTotalPrize(prize) {
    console.log(prize);
    this.tempTotalPrize = this.tempTotalPrize + prize;
  }

  componentDidMount() {
    this.setState({
      totalPrize: this.tempTotalPrize,
      earningRate: Math.floor(
        ((this.tempTotalPrize - this.props.moneyAmount) / this.props.moneyAmount) * 100
      ),
    });
  }

  render() {
    return (
      <>
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-top-spacing'></div>
            <Button customClass='modal-close-button' onClick={this.props.onModalCloseButtonClick}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
            <h1 className='modal-header'>슈퍼 로또</h1>
            <h1 className='modal-sub-header'>당첨 결과 번호</h1>
            <div className='result-numbers-container'>
              {this.props.winningNumber.map((number) => (
                <LotteryBall key={uuidv4()} numberValue={number} toggled={true}></LotteryBall>
              ))}
              {
                <div className='plus-icon'>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              }
              {<LotteryBall numberValue={this.props.bonusNumber} toggled={true}></LotteryBall>}
            </div>
            <div className='modal-numbers-container'>
              {this.props.receipt.map((ticket) => (
                <PurchaseNumberItem
                  key={uuidv4()}
                  bonusNumber={this.props.bonusNumber}
                  winningNumber={this.props.winningNumber}
                  ticketNumbers={ticket}
                  toggled={true}
                  winningBallCount={this.countWinningBall(ticket)}
                  bonusBallCount={this.countBonusBall(ticket)}
                  onCalculateTotalPrize={(prize) => this.calculateTotalPrize(prize)}
                ></PurchaseNumberItem>
              ))}
              <div className='modal-result-text'>
                <p>{`구입 금액: ${this.props.moneyAmount}원`}</p>
                <p>{`총 수익: ${this.state.totalPrize}원`}</p>
                <p>{`수익률: ${this.state.earningRate}%`}</p>
              </div>
            </div>
            <Button onClick={this.props.onResetButtonClick} buttonText='다시 시작하기'></Button>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
