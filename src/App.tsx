import { useState, useRef } from 'react';

import ALERT_MESSAGE from './constants/alertMessage';
import { getRemainedTime } from './utils/date';
import { GREENWICH_MILLISECONDS } from './services/game';
import { issueTickets } from './services/tickets';

import { AppWrapper } from './App.styles';
import PaymentForm from './components/PaymentForm/PaymentForm';
import TicketList from './components/TicketList/TicketList';
import ResultModal from './components/ResultModal/ResultModal';
import WinningNumberForm from './components/WinningNumberForm/WinningNumberForm';
import RemainedTimeIndicator from './components/RemainedTimeIndicator/RemainedTimeIndicator';

type AppState = {
  tickets: Ticket[];
  winningNumber: WinningNumber;
  isModalOpen: boolean;
  remainedTime: Date | null;
};

const App = () => {
  let winningNumberFormRef: React.RefObject<HTMLFormElement> = useRef(null);
  let remainedTimeTimeout: NodeJS.Timeout | null = null;

  const [appState, setAppState] = useState<AppState>({
    tickets: [],
    winningNumber: {
      numbers: [],
      bonus: 0,
    },
    isModalOpen: false,
    remainedTime: null,
  });

  const handleRemainedTime = () => {
    setAppState(state => ({
      ...state,
      remainedTime: new Date(getRemainedTime() - GREENWICH_MILLISECONDS),
    }));
  };

  const handlePayment = (payment: number) => {
    const tickets: Ticket[] = issueTickets(payment);
    setAppState(state => ({
      ...state,
      tickets,
    }));
    handleRemainedTime();
    // TODO : 이거 전역변수인데 고쳐라
    remainedTimeTimeout = setInterval(() => {
      handleRemainedTime();
    }, 1000);
  };

  const handleModal = (isOpen: boolean) => {
    setAppState(state => ({
      ...state,
      isModalOpen: isOpen,
    }));
  };

  const handleWinningNumber = (winningNumber: WinningNumber) => {
    const ticketCount = appState.tickets.length;

    if (ticketCount === 0) {
      alert(ALERT_MESSAGE.SHOULD_BUY_TICKET);
      return;
    }

    setAppState(state => ({
      ...state,
      winningNumber,
    }));

    handleModal(true);
  };

  const resetGame = () => {
    setAppState(state => ({
      tickets: [],
      winningNumber: {
        numbers: [],
        bonus: 0,
      },
      isModalOpen: false,
      remainedTime: null,
    }));

    winningNumberFormRef.current?.reset();
    remainedTimeTimeout && clearInterval(remainedTimeTimeout);
  };

  return (
    <AppWrapper display="flex">
      <h1 className="app-title">🎱 행운의 로또</h1>
      <PaymentForm handlePayment={handlePayment} />
      {appState.remainedTime && <RemainedTimeIndicator remainedTime={appState.remainedTime} />}
      <TicketList tickets={appState.tickets} />
      <WinningNumberForm handleWinningNumber={handleWinningNumber} formRef={winningNumberFormRef} />

      {appState.isModalOpen && (
        <ResultModal
          handleModalClose={() => handleModal(false)}
          resetGame={() => resetGame()}
          tickets={appState.tickets}
          winningNumber={appState.winningNumber}
        />
      )}
    </AppWrapper>
  );
};

export default App;
