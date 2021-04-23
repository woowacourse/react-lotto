import React, { useState, useRef } from 'react';
import { AppWrapper } from './App.styles';

import PaymentForm from './components/PaymentForm/PaymentForm';
import RemainedTime from './components/RemainedTime/RemainedTime';
import TicketList from './components/TicketList/TicketList';
import WinningNumberForm from './components/WinningNumberForm/WinningNumberForm';
import ResultModal from './components/ResultModal/ResultModal';

import { issueTickets } from './services/tickets';

type State = {
  tickets: Ticket[];
  winningNumber: WinningNumber;
  isModalOpen: boolean;
};

const App = () => {
  const winningNumberFormRef = useRef<HTMLFormElement>(null);

  const [state, setState] = useState<State>({
    tickets: [],
    winningNumber: {
      numbers: [],
      bonus: 0,
    },
    isModalOpen: false,
  });

  const handlePayment = (payment: number) => {
    setState({
      ...state,
      tickets: issueTickets(payment),
    });
  };

  const handleWinningNumber = (winningNumber: WinningNumber) => {
    setState({ ...state, winningNumber, isModalOpen: true });
  };

  const handleModalClose = () => {
    setState({ ...state, isModalOpen: false });
  };

  const resetGame = () => {
    setState({
      tickets: [],
      winningNumber: {
        numbers: [],
        bonus: 0,
      },
      isModalOpen: false,
    });

    winningNumberFormRef.current?.reset();
  };

  return (
    <AppWrapper display="flex">
      <h1 className="app-title">🎱 행운의 로또</h1>
      <PaymentForm handlePayment={handlePayment} />
      {state.tickets.length > 0 && <RemainedTime />}
      <TicketList tickets={state.tickets} />
      {state.tickets.length > 0 && (
        <WinningNumberForm
          handleWinningNumber={handleWinningNumber}
          formRef={winningNumberFormRef}
        />
      )}
      {state.isModalOpen && (
        <ResultModal
          handleModalClose={() => handleModalClose()}
          resetGame={resetGame}
          tickets={state.tickets}
          winningNumber={state.winningNumber}
        />
      )}
    </AppWrapper>
  );
};

export default App;
