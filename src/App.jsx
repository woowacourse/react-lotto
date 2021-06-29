import { useState } from 'react';
import './App.css';
import PurchaseForm from './containers/PurchaseForm/PurchaseForm';
import PurchaseResult from './containers/PurchaseResult/PurchaseResult';
import WinningAnnouncement from './containers/WinningAnnouncement/WinningAnnouncement';
import WinningResult from './containers/WinningResult/WinningResult';

export const App = () => {
  const [lottoBundle, setLottoBundle] = useState([]);
  const [isPurchasedLotto, setIsPurchasedLotto] = useState(false);
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);
  const [isWinningResultOpen, setIsWinningResultOpen] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const onReset = () => {
    setLottoBundle([]);
    setIsPurchasedLotto(false);
    setIsAnimationEnded(false);
    setIsWinningResultOpen(false);
    setIsReset(true);
  };

  return (
    <>
      <main className="main">
        <h1 className="header">행운의 로또</h1>
        <PurchaseForm
          isPurchasedLotto={isPurchasedLotto}
          setIsPurchasedLotto={setIsPurchasedLotto}
          setLottoBundle={setLottoBundle}
          isReset={isReset}
          setIsReset={setIsReset}
        />
        {isPurchasedLotto && (
          <>
            <PurchaseResult lottoBundle={lottoBundle} />
            <WinningAnnouncement
              isAnimationEnded={isAnimationEnded}
              setIsAnimationEnded={setIsAnimationEnded}
              setIsWinningResultOpen={setIsWinningResultOpen}
            />
          </>
        )}
      </main>
      {isWinningResultOpen && (
        <WinningResult lottoBundle={lottoBundle} setIsWinningResultOpen={setIsWinningResultOpen} onReset={onReset} />
      )}
    </>
  );
};
