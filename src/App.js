import React, { useContext, useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';

import LottoBallCanvas from './components/LottoBallCanvas';
import MoneyInput from './components/MoneyInput';
import Receipt from './components/Receipt';
import ResultModal from './components/ResultModal';
import TimeLeft from './components/TimeLeft';
import WinningNumber from './components/WinningNumber';

import getRandomNumber from './utils/randomNumber';
import coinSpin from './animation/coinSpin.json';
import muyahoAudio from './sound/muyaho.mp3';
import {
  LOTTERY_BALL_LENGTH,
  LOTTERY_NUMBERS_LENGTH,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
  ANIMATION,
} from './constants/number';

import { ModalContext } from './contexts/ModalContextProvider';

import './style.scss';

const App = () => {
  const [isMoneyInputValid, setIsMoneyInputValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [moneyAmount, setMoneyAmount] = useState(0);
  const [tickets, setTickets] = useState([]);
  const [lotteryNumbers, setLotteryNumbers] = useState([]);

  const { isModalOpen, closeModal } = useContext(ModalContext);

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

  const handleResetButtonClick = () => {
    setIsMoneyInputValid(false);
    closeModal();

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const makeAutoTicket = () => {
    const uniqueTicket = new Set();
    while (uniqueTicket.size !== LOTTERY_BALL_LENGTH) {
      uniqueTicket.add(getRandomNumber(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER));
    }

    return [...uniqueTicket];
  };

  const makeTickets = (ticketCount) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setTickets([...Array(ticketCount)].map(() => makeAutoTicket()));
    }, ANIMATION.DELAY);
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
          makeTickets(ticketCount);
        }}
      />
      {isLoading ? (
        <Lottie
          speed={ANIMATION.SPEED}
          height={`${ANIMATION.SIZE}px`}
          width={`${ANIMATION.SIZE}px`}
          options={{
            animationData: coinSpin,
            loop: false,
          }}
        />
      ) : (
        <>
          {isMoneyInputValid && (
            <>
              <Receipt tickets={tickets} />
              <WinningNumber
                lotteryNumbers={lotteryNumbers}
                onChangeLotteryNumbers={setLotteryNumbers}
                ref={winningInputRefs}
              />
            </>
          )}
          {isModalOpen && (
            <ResultModal
              lotteryNumbers={lotteryNumbers}
              tickets={tickets}
              moneyAmount={moneyAmount}
              onResetButtonClick={handleResetButtonClick}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
