import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import PriceForm from '../PriceForm';
import PurchasedLotto from '../PurchasedLotto';
import ResultModal from '../ResultModal';
import WinningNumberForm from '../WinningNumberForm';
import { getRandomNumber } from '../../utils/random';
import { LOTTO } from '../../constants/lottoData';
import { Header } from './styles';

const App = () => {
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

  const createLottoList = (count = 0) => {
    try {
      setLottoList([...Array(count)].map(createLotto));
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
    setLottoList([]);
    setWinningNumber({});
    setIsShowModal(false);
  };

  return (
    <>
      <Header className="lotto-header">
        <h1>🎱 행운의 로또</h1>
      </Header>
      <main>
        <PriceForm createLottoList={createLottoList} />
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
    </>
  );
};

export default hot(App);
