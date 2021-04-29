import { PurchaseForm, LottoListSection, WinningNumberForm, LotteryCountDown } from '.';
import LottoItem from './LottoItem';

export default function LottoForm({
  setLottoCount,
  moneyInput,
  setMoneyInput,
  isModalOpened,
  lottoCount,
  winningNumbers,
  bonusNumber,
  increaseWinningCounts,
  isLottoListToggled,
  setIsLottoListToggled,
  setWinningNumbers,
  setBonusNumber,
  openModal,
  announcementDate,
  setAnnouncementDate,
}) {
  return (
    <main className="main-container d-flex flex-col">
      <h1 className="text-center m-0">🎱 행운의 로또</h1>
      <PurchaseForm
        setLottoCount={setLottoCount}
        moneyInput={moneyInput}
        setMoneyInput={setMoneyInput}
      />
      <LottoListSection
        isModalOpened={isModalOpened}
        lottoCount={lottoCount}
        winningNumbers={winningNumbers}
        bonusNumber={bonusNumber}
        increaseWinningCounts={increaseWinningCounts}
        isLottoListToggled={isLottoListToggled}
        setIsLottoListToggled={setIsLottoListToggled}
      >
        {Array.from({ length: lottoCount }).map((_, index) => (
          <LottoItem
            key={index}
            isToggled={isLottoListToggled}
            winningNumbers={winningNumbers}
            bonusNumber={bonusNumber}
            increaseWinningCounts={increaseWinningCounts}
            isModalOpened={isModalOpened}
          />
        ))}
      </LottoListSection>
      <WinningNumberForm
        lottoCount={lottoCount}
        setWinningNumbers={setWinningNumbers}
        winningNumbers={winningNumbers}
        bonusNumber={bonusNumber}
        setBonusNumber={setBonusNumber}
        openModal={openModal}
      />
      <LotteryCountDown
        announcementDate={announcementDate}
        setAnnouncementDate={setAnnouncementDate}
      />
    </main>
  );
}
