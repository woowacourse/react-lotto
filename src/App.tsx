import React, { useState, useRef } from 'react';

import ALERT_MESSAGE from './constants/alertMessage';
import { issueTickets } from './services/tickets';

import { AppWrapper } from './App.styles';
import PaymentForm from './components/PaymentForm/PaymentForm';
import TicketList from './components/TicketList/TicketList';
import ResultModal from './components/ResultModal/ResultModal';
import WinningNumberForm from './components/WinningNumberForm/WinningNumberForm';
import RemainedTimeIndicator from './components/RemainedTimeIndicator/RemainedTimeIndicator';

type AppState = {
  tickets: Ticket[];
  winningNumbers: number[];
  isModalVisible: boolean;
};

const App = () => {
  let winningNumberFormRef: React.RefObject<HTMLFormElement> = useRef(null);

  const [appState, setAppState] = useState<AppState>({
    tickets: [],
    winningNumbers: [],
    isModalVisible: false,
  });

  const handlePayment = (payment: number) => {
    const tickets: Ticket[] = issueTickets(payment);
    setAppState({
      ...appState,
      tickets,
    });
  };

  const handleModal = (isOpen: boolean) => {
    setAppState({
      ...appState,
      isModalVisible: isOpen,
    });
  };

  const handleWinningNumber = (winningNumberInputs: number[]) => {
    const ticketCount = appState.tickets.length;

    if (ticketCount === 0) {
      alert(ALERT_MESSAGE.SHOULD_BUY_TICKET);
      return;
    }

    setAppState({
      ...appState,
      winningNumbers: [...winningNumberInputs],
      isModalVisible: true,
    });
  };

  const resetGame = () => {
    setAppState({
      ...appState,
      tickets: [],
      winningNumbers: [],
      isModalVisible: false,
    });
    winningNumberFormRef.current?.reset();
  };

  return (
    <AppWrapper display="flex">
      <h1 className="app-title">🎱 행운의 로또</h1>
      <PaymentForm handlePayment={handlePayment} />
      {!!appState.tickets.length && <RemainedTimeIndicator />}
      <TicketList tickets={appState.tickets} />
      <WinningNumberForm handleWinningNumber={handleWinningNumber} formRef={winningNumberFormRef} />

      {appState.isModalVisible && (
        <ResultModal
          handleModalClose={() => handleModal(false)}
          resetGame={() => resetGame()}
          tickets={appState.tickets}
          winningNumbers={appState.winningNumbers}
        />
      )}
    </AppWrapper>
  );
};

export default App;
