import './index.css';
import './css/index.css';
import React, { useState } from 'react';
import { Main } from './components/Main/index';
import { LottoResultModal } from './components/Modal/index';
import { LOTTO_VALUE, LOTTO_PRICE } from './constants';
import { getAnnouncementDate } from './utils/lottoUtils';

export default function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [winningCounts, setWinningCounts] = useState({
    [LOTTO_VALUE.RANK.FIRST]: 0,
    [LOTTO_VALUE.RANK.SECOND]: 0,
    [LOTTO_VALUE.RANK.THIRD]: 0,
    [LOTTO_VALUE.RANK.FOURTH]: 0,
    [LOTTO_VALUE.RANK.FIFTH]: 0,
  });
  const [lottoCount, setLottoCount] = useState(0);
  const [mainComponentKey, setMainComponentKey] = useState(new Date());
  const [announcementDate, setAnnouncementDate] = useState(getAnnouncementDate());

  const resetState = () => {
    setIsModalOpened(false);
    setWinningCounts({
      [LOTTO_VALUE.RANK.FIRST]: 0,
      [LOTTO_VALUE.RANK.SECOND]: 0,
      [LOTTO_VALUE.RANK.THIRD]: 0,
      [LOTTO_VALUE.RANK.FOURTH]: 0,
      [LOTTO_VALUE.RANK.FIFTH]: 0,
    });
    setLottoCount(0);
    setMainComponentKey(new Date());
    setAnnouncementDate(getAnnouncementDate());
  };

  const increaseWinningCounts = (rank) => {
    setWinningCounts({ ...winningCounts, [rank]: winningCounts[rank] + 1 });
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);

    setWinningCounts({
      [LOTTO_VALUE.RANK.FIRST]: 0,
      [LOTTO_VALUE.RANK.SECOND]: 0,
      [LOTTO_VALUE.RANK.THIRD]: 0,
      [LOTTO_VALUE.RANK.FOURTH]: 0,
      [LOTTO_VALUE.RANK.FIFTH]: 0,
    });
  };

  return (
    <div className="app d-flex justify-center items-center">
      <Main
        announcementDate={announcementDate}
        setAnnouncementDate={setAnnouncementDate}
        isModalOpened={isModalOpened}
        openModal={openModal}
        increaseWinningCounts={increaseWinningCounts}
        setWinningCounts={setWinningCounts}
        lottoCount={lottoCount}
        setLottoCount={setLottoCount}
        key={mainComponentKey}
      />
      {isModalOpened && (
        <LottoResultModal
          closeModal={closeModal}
          winningCounts={winningCounts}
          paidMoney={lottoCount * LOTTO_PRICE}
          resetAllState={resetState}
        />
      )}
    </div>
  );
}
