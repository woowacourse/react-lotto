import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import coinSpin from './animation/coinSpin.json';
import LottoBallCanvas from './components/LottoBallCanvas';
import MoneyInput from './components/MoneyInput';
import Receipt from './components/Receipt';
import ResultModal from './components/ResultModal';
import TimeLeft from './components/TimeLeft';
import WinningNumber from './components/WinningNumber';
import {
  LOTTERY_BALL_LENGTH,
  LOTTERY_NUMBERS_LENGTH,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
} from './constants/number';
import muyahoAudio from './sound/muyaho.mp3';
import './style.scss';
import getRandomNumber from './utils/randomNumber';
import { hideScroll, showScroll } from './utils/scroll';

const App = () => {
  const [isMoneyInputValid, setIsMoneyInputValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [moneyAmount, setMoneyAmount] = useState(0);
  const [receipt, setReceipt] = useState([]);
  const [lotteryNumbers, setLotteryNumbers] = useState([]);

  const audio = new Audio(muyahoAudio);
  const inputRef = useRef();
  const winningInputRefs = useRef([]);
  winningInputRefs.current = [...Array(LOTTERY_NUMBERS_LENGTH)].map(
    (ref, idx) => (winningInputRefs.current[idx] = React.createRef())
  );

  useEffect(() => {
    setLotteryNumbers(
      [...Array(LOTTERY_NUMBERS_LENGTH)].map((_, idx) => ({
        value: 0,
        type: idx < LOTTERY_BALL_LENGTH ? 'winning' : 'bonus',
      }))
    );
  }, []);

  const handleMoneySubmit = (money) => {
    setIsMoneyInputValid(true);
    setMoneyAmount(money);

    if (isMoneyInputValid) {
      audio.play();
    }
  };

  const handleLotteryNumberSubmit = (lotteryNumbers) => {
    console.log(lotteryNumbers);
    setLotteryNumbers(lotteryNumbers);
  };

  const handleModalButtonClick = () => {
    setIsModalOpen(true);
    hideScroll('modal-opened');
  };

  const handleResetButtonClick = () => {
    setIsMoneyInputValid(false);
    setIsModalOpen(false);

    inputRef.current.value = '';
    inputRef.current.focus();
    showScroll('modal-opened');
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    showScroll('modal-opened');
  };

  const makeAutoTicket = () => {
    const uniqueTicket = new Set();
    while (uniqueTicket.size !== LOTTERY_BALL_LENGTH) {
      uniqueTicket.add(getRandomNumber(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER));
    }

    return [...uniqueTicket];
  };

  const makeReceipt = (ticketCount) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setReceipt([...Array(ticketCount)].map(() => makeAutoTicket()));
    }, 1000);
  };

  return (
    <div>
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
        ref={inputRef}
        onHandleSubmit={(money, ticketCount) => {
          handleMoneySubmit(money);
          makeReceipt(ticketCount);
        }}
      />
      {isLoading ? (
        <Lottie
          speed={1}
          height={'300px'}
          width={'300px'}
          options={{
            animationData: coinSpin,
            loop: false,
          }}
        />
      ) : (
        <>
          {isMoneyInputValid && (
            <>
              <Receipt receipt={receipt} />
              <WinningNumber
                lotteryNumbers={lotteryNumbers}
                onHandleChangeLotteryNumbers={handleLotteryNumberSubmit}
                onModalButtonClick={handleModalButtonClick}
                ref={winningInputRefs}
              />
            </>
          )}
          {isModalOpen && (
            <ResultModal
              lotteryNumbers={lotteryNumbers}
              receipt={receipt}
              moneyAmount={moneyAmount}
              onResetButtonClick={handleResetButtonClick}
              onModalClose={handleModalClose}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
