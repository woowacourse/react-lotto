import React, { useState } from "react";
import { LotteryMachine, ProfitCalculator } from "../services";
import { LOTTERY } from "../utils";
import LotteriesDetail from "../components/LotteriesDetail";
import PaymentForm from "../components/PaymentForm";
import WinningNumbersForm from "../components/WinningNumbersForm";
import Modal from "../components/Modal";
import WinningResult from "../components/WinningResult";
import CountDown from "../components/CountDown";
import { LOTTO_RESULT_COUNT_DOWN } from "../utils/constants";

const App = () => {
  const lotteryMachine = new LotteryMachine();
  const profitCalculator = new ProfitCalculator();

  const [lotteries, setLotteries] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState([]);
  const [bonusNumber, setBonusNumber] = useState([]);

  const [winningResult, setWinningResult] = useState(null);

  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isCountDownVisible, setIsCountDownVisible] = useState(false);

  const resetApp = () => {
    setLotteries([]);
    setWinningResult(null);
    setIsResultModalOpen(false);
    setWinningNumbers([]);
    setBonusNumber(null);
    setIsCountDownVisible(false);
  };

  const onMoneySubmit = (money) => {
    const lotteries = lotteryMachine.publishLotteries(money);

    setLotteries(lotteries);
  };

  const isValidPayment = (value) => {
    if (value <= 0) {
      return false;
    }

    if (value % LOTTERY.PRICE !== 0) {
      return false;
    }

    return true;
  };

  const onWinningNumberSubmit = (winningNumbers, bonusNumber) => {
    if (winningResult) {
      setIsResultModalOpen(true);
      return;
    }

    setWinningNumbers(winningNumbers);
    setBonusNumber(bonusNumber);
    setIsCountDownVisible(true);
  };

  const announceResult = () => {
    const rankCount = profitCalculator.getRankCount({
      winningNumbers,
      bonusNumber,
      lotteries,
    });
    const earningRate = profitCalculator.getEarningRate(rankCount, lotteries);

    setWinningResult({ rankCount, earningRate });
    setIsResultModalOpen(true);
  };

  const closeResultModal = () => {
    setIsResultModalOpen(false);
  };

  return (
    <div id="app" className="d-flex justify-center mt-5">
      <div className="w-100">
        <h1 className="text-center">🎱 행운의 로또</h1>
        <PaymentForm
          isDisabled={lotteries.length !== 0}
          onMoneySubmit={onMoneySubmit}
          isValidPayment={isValidPayment}
          paymentMinUnit={LOTTERY.PRICE}
        />
        {lotteries.length > 0 && (
          <>
            <LotteriesDetail lotteries={lotteries} />
            <WinningNumbersForm onWinningNumberSubmit={onWinningNumberSubmit} />
          </>
        )}
        {isCountDownVisible && (
          <CountDown
            initialTimeBySecond={LOTTO_RESULT_COUNT_DOWN}
            onCountDownEnded={announceResult}
          >
            <h2>🎉 로또 결과가 곧 발표됩니다! 🎉</h2>
          </CountDown>
        )}

        <Modal isModalOpen={isResultModalOpen} closeModal={closeResultModal}>
          {isResultModalOpen && (
            <WinningResult winningResult={winningResult} resetApp={resetApp} />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default App;
