import './style.scss';

import { LOTTERY_BALL_LENGTH, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from './constants/number';
import React, { useEffect, useState } from 'react';

import Lottie from 'react-lottie';
import LottoBallCanvas from './components/canvas';
import MoneyInput from './components/MoneyInput';
import PurchaseForm from './components/PurchaseForm';
import TimeLeft from './components/TimeLeft';
import { audio } from './utils/audio';
import coinSpin from './animation/coinSpin.json';
import getRandomNumber from './utils/random-number';
import muyahoAudio from './sound/muyaho.mp3';
import { showScroll } from './utils/scroll';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [lotto, setLotto] = useState({ numbers: [], bonus: 0 });
  const [isMoneyInputValid, setIsMoneyInputValid] = useState(false);

  const [moneyAmount, setMoneyAmount] = useState(0);
  const [receipt, setReceipt] = useState([]);

  const handleMoneySubmit = (money) => {
    setIsMoneyInputValid(true);
    setMoneyAmount(money);

    if (isMoneyInputValid) {
      audio.play();
      setIsLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [isLoading]);

  const handleResetButtonClick = () => {
    setIsMoneyInputValid(false);

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

    setReceipt([...Array(ticketCount)].map(makeAutoTicket));
  };

  const handleWinningNumberSubmit = ({ winningNumbers, bonusNumber }) => {
    if (typeof bonusNumber !== 'number') return;
    if (!winningNumbers instanceof Array) return;

    setLotto({ numbers: winningNumbers, bonus: bonusNumber });
  };

  return (
    <>
      <LottoBallCanvas />
      <div className='title'>슈퍼 로또</div>
      <MoneyInput handleMoneySubmit={handleMoneySubmit} makeReceipt={makeReceipt} />

      {isMoneyInputValid && (
        <>
          <TimeLeft />
          <audio controls autoPlay hidden>
            <source src={muyahoAudio} type='audio/mp3' />
          </audio>
        </>
      )}

      {isLoading && (
        <Lottie
          speed={1}
          height='300px'
          width='300px'
          options={{
            animationData: coinSpin,
            loop: false,
          }}
        />
      )}

      {!isLoading && isMoneyInputValid && (
        <PurchaseForm
          lotto={lotto}
          receipt={receipt}
          moneyAmount={moneyAmount}
          handleResetButtonClick={handleResetButtonClick}
          handleWinningNumberSubmit={handleWinningNumberSubmit}
        />
      )}
    </>
  );
};

export default App;
