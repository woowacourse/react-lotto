import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LOTTERY_BALL_LENGTH, LOTTERY_NUMBERS_LENGTH } from '../../constants/number';
import calculatePrize from '../../utils/calculate-prize';
import chooseBallColor from '../../utils/color-ball';
import LotteryBall from '../Receipt/LotteryBall';
import PurchaseNumberItem from '../Receipt/PurchaseNumberItem';
import Button from '../UtilComponent/Button';
import Modal from '../UtilComponent/Modal';
import './style.scss';
class ResultModal extends React.Component {
  constructor(props) {
    super(props);
    this.totalPrize = this.props.receipt.reduce((sum, currentTicket) => {
      const winningCount = this.countWinningBall(currentTicket);
      const bonusCount = this.countBonusBall(currentTicket);
      return sum + calculatePrize(winningCount, bonusCount);
    }, 0);
    this.earningRate = Math.floor(
      ((this.totalPrize - this.props.moneyAmount) / this.props.moneyAmount) * 100
    );
    this.winningNumberIds = [...Array(LOTTERY_BALL_LENGTH)].map(() => uuidv4());
    this.numberItemIds = [...Array(this.props.receipt.length)].map(() => uuidv4());
  }

  countWinningBall(ticket) {
    return ticket.filter((ball) =>
      this.props.lotteryNumbers.some((number) => number.value === ball)
    ).length;
  }

  countBonusBall(ticket) {
    const winningBonusBall = ticket.find(
      (ball) => ball === this.props.lotteryNumbers[LOTTERY_NUMBERS_LENGTH - 1]
    );

    return winningBonusBall ? 1 : 0;
  }

  render() {
    const bonusNumber = this.props.lotteryNumbers[LOTTERY_NUMBERS_LENGTH - 1].value;

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
            {this.props.lotteryNumbers.map(
              ({ value, type }, idx) =>
                type === 'winning' && (
                  <LotteryBall
                    key={this.winningNumberIds[idx]}
                    numberValue={value}
                    toggled={true}
                    colored={true}
                    ballColor={chooseBallColor(value)}
                  />
                )
            )}
            <div className='plus-icon'>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <LotteryBall
              numberValue={bonusNumber}
              toggled={true}
              colored={true}
              ballColor={chooseBallColor(bonusNumber)}
            />
          </div>
          <div className='modal-numbers-container'>
            {this.props.receipt.map((ticket, idx) => (
              <PurchaseNumberItem
                key={this.numberItemIds[idx]}
                lotteryNumbers={this.props.lotteryNumbers}
                ticketNumbers={ticket}
                toggled={true}
              />
            ))}
            <div className='modal-result-text'>
              <p>{`구입 금액: ${this.props.moneyAmount}원`}</p>
              <p>{`총 수익: ${this.totalPrize}원`}</p>
              <p>{`수익률: ${this.earningRate}%`}</p>
            </div>
          </div>
          <Button onClick={this.props.onResetButtonClick}>다시 시작하기</Button>
        </div>
      </Modal>
    );
  }
}

ResultModal.propTypes = {
  lotteryNumbers: PropTypes.array,
  receipt: PropTypes.array,
  moneyAmount: PropTypes.number,
  onResetButtonClick: PropTypes.func,
  onModalClose: PropTypes.func,
};

export default ResultModal;
