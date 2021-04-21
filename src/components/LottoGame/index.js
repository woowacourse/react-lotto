import React, { useState, useCallback, useMemo } from 'react';
import PurchaseAmountForm from './PurchaseAmountForm';
import LottoTicketList from './LottoTicketList';
import LottoResultForm from './LottoResultForm';
import LottoResultContainer from './LottoResultContainer';
import AnnounceTime from './AnnouncetTime';
import Modal from '../Modal';
import { getLottoResult, generateLottoNumbers } from '../../services/lottoService';
import { UNIT_AMOUNT } from '../../constants/standard';

const LottoGame = () => {
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [isPurchaseAmountSubmitted, setPurchaseAmountSubmitted] = useState(false);
  const [lottoTickets, setLottoTickets] = useState([]);
  const [resultNumbers, setResultNumbers] = useState({ winningNumbers: [], bonusNumber: 0 });
  const [isModalOpened, setModalOpened] = useState(false);

  const handleChange = e => {
    if (e.target.name === 'purchaseAmount') {
      setPurchaseAmount(e.target.value);
    }
  };

  const publishLottoTickets = useCallback(() => {
    const amountOfLottoTicket = purchaseAmount / UNIT_AMOUNT;
    const lottoTickets = Array(amountOfLottoTicket)
      .fill()
      .map(() => generateLottoNumbers());

    setLottoTickets(lottoTickets);
  }, [purchaseAmount]);

  const buyLottoTickets = useCallback(
    purchaseAmount => {
      setPurchaseAmountSubmitted(true);
      setPurchaseAmount(purchaseAmount);
      publishLottoTickets();
    },
    [publishLottoTickets]
  );

  const restartGame = useCallback(() => {
    setPurchaseAmount('');
    setPurchaseAmountSubmitted(false);
    setLottoTickets([]);
    setResultNumbers({ winningNumbers: [], bonusNumber: 0 });
    setModalOpened(false);
  }, []);

  const openResultModal = useCallback(() => {
    setModalOpened(true);
  }, []);

  const closeResultModal = useCallback(() => {
    setModalOpened(false);
  }, []);

  const lottoResult = useMemo(
    () => getLottoResult(purchaseAmount, lottoTickets, resultNumbers.winningNumbers, resultNumbers.bonusNumber),
    [isModalOpened]
  );

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="w-full">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <PurchaseAmountForm
            purchaseAmount={purchaseAmount}
            isPurchaseAmountSubmitted={isPurchaseAmountSubmitted}
            handleChange={handleChange}
            buyLottoTickets={buyLottoTickets}
          />
          {isPurchaseAmountSubmitted && <AnnounceTime />}
          {isPurchaseAmountSubmitted && <LottoTicketList lottoTickets={lottoTickets} />}
          {isPurchaseAmountSubmitted && (
            <LottoResultForm setResultNumbers={setResultNumbers} openResultModal={openResultModal} />
          )}
        </div>
      </div>
      {isModalOpened && (
        <Modal
          container={<LottoResultContainer restartGame={restartGame} lottoResult={lottoResult} />}
          closeModal={closeResultModal}
        />
      )}
    </>
  );
};

export default LottoGame;
