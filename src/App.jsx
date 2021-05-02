import React, { useState } from 'react';
import generateLottoNumbers from './utils/generateTicket';
import PurchaseForm from './components/PurchaseForm';
import TicketDetail from './components/TicketDetail';
import WinningNumberForm from './components/WinningNumberForm';
import ResultModal from './components/ResultModal';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState([]);
  const [bonusNumber, setBonusNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTickets = (ticketCount) => {
    setTickets(Array.from({ length: ticketCount }, generateLottoNumbers));
    handleIsModalOpen();
  };

  const handleWinningNumbers = (winningNumbers) => {
    setWinningNumbers(winningNumbers);
    handleIsModalOpen();
  };

  const handleBonusNumber = (bonusNumber) => {
    setBonusNumber(bonusNumber);
    handleIsModalOpen();
  };

  const handleIsModalOpen = () => {
    setIsModalOpen(tickets.length > 0 && winningNumbers.length > 0 && bonusNumber > 0);
  };

  const resetState = () => {
    setTickets([]);
    setWinningNumbers([]);
    setBonusNumber(0);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isReset = winningNumbers.length === 0 && bonusNumber === 0;

  return (
    <>
      <main className="m-16 p-9 max-w-screen-sm mx-auto rounded-xl bg-white">
        <h1 className="text-center text-3xl	font-bold">
          <span role="img" aria-label="good-luck">
            🎱
          </span>
          {' 행운의 로또'}
        </h1>
        <PurchaseForm handleTickets={handleTickets} tickets={tickets} isReset={isReset} />
        {tickets.length > 0 && (
          <>
            <TicketDetail tickets={tickets} />
            <WinningNumberForm
              handleWinningNumbers={handleWinningNumbers}
              handleBonusNumber={handleBonusNumber}
              isReset={isReset}
            />
          </>
        )}
      </main>
      {isModalOpen && (
        <ResultModal
          tickets={tickets}
          winningNumbers={winningNumbers}
          bonusNumber={bonusNumber}
          reset={resetState}
          close={closeModal}
        />
      )}
    </>
  );
};

export default App;
