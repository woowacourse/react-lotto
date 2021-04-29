import './css/index.css';
import React, { useState } from 'react';
import { LottoForm } from './components/LottoForm';
import { Modal } from './components/shared';
import { EarningRateSection, LottoResultTable } from './components/LottoResult';
import { LOTTO_VALUE, LOTTO_PRICE } from './constants';
import { getAnnouncementDate } from './utils/lottoUtils';

const initialState = {
  isModalOpened: false,
  isLottoListToggled: false,
  winningCounts: {
    [LOTTO_VALUE.RANK.FIRST]: 0,
    [LOTTO_VALUE.RANK.SECOND]: 0,
    [LOTTO_VALUE.RANK.THIRD]: 0,
    [LOTTO_VALUE.RANK.FOURTH]: 0,
    [LOTTO_VALUE.RANK.FIFTH]: 0,
  },
  lottoCount: 0,
  announcementDate: getAnnouncementDate(),
  winningNumbers: {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    sixth: 0,
  },
  bonusNumber: 0,
  moneyInput: 0,
};

export default function App() {
  const [isModalOpened, setIsModalOpened] = useState(initialState.isModalOpened);
  const [isLottoListToggled, setIsLottoListToggled] = useState(initialState.isLottoListToggled);
  const [winningCounts, setWinningCounts] = useState(initialState.winningCounts);
  const [lottoCount, setLottoCount] = useState(initialState.lottoCount);
  const [announcementDate, setAnnouncementDate] = useState(initialState.announcementDate);
  const [winningNumbers, setWinningNumbers] = useState(initialState.winningNumbers);
  const [bonusNumber, setBonusNumber] = useState(initialState.bonusNumber);
  const [moneyInput, setMoneyInput] = useState(initialState.moneyInput);

  const resetState = () => {
    setIsModalOpened(initialState.isModalOpened);
    setIsLottoListToggled(initialState.isLottoListToggled);
    setWinningCounts(initialState.winningCounts);
    setLottoCount(initialState.lottoCount);
    setAnnouncementDate(initialState.announcementDate);
    setWinningNumbers(initialState.winningNumbers);
    setBonusNumber(initialState.bonusNumber);
    setMoneyInput(initialState.moneyInput);
  };

  const increaseWinningCounts = (rank) => {
    setWinningCounts({
      ...winningCounts,
      [rank]: winningCounts[rank] + 1,
    });
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);

    setWinningCounts(initialState.winningCounts);
  };

  return (
    <div className="app d-flex justify-center items-center">
      <LottoForm
        announcementDate={announcementDate}
        setAnnouncementDate={setAnnouncementDate}
        isModalOpened={isModalOpened}
        isLottoListToggled={isLottoListToggled}
        setIsLottoListToggled={setIsLottoListToggled}
        openModal={openModal}
        moneyInput={moneyInput}
        setMoneyInput={setMoneyInput}
        increaseWinningCounts={increaseWinningCounts}
        setWinningCounts={setWinningCounts}
        lottoCount={lottoCount}
        setLottoCount={setLottoCount}
        winningNumbers={winningNumbers}
        bonusNumber={bonusNumber}
        setWinningNumbers={setWinningNumbers}
        setBonusNumber={setBonusNumber}
      />
      {isModalOpened && (
        <Modal closeModal={closeModal}>
          <LottoResultTable winningCounts={winningCounts} />
          <EarningRateSection paidMoney={lottoCount * LOTTO_PRICE} winningCounts={winningCounts} />
          <button type="button" className="restart-button basic-button mt-5" onClick={resetState}>
            다시 시작하기
          </button>
        </Modal>
      )}
    </div>
  );
}
