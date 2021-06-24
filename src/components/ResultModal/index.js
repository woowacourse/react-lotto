import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LotteryBall from '../shared/LotteryBall';
import PurchaseNumberItem from '../Receipt/PurchaseNumberItem';
import Button from '../common/Button';
import Modal from '../common/Modal';

import { LOTTERY_BALL_LENGTH, LOTTERY_NUMBERS_LENGTH } from '../../constants/number';

import { ModalContext } from '../../contexts/ModalContextProvider';
import { calculateTotalPrize } from './service';
import { chooseBallColor } from '../service';

import './style.scss';

const winningNumberIds = [...Array(LOTTERY_BALL_LENGTH)].map(() => uuidv4());

const ResultModal = ({ tickets, moneyAmount, lotteryNumbers, onResetButtonClick }) => {
  const { closeModal } = useContext(ModalContext);

  const numberItemIds = [...Array(tickets.length)].map(() => uuidv4());

  const bonusNumber = lotteryNumbers[LOTTERY_NUMBERS_LENGTH - 1].value;
  const totalPrize = calculateTotalPrize(tickets, lotteryNumbers, bonusNumber);
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
