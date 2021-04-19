import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import PriceForm from './components/priceForm/PriceForm';
import PurchasedLotto from './components/purchasedLotto/PurchasedLotto';
import ResultModal from './components/resultModal/ResultModal';
import WinningNumberForm from './components/winningNumberForm/WinningNumberForm';
import { getRandomNumber } from './utils/random';
import { LOTTO } from './constants/lottoData';

const App = () => {
  const [lottoList, setLottoList] = useState([]);
  const [winningNumber, setWinningNumber] = useState({});
  const [isResultModalShow, setIsResultModalShow] = useState(false);
  const [price, setPrice] = useState('');

  const createLotto = () => {
    const numberList = new Set();

    while (numberList.size < LOTTO.NUMBER_LENGTH) {
      numberList.add(getRandomNumber(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER));
    }

    return [...numberList].sort((a, b) => a - b);
  };

  const createLottoList = (count) => {
    setLottoList([...Array(count)].map(createLotto));
  };

  const restart = () => {
    setLottoList([]);
    setWinningNumber({});
    setIsResultModalShow(false);
    setPrice('');
  };

  return (
    <>
      <header className="lotto-header">
        <h1>🎱 행운의 로또</h1>
      </header>
      <main>
        <PriceForm createLottoList={createLottoList} onPriceChange={setPrice} price={price} />
        {lottoList.length > 0 && (
          <>
            <PurchasedLotto lottoList={lottoList} />
            <WinningNumberForm setWinningNumber={setWinningNumber} setIsResultModalShow={setIsResultModalShow} />
          </>
        )}
        {isResultModalShow && (
          <ResultModal
            lottoList={lottoList}
            winningNumber={winningNumber}
            setIsResultModalShow={setIsResultModalShow}
            restart={restart}
          />
        )}
      </main>
    </>
  );
};

export default hot(App);
