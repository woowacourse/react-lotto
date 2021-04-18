import { useState } from 'react';
import { PurchaseForm, LottoListSection, WinningNumberForm, LotteryCountDown } from './index';

export default function Main(props) {
  const [winningNumbers, setWinningNumbers] = useState([]);
  const [bonusNumber, setBonusNumber] = useState(0);

  return (
    <main className="main-container d-flex flex-col">
      <h1 className="text-center m-0">🎱 행운의 로또</h1>
      <PurchaseForm setLottoCount={props.setLottoCount} />
      <LottoListSection
        isModalOpened={props.isModalOpened}
        lottoCount={props.lottoCount}
        winningNumbers={winningNumbers}
        bonusNumber={bonusNumber}
        increaseWinningCounts={props.increaseWinningCounts}
      />
      <WinningNumberForm
        lottoCount={props.lottoCount}
        setWinningNumbers={setWinningNumbers}
        setBonusNumber={setBonusNumber}
        openModal={props.openModal}
      />
      <LotteryCountDown
        announcementDate={props.announcementDate}
        setAnnouncementDate={props.setAnnouncementDate}
      />
    </main>
  );
}
