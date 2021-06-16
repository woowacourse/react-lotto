import React, { useState, useRef } from 'react';
import Modal from './components/Modal';
import MoneyInput from './components/MoneyInput';
import Receipt from './components/Receipt';
import WinningNumber from './components/WinningNumber';
import { LOTTERY_BALL_LENGTH, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from './constants/number';
import getRandomNumber from './utils/random-number';
import LottoBallCanvas from './components/LottoBallCanvas';
import TimeLeft from './components/TimeLeft';
import { hideScroll, showScroll } from './utils/scroll';
import muyahoAudio from './sound/muyaho.mp3';
import Lottie from 'react-lottie';
import coinSpin from './animation/coinSpin.json';
import './style.scss';

const App = () => {
  const [isMoneyInputValid, setIsMoneyInputValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [moneyAmount, setMoneyAmount] = useState(0);
  const [receipt, setReceipt] = useState([]);
  const [lotto, setLotto] = useState({ numbers: [], bonus: 0 });

  const moneyInputRef = useRef(null);
  const bodyRef = useRef(null);
  const audio = new Audio(muyahoAudio);

  const handleMoneySubmit = (money) => {
    setIsMoneyInputValid(true);
    setMoneyAmount(money);

    if (isMoneyInputValid) {
      audio.play();
    }
  };

  const handleWinningNumberSubmit = ({ winningNumbers, bonusNumber }) => {
    if (typeof bonusNumber !== 'number') return;
    if (!winningNumbers instanceof Array) return;

    setLotto({ numbers: winningNumbers, bonus: bonusNumber });
  };

  const handleModalButtonClick = () => {
    setIsModalOpen(true);

    hideScroll();
  };

  const handleResetButtonClick = () => {
    setIsMoneyInputValid(false);
    setIsModalOpen(false);
    resetMoneyForm();

    showScroll();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    showScroll();
  };

  const makeAutoTicket = () => {
    const uniqueTicket = new Set();
    while (uniqueTicket.size !== LOTTERY_BALL_LENGTH) {
      uniqueTicket.add(getRandomNumber(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER));
    }

    return [...uniqueTicket];
  };

  const makeReceipt = (ticketCount) => {
    if (typeof ticketCount !== 'number') return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setReceipt([...Array(ticketCount)].map(makeAutoTicket));
    }, 1000);
  };

  const resetMoneyForm = () => {
    moneyInputRef.current.reset();
    moneyInputRef.current.focus();
  };

  const receiptPage = (
    <>
      <Receipt receipt={receipt} />
      <WinningNumber
        onHandleSubmit={(winningNumbers, bonusNumber) =>
          handleWinningNumberSubmit({ winningNumbers, bonusNumber })
        }
        onModalButtonClick={handleModalButtonClick}
      />
    </>
  );

  const modalPage = (
    <>
      <Modal
        winningNumber={lotto.numbers}
        bonusNumber={lotto.bonus}
        receipt={receipt}
        moneyAmount={moneyAmount}
        onResetButtonClick={handleResetButtonClick}
        onModalClose={handleModalClose}
      />
    </>
  );

  return (
    <div ref={bodyRef}>
      {isMoneyInputValid && (
        <>
          <TimeLeft />
          <audio controls autoPlay hidden>
            <source src={muyahoAudio} type='audio/mp3' />
          </audio>
        </>
      )}
      <LottoBallCanvas />
      <div className='title'>슈퍼 로또</div>
      <MoneyInput
        moneyInputRef={moneyInputRef}
        onHandleSubmit={(money, ticketCount) => {
          handleMoneySubmit(money);
          makeReceipt(ticketCount);
        }}
      />
      {isLoading ? (
        <Lottie
          speed={1}
          height='300px'
          width='300px'
          options={{
            animationData: coinSpin,
            loop: false,
          }}
        />
      ) : (
        !isLoading && (
          <>
            {isMoneyInputValid && receiptPage}
            {isModalOpen && modalPage}
          </>
        )
      )}
    </div>
  );
};

export default App;
