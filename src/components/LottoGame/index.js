import React, { useState } from 'react';
import PurchaseAmountForm from './PurchaseAmountForm';
import LottoTicketList from './LottoTicketList';
import LottoResultForm from './LottoResultForm';
import LottoResultContainer from './LottoResultContainer';
import AnnouncementTime from './AnnouncementTime';
import Modal from '../Modal';
import { getRandomNumber } from '../../utils/getRandomNumber';
import {
  UNIT_AMOUNT,
  LOTTO_NUMBER_COUNT,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
  HIT_COUNT,
  WINNING_RANK,
  PROFITS,
  RANK,
} from '../../constants/standard';

const LottoGame = props => {
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [isPurchaseAmountSubmitted, setPurchaseAmountState] = useState(false);
  const [lottoTickets, setLottoTickets] = useState([]);
  const [resultNumbers, setResultNumbers] = useState({ winningNumbers: [], bonusNumber: 0 });
  const [isModalOpened, setModalState] = useState(false);

  const handleChange = e => {
    setPurchaseAmount(e.target.value);
  };

  const submitPurchaseAmount = () => {
    setPurchaseAmountState(true);
  };

  const publishLottoTickets = purchaseAmount => {
    const amountOfLottoTicket = purchaseAmount / UNIT_AMOUNT;
    const lottoTickets = Array(amountOfLottoTicket)
      .fill()
      .map(() => generateLottoNumbers());

    setLottoTickets(lottoTickets);
  };
  const generateLottoNumbers = () => {
    const ticketNumbers = new Set();

    while (ticketNumbers.size < LOTTO_NUMBER_COUNT) {
      ticketNumbers.add(getRandomNumber(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER));
    }

    return [...ticketNumbers].sort((a, b) => a - b);
  };

  const getLottoResult = () => {
    const rankCount = getRankCount();
    const earningRate = getEarningRate(rankCount);

    return { rankCount, earningRate };
  };

  const getRankCount = () => {
    const rankCount = {
      [WINNING_RANK.FIRST]: 0,
      [WINNING_RANK.SECOND]: 0,
      [WINNING_RANK.THIRD]: 0,
      [WINNING_RANK.FOURTH]: 0,
      [WINNING_RANK.FIFTH]: 0,
    };

    lottoTickets.forEach(ticket => {
      const rank = getRank(ticket);
      rank && rankCount[rank]++;
    });

    return rankCount;
  };

  const getRank = ticket => {
    const hasBonusNumber = ticket.includes(resultNumbers.bonusNumber);
    const winnigCount = LOTTO_NUMBER_COUNT * 2 - new Set([...ticket, ...resultNumbers.winningNumbers]).size;
    const winningRank = hasBonusNumber && winnigCount === HIT_COUNT.FIVE ? WINNING_RANK.SECOND : RANK[winnigCount];

    return winningRank;
  };

  const getEarningRate = rankCount => {
    const totalProfit = Object.entries(rankCount).reduce((acc, [rank, count]) => acc + PROFITS[rank] * count, 0);
    const earningRate = Number((((totalProfit - purchaseAmount) / purchaseAmount) * 100).toFixed(2));

    return earningRate;
  };

  const restartGame = () => {
    setPurchaseAmount('');
    setPurchaseAmountState(false);
    setLottoTickets([]);
    setResultNumbers({ winningNumbers: [], bonusNumber: 0 });
    setModalState(false);
  };

  const openResultModal = () => {
    setModalState(true);
  };

  const closeResultModal = () => {
    setModalState(false);
  };

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="w-full">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <PurchaseAmountForm
            purchaseAmount={purchaseAmount}
            isPurchaseAmountSubmitted={isPurchaseAmountSubmitted}
            handleChange={handleChange}
            publishLottoTickets={publishLottoTickets}
            submitPurchaseAmount={submitPurchaseAmount}
          />
          {isPurchaseAmountSubmitted && (
            <>
              <AnnouncementTime />
              <LottoTicketList lottoTickets={lottoTickets} />
              <LottoResultForm setResultNumbers={setResultNumbers} openResultModal={openResultModal}></LottoResultForm>
            </>
          )}
        </div>
      </div>
      {isModalOpened && (
        <Modal
          container={<LottoResultContainer restartGame={restartGame} lottoResult={getLottoResult()} />}
          closeModal={closeResultModal}
        />
      )}
    </>
  );
};

export default LottoGame;
