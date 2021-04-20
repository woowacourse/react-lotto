import React, { useState } from 'react';
import { getWinningResult } from '../services';
import {
  PaymentForm,
  LotteriesDetail,
  WinningNumbersForm,
  WinningResultModal,
} from './lotto';
import {
  getRandomNumbers,
  hasDuplicatedNumber,
  idMaker,
  LOTTERY,
  MESSAGE,
} from '../utils';
import { Lottery } from '../models';

function App() {
  const [money, setMoney] = useState(null);
  const [lotteries, setLotteries] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState(
    Array(LOTTERY.NUMBER_COUNT).fill(null)
  );
  const [bonusNumber, setBonusNumber] = useState(null);
  const [winningResult, setWinningResult] = useState(null);
  const [isResultModalOpen, setResultModalOpen] = useState(false);

  function handlePaymentChange(payment) {
    setMoney(payment);
    checkValidPayment(payment);
  }

  function handlePaymentSubmit() {
    try {
      checkValidPayment(money);
      publishLotteries(money);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  function publishLotteries(money) {
    const lotteryAmount = money / LOTTERY.PRICE;
    const lotteries = Array(lotteryAmount)
      .fill(0)
      .map(() => {
        const id = idMaker.next().value;
        const numbers = getRandomNumbers({
          min: LOTTERY.MIN_NUMBER,
          max: LOTTERY.MAX_NUMBER,
          size: LOTTERY.NUMBER_COUNT,
        });

        return new Lottery(id, numbers);
      });

    setLotteries(lotteries);
  }

  function checkValidPayment(money) {
    try {
      if (!(money > 0 && money % LOTTERY.PRICE === 0)) {
        throw new Error(MESSAGE.PAYMENT_FORM.INVALID_PAYMENT);
      }
    } catch {
      throw new Error(MESSAGE.PAYMENT_FORM.INVALID_PAYMENT);
    }
  }

  function handleWinningNumberChange(event) {
    const targetIndex = Number(event.target.dataset.index);
    const newNumber = Number(event.target.value);

    if (Number.isNaN(targetIndex)) {
      console.error('Invalid targetIndex.');

      return;
    }

    const newWinningNumbers = winningNumbers.map((number, index) => {
      return index !== targetIndex ? number : newNumber;
    });

    setWinningNumbers(newWinningNumbers);
  }

  function handleBonusNumberChange(event) {
    const newBonusNumber = Number(event.target.value);

    setBonusNumber(newBonusNumber);
  }

  function handleWinningNumbersSubmit() {
    const inputNumbers = [...winningNumbers, bonusNumber];

    try {
      checkValidWinningInputs(inputNumbers);

      const winningResult = getWinningResult({
        winningNumbers,
        bonusNumber,
        lotteries,
      });

      setWinningResult(winningResult);
      setResultModalOpen(true);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  function checkValidWinningInputs(inputNumbers) {
    if (!inputNumbers.every(number => typeof number === 'number')) {
      throw new Error(MESSAGE.WINNING_NUMBERS_FORM.HAS_INVALID_TYPE);
    }
    if (hasDuplicatedNumber(inputNumbers)) {
      throw new Error(MESSAGE.WINNING_NUMBERS_FORM.HAS_DUPLICATED_NUMBER);
    }
  }

  function closeResultModal() {
    setResultModalOpen(false);
  }

  function resetApp() {
    setMoney(null);
    setLotteries([]);
    setWinningNumbers(Array(LOTTERY.NUMBER_COUNT).fill(null));
    setBonusNumber(null);
    setWinningResult(null);
    setResultModalOpen(false);
  }

  return (
    <div id="app" className="d-flex justify-center mt-5">
      <div className="w-100">
        <h1 className="text-center">🎱 행운의 로또</h1>
        <PaymentForm
          money={money}
          onSubmit={handlePaymentSubmit}
          onInputChange={handlePaymentChange}
        />
        {lotteries.length > 0 && (
          <>
            <LotteriesDetail lotteries={lotteries} />
            <WinningNumbersForm
              onWinningNumberChange={handleWinningNumberChange}
              onBonusNumberChange={handleBonusNumberChange}
              onSubmit={handleWinningNumbersSubmit}
            />
          </>
        )}
        {winningResult && (
          <WinningResultModal
            winningResult={winningResult}
            isModalOpen={isResultModalOpen}
            closeModal={closeResultModal}
            resetApp={resetApp}
          />
        )}
      </div>
    </div>
  );
}

export default App;
