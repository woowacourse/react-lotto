import React, { createContext, useState } from 'react';
import {
  DEFAULT_LOTTO_NUMBER,
  LOTTERY_BALL_LENGTH,
  LOTTERY_NUMBERS_LENGTH,
} from '../constants/number';
import { LOTTERY_NUMBER_TYPE } from '../constants/type';

const LotteryNumbersContext = createContext();

const LotteryNumbersContextProvider = ({ children }) => {
  const [lotteryNumbers, setLotteryNumbers] = useState([]);

  const resetLotteryNumbers = () => {
    setLotteryNumbers(
      [...Array(LOTTERY_NUMBERS_LENGTH)].map((_, idx) => ({
        value: DEFAULT_LOTTO_NUMBER,
        type: idx < LOTTERY_BALL_LENGTH ? LOTTERY_NUMBER_TYPE.WINNING : LOTTERY_NUMBER_TYPE.BONUS,
      }))
    );
  };

  return (
    <LotteryNumbersContext.Provider
      value={{ lotteryNumbers, setLotteryNumbers, resetLotteryNumbers }}
    >
      {children}
    </LotteryNumbersContext.Provider>
  );
};

export default LotteryNumbersContextProvider;
export { LotteryNumbersContext };
