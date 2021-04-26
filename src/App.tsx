import React, { useState, useRef } from 'react';
import { AppWrapper } from './App.styles';

import PaymentForm from './components/PaymentForm/PaymentForm';
import RemainedTime from './components/RemainedTime/RemainedTime';
import TicketList from './components/TicketList/TicketList';
import WinningNumberForm from './components/WinningNumberForm/WinningNumberForm';
import ResultModal from './components/ResultModal/ResultModal';

import { issueTickets } from './services/tickets';

const App = () => {
  const winningNumberFormRef = useRef<HTMLFormElement>(null);

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [winningNumber, setWinningNumber] = useState<WinningNumber>({
    numbers: [],
    bonus: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePayment = (payment: number) => {
    setTickets(issueTickets(payment));
  };

  const handleWinningNumber = (winningNumber: WinningNumber) => {
    setWinningNumber(winningNumber);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const resetGame = () => {
    setTickets([]);
    setWinningNumber({
      numbers: [],
      bonus: 0,
    });
    setIsModalOpen(false);

    winningNumberFormRef.current?.reset();
  };

  return (
    <AppWrapper display="flex">
      <h1 className="app-title">🎱 행운의 로또</h1>
      <PaymentForm handlePayment={handlePayment} />
      {tickets.length > 0 && <RemainedTime />}
      <TicketList tickets={tickets} />
      {tickets.length > 0 && (
        <WinningNumberForm
          handleWinningNumber={handleWinningNumber}
          formRef={winningNumberFormRef}
        />
      )}
      {isModalOpen && (
        <ResultModal
          handleModalClose={() => handleModalClose()}
          resetGame={resetGame}
          tickets={tickets}
          winningNumber={winningNumber}
        />
      )}
    </AppWrapper>
  );
};

export default App;
