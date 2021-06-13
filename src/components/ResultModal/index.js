import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LotteryBall from '../Receipt/LotteryBall';
import PurchaseNumberItem from '../Receipt/PurchaseNumberItem';
import Button from '../shared/Button';
import Modal from '../shared/Modal';

import {
  LOTTERY_BALL_LENGTH,
  LOTTERY_NUMBERS_LENGTH,
  BONUS_BALL_EXIST,
  BONUS_BALL_NOT_EXIST,
} from '../../constants/number';

import { ModalContext } from '../../contexts/ModalContextProvider';
import calculatePrize from '../../utils/calculatePrize';
import chooseBallColor from '../../utils/colorBall';

import './style.scss';

const ResultModal = ({ tickets, moneyAmount, lotteryNumbers, onResetButtonClick }) => {
  const { closeModal } = useContext(ModalContext);

  const bonusNumber = lotteryNumbers[LOTTERY_NUMBERS_LENGTH - 1].value;
  const winningNumberIds = [...Array(LOTTERY_BALL_LENGTH)].map(() => uuidv4());
  const numberItemIds = [...Array(tickets.length)].map(() => uuidv4());

  const countWinningBall = (ticket) => {
    ticket.filter((ball) => lotteryNumbers.some((number) => number.value === ball)).length;
  };

  const countBonusBall = (ticket) => {
    ticket.find((ball) => ball === lotteryNumbers[LOTTERY_NUMBERS_LENGTH - 1])
      ? BONUS_BALL_EXIST
      : BONUS_BALL_NOT_EXIST;
  };

  const totalPrize = tickets.reduce(
    (sum, currentTicket) =>
      sum + calculatePrize(countWinningBall(currentTicket), countBonusBall(currentTicket)),
    0
  );

  const earningRate = Math.floor(((totalPrize - moneyAmount) / moneyAmount) * 100);

  return (
    <Modal>
      <div className='modal-inner'>
        <div className='modal-top-spacing'></div>
        <Button customClass='modal-close-button' onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
        <h1 className='modal-header'>슈퍼 로또</h1>
        <h1 className='modal-sub-header'>당첨 결과 번호</h1>
        <div className='result-numbers-container'>
          {lotteryNumbers.map(
            ({ value, type }, idx) =>
              type === 'winning' && (
                <LotteryBall
                  key={winningNumberIds[idx]}
                  numberValue={value}
                  isToggled={true}
                  isColored={true}
                  ballColor={chooseBallColor(value)}
                />
              )
          )}
          <div className='plus-icon'>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <LotteryBall
            numberValue={bonusNumber}
            isToggled={true}
            isColored={true}
            ballColor={chooseBallColor(bonusNumber)}
          />
        </div>
        <div className='modal-numbers-container'>
          {tickets.map((ticket, idx) => (
            <PurchaseNumberItem
              key={numberItemIds[idx]}
              lotteryNumbers={lotteryNumbers}
              ticketNumbers={ticket}
              isToggled={true}
            />
          ))}
          <div className='modal-result-text'>
            <p>{`구입 금액: ${moneyAmount}원`}</p>
            <p>{`총 수익: ${totalPrize}원`}</p>
            <p>{`수익률: ${earningRate}%`}</p>
          </div>
        </div>
        <Button onClick={onResetButtonClick}>다시 시작하기</Button>
      </div>
    </Modal>
  );
};

ResultModal.propTypes = {
  lotteryNumbers: PropTypes.array,
  tickets: PropTypes.array,
  moneyAmount: PropTypes.number,
  onResetButtonClick: PropTypes.func,
};

export default ResultModal;
