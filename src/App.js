import './css/index.css';
import React, { useEffect, useState } from 'react';
import { LottoForm } from './components/LottoForm';
import { Modal } from './components/shared';
import { EarningRateSection, LottoResultTable } from './components/LottoResult';
import { LOTTO_VALUE, LOTTO_PRICE } from './constants';
import { getAnnouncementDate } from './utils/lottoUtils';
import { getRandomNumberArray } from './utils';
import idGenerator from './utils/idGenerator';

const initialState = {
  isModalOpened: false,
  isLottoListToggled: false,

  lottoItems: [],
  lottoInformation: {
    moneyInput: 0,
    lottoCount: 0,
    winningNumbers: {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      sixth: 0,
    },
    bonusNumber: 0,
    winningCounts: {
      [LOTTO_VALUE.RANK.FIRST]: 0,
      [LOTTO_VALUE.RANK.SECOND]: 0,
      [LOTTO_VALUE.RANK.THIRD]: 0,
      [LOTTO_VALUE.RANK.FOURTH]: 0,
      [LOTTO_VALUE.RANK.FIFTH]: 0,
    },
  },
};

const getMatchedCount = (array1, array2) => {
  return array1.length + array2.length - new Set([...array1, ...array2]).size;
};

const getWinningRank = (matchedCount, hasBonusNumber) => {
  switch (matchedCount) {
    case LOTTO_VALUE.MATCHED_COUNT.FIRST:
      return LOTTO_VALUE.RANK.FIRST;
    case LOTTO_VALUE.MATCHED_COUNT.THIRD:
      return hasBonusNumber ? LOTTO_VALUE.RANK.SECOND : LOTTO_VALUE.RANK.THIRD;
    case LOTTO_VALUE.MATCHED_COUNT.FOURTH:
      return LOTTO_VALUE.RANK.FOURTH;
    case LOTTO_VALUE.MATCHED_COUNT.FIFTH:
      return LOTTO_VALUE.RANK.FIFTH;
    default:
      return;
  }
};

export default function App() {
  const [lottoInformation, setLottoInformation] = useState(initialState.lottoInformation);
  const [lottoItems, setLottoItems] = useState(initialState.lottoItems);
  const [announcementDate, setAnnouncementDate] = useState(getAnnouncementDate());

  const [isModalOpened, setIsModalOpened] = useState(initialState.isModalOpened);
  const [isLottoListToggled, setIsLottoListToggled] = useState(initialState.isLottoListToggled);

  const { winningCounts, lottoCount, winningNumbers, bonusNumber } = lottoInformation;

  const resetState = () => {
    setIsModalOpened(initialState.isModalOpened);
    setIsLottoListToggled(initialState.isLottoListToggled);
    setAnnouncementDate(getAnnouncementDate());
    setLottoInformation(initialState.lottoInformation);
  };

  const getWinningResult = () => {
    const winningNumberValues = Object.values(winningNumbers);

    lottoItems.forEach((item) => {
      const matchedCount = getMatchedCount(winningNumberValues, item.numbers);
      const hasBonusNumber = winningNumberValues.includes(bonusNumber);
      const rank = getWinningRank(matchedCount, hasBonusNumber);

      if (rank) {
        setLottoInformation({
          ...lottoInformation,
          winningCounts: {
            ...winningCounts,
            [rank]: winningCounts[rank] + 1,
          },
        });
      }
    });
  };

  const openModal = () => {
    getWinningResult();
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);

    setLottoInformation({
      ...lottoInformation,
      winningCounts: initialState.lottoInformation.winningCounts,
    });
  };

  useEffect(() => {
    const creatLottoItem = () => {
      const newLottoItems = Array.from({ length: lottoCount }).map(() => {
        const lottoItem = {
          id: idGenerator.getId(),
          numbers: getRandomNumberArray(
            LOTTO_VALUE.MIN_NUMBER,
            LOTTO_VALUE.MAX_NUMBER,
            LOTTO_VALUE.NUMBER_COUNT
          ),
        };

        return lottoItem;
      });

      setLottoItems(newLottoItems);
    };

    creatLottoItem();
  }, [lottoCount]);

  return (
    <div className="app d-flex justify-center items-center">
      <LottoForm
        announcementDate={announcementDate}
        setAnnouncementDate={setAnnouncementDate}
        isModalOpened={isModalOpened}
        isLottoListToggled={isLottoListToggled}
        setIsLottoListToggled={setIsLottoListToggled}
        openModal={openModal}
        lottoInformation={lottoInformation}
        setLottoInformation={setLottoInformation}
        lottoItems={lottoItems}
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
