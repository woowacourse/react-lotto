import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chooseBallColor from '../../utils/color-ball';
import PurchaseNumberItem from '../Receipt/PurchaseNumberItem';
import LotteryBall from '../Receipt/LotteryBall';
import Button from '../@util-components/Button';
import './style.scss';

const Modal = ({
  winningNumber,
  bonusNumber,
  receipt,
  moneyAmount,
  onResetButtonClick,
  onModalClose,
}) => {
  const [totalPrize, setTotalPrize] = useState(0);
  const [earningRate, setEarningRate] = useState(0);

  let tempTotalPrize = 0;

  const countWinningBall = (ticket) => ticket.filter((ball) => winningNumber.includes(ball)).length;

  const countBonusBall = (ticket) => {
    const winningBonusBall = ticket.find((ball) => ball === bonusNumber);

    return winningBonusBall ? 1 : 0;
  };

  const calculateTotalPrize = (prize) => (tempTotalPrize += prize);

  const onClickDimmer = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onModalClose();
    }
  };

  useEffect(() => {
    setTotalPrize(tempTotalPrize);
    setEarningRate(Math.floor(((tempTotalPrize - moneyAmount) / moneyAmount) * 100));
  }, []);

  return (
    <>
      <div className='modal' onClick={onClickDimmer}>
        <div className='modal-inner'>
          <div className='modal-top-spacing'></div>
          <Button customClass='modal-close-button' onClick={onModalClose}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <h1 className='modal-header'>슈퍼 로또</h1>
          <h1 className='modal-sub-header'>당첨 결과 번호</h1>
          <div className='result-numbers-container'>
            {winningNumber.map((number) => (
              <LotteryBall
                key={uuidv4()}
                numberValue={number}
                toggled={true}
                colored={true}
                ballColor={chooseBallColor(number)}
              />
            ))}
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
            {receipt.map((ticket) => (
              <PurchaseNumberItem
                key={uuidv4()}
                bonusNumber={bonusNumber}
                winningNumber={winningNumber}
                ticketNumbers={ticket}
                toggled={true}
                winningBallCount={countWinningBall(ticket)}
                bonusBallCount={countBonusBall(ticket)}
                onCalculateTotalPrize={(prize) => calculateTotalPrize(prize)}
              />
            ))}
            <div className='modal-result-text'>
              <p>{`구입 금액: ${moneyAmount}원`}</p>
              <p>{`총 수익: ${totalPrize}원`}</p>
              <p>{`수익률: ${earningRate}%`}</p>
            </div>
          </div>
          <Button onClick={onResetButtonClick} buttonText='다시 시작하기' />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  winningNumber: PropTypes.array,
  bonusNumber: PropTypes.number,
  receipt: PropTypes.array,
  moneyAmount: PropTypes.number,
  onResetButtonClick: PropTypes.func,
  onModalClose: PropTypes.func,
};

Modal.propTypes = {
  winningNumber: PropTypes.array,
  bonusNumber: PropTypes.number,
  receipt: PropTypes.array,
  moneyAmount: PropTypes.number,
  onResetButtonClick: PropTypes.func,
  onModalClose: PropTypes.func,
};

export default Modal;
