import React, { useState } from 'react';
import { LOTTO } from '../../constants/lottoData';
import { getRandomNumber } from '../../utils/random';
import PriceForm from '../PriceForm';
import PurchasedLotto from '../PurchasedLotto';
import ResultModal from '../ResultModal';
import WinningNumberForm from '../WinningNumberForm';

const Main = () => {
  const [price, setPrice] = useState(0);
  const [lottoList, setLottoList] = useState([]);
  const [winningNumber, setWinningNumber] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);

  const createLotto = () => {
    const numberList = new Set();

    while (numberList.size < LOTTO.NUMBER_LENGTH) {
      numberList.add(getRandomNumber(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER));
    }

    return [...numberList].sort((a, b) => a - b);
  };

  const createLottoList = () => {
    try {
      setLottoList([...Array(Math.floor(price / LOTTO.PRICE))].map(createLotto));
    } catch (e) {
      setLottoList([]);
    }
  };

  const openResultModal = () => {
    setIsShowModal(true);
  };

  const closeResultModal = () => {
    setIsShowModal(false);
  };

  const restart = () => {
    setPrice(0);
    setLottoList([]);
    setWinningNumber({});
    setIsShowModal(false);
  };

  return (
    <main>
      <PriceForm price={price} setPrice={setPrice} createLottoList={createLottoList} />
      {lottoList.length > 0 && (
        <>
          <PurchasedLotto lottoList={lottoList} />
          <WinningNumberForm setWinningNumber={setWinningNumber} openResultModal={openResultModal} />
        </>
      )}
      {isShowModal && (
        <ResultModal
          lottoList={lottoList}
          winningNumber={winningNumber}
          closeResultModal={closeResultModal}
          restart={restart}
        />
      )}
    </main>
  );
};

export default Main;
