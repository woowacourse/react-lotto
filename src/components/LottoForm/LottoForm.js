import { PurchaseForm, LottoListSection, WinningNumberForm, LotteryCountDown } from '.';
import LottoItem from './LottoItem';

export default function LottoForm({
  isModalOpened,
  isLottoListToggled,
  setIsLottoListToggled,
  openModal,
  announcementDate,
  setAnnouncementDate,
  lottoInformation,
  setLottoInformation,
  lottoItems,
  creatLottoItem,
}) {
  const { lottoCount, winningNumbers, bonusNumber, moneyInput } = lottoInformation;

  return (
    <main className="main-container d-flex flex-col">
      <h1 className="text-center m-0">🎱 행운의 로또</h1>
      <PurchaseForm
        lottoCount={lottoCount}
        setLottoCount={(lottoCount) => setLottoInformation({ ...lottoInformation, lottoCount })}
        moneyInput={moneyInput}
        setMoneyInput={(moneyInput) => setLottoInformation({ ...lottoInformation, moneyInput })}
        creatLottoItem={creatLottoItem}
      />
      <LottoListSection
        isModalOpened={isModalOpened}
        isLottoListToggled={isLottoListToggled}
        setIsLottoListToggled={setIsLottoListToggled}
        lottoCount={lottoCount}
        winningNumbers={winningNumbers}
        bonusNumber={bonusNumber}
      >
        {lottoItems.map(({ id, numbers }) => (
          <LottoItem key={id} isToggled={isLottoListToggled} numbers={numbers} />
        ))}
      </LottoListSection>
      <WinningNumberForm
        lottoCount={lottoCount}
        winningNumbers={winningNumbers}
        setWinningNumbers={(winningNumbers) =>
          setLottoInformation({ ...lottoInformation, winningNumbers })
        }
        bonusNumber={bonusNumber}
        setBonusNumber={(bonusNumber) => setLottoInformation({ ...lottoInformation, bonusNumber })}
        openModal={openModal}
      />
      <LotteryCountDown
        announcementDate={announcementDate}
        setAnnouncementDate={setAnnouncementDate}
      />
    </main>
  );
}
