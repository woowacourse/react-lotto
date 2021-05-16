import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chooseBallColor from '../../utils/color-ball';
import PurchaseNumberItem from '../Receipt/PurchaseNumberItem';
import LotteryBall from '../Receipt/LotteryBall';
import Button from '../UtilComponent/Button';
import Modal from '../UtilComponent/Modal';
import './style.scss';

class ResultModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrize: 0,
      earningRate: 0,
    };
    this.tempTotalPrize = 0;
    this.winningNumberIds = [...Array(this.props.winningNumber.length)].map(() => uuidv4());
    this.numberItemIds = [...Array(this.props.receipt.length)].map(() => uuidv4());
  }

  countWinningBall(ticket) {
    return ticket.filter((ball) => this.props.winningNumber.includes(ball)).length;
  }

  countBonusBall(ticket) {
    const winningBonusBall = ticket.find((ball) => ball === this.props.bonusNumber);

    return winningBonusBall ? 1 : 0;
  }

  calculateTotalPrize(prize) {
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
      <Modal onModalClose={this.props.onModalClose}>
        <div className='modal-inner'>
          <div className='modal-top-spacing'></div>
          <Button customClass='modal-close-button' onClick={this.props.onModalClose}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <h1 className='modal-header'>슈퍼 로또</h1>
          <h1 className='modal-sub-header'>당첨 결과 번호</h1>
          <div className='result-numbers-container'>
            {this.props.winningNumber.map((number, idx) => (
              <LotteryBall
                key={this.winningNumberIds[idx]}
                numberValue={number}
                toggled={true}
                colored={true}
                ballColor={chooseBallColor(number)}
              />
            ))}
            {
              <div className='plus-icon'>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            }
            {
              <LotteryBall
                numberValue={this.props.bonusNumber}
                toggled={true}
                colored={true}
                ballColor={chooseBallColor(this.props.bonusNumber)}
              />
            }
          </div>
          <div className='modal-numbers-container'>
            {this.props.receipt.map((ticket, idx) => (
              <PurchaseNumberItem
                key={this.numberItemIds[idx]}
                bonusNumber={this.props.bonusNumber}
                winningNumber={this.props.winningNumber}
                ticketNumbers={ticket}
                toggled={true}
                winningBallCount={this.countWinningBall(ticket)}
                bonusBallCount={this.countBonusBall(ticket)}
                onCalculateTotalPrize={(prize) => this.calculateTotalPrize(prize)}
              />
            ))}
            <div className='modal-result-text'>
              <p>{`구입 금액: ${this.props.moneyAmount}원`}</p>
              <p>{`총 수익: ${this.state.totalPrize}원`}</p>
              <p>{`수익률: ${this.state.earningRate}%`}</p>
            </div>
          </div>
          <Button onClick={this.props.onResetButtonClick} buttonText='다시 시작하기' />
        </div>
      </Modal>
    );
  }
}

ResultModal.propTypes = {
  winningNumber: PropTypes.array,
  bonusNumber: PropTypes.number,
  receipt: PropTypes.array,
  moneyAmount: PropTypes.number,
  onResetButtonClick: PropTypes.func,
  onModalClose: PropTypes.func,
};

export default ResultModal;
