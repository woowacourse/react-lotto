import React, { useContext, useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';

import LottoBallCanvas from './components/LottoBallCanvas';
import MoneyInput from './components/MoneyInput';
import Receipt from './components/Receipt';
import ResultModal from './components/ResultModal';
import AnnounceDateIndicator from './components/AnnounceDateIndicator';
import WinningNumber from './components/WinningNumber';

import coinSpin from './animation/coinSpin.json';
import muyahoAudio from './sound/muyaho.mp3';
import { LOTTERY_NUMBERS_LENGTH, ANIMATION } from './constants/number';
import { makeAutoTicket } from './service';

import { ModalContext } from './contexts/ModalContextProvider';
import { LotteryNumbersContext } from './contexts/LotteryNumbersContextProvider';

import './style.scss';
import { TicketsContext } from './contexts/TicketsContextProvider';

const App = () => {
  const [isMoneyInputValid, setIsMoneyInputValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [moneyAmount, setMoneyAmount] = useState(0);

  const { setTickets } = useContext(TicketsContext);
  const { resetLotteryNumbers } = useContext(LotteryNumbersContext);
  const { isModalOpen, closeModal } = useContext(ModalContext);

  const audio = new Audio(muyahoAudio);
  const inputRef = useRef();
  const winningInputRefs = useRef(
    [...Array(LOTTERY_NUMBERS_LENGTH)].map((ref, idx) => (ref = React.createRef()))
  );

  useEffect(() => {
    resetLotteryNumbers();
  }, []);

  const handleMoneySubmit = (money) => {
    setIsMoneyInputValid(true);
    setMoneyAmount(money);

    if (isMoneyInputValid) {
      audio.play();
    }
  };

  const handleResetButtonClick = () => {
    resetLotteryNumbers();
    setIsMoneyInputValid(false);
    closeModal();

    inputRef.current.value = '';
    inputRef.current.focus();
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
          <AnnounceDateIndicator />
          <audio controls autoPlay hidden>
            <source src={muyahoAudio} type='audio/mp3' />
          </audio>
        </>
      )}
      <LottoBallCanvas />
      <div className='title'>슈퍼 로또</div>
      <MoneyInput
        ref={inputRef}
        onSubmit={(money, ticketCount) => {
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
              <Receipt />
              <WinningNumber ref={winningInputRefs} />
            </>
          )}
          {isModalOpen && (
            <ResultModal moneyAmount={moneyAmount} onResetButtonClick={handleResetButtonClick} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
