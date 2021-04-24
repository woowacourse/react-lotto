import { useRef, useState } from 'react';
import PaymentForm from './components/PaymentForm/PaymentForm';
import TicketList from './components/TicketList/TicketList';
import ResultModal from './components/ResultModal/ResultModal';
import WinningNumberForm from './components/WinningNumberForm/WinningNumberForm';
import { AppWrapper } from './App.styles';
import { issueTickets } from './services/tickets';
import RemainedTime from './components/RemainedTime/RemainedTime';
import { Ticket, WinningNumber } from './types';

const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winningNumber, setWinningNumber] = useState<WinningNumber>({
    numbers: [],
    bonus: 0,
  });

  const winningNumberFormRef = useRef<HTMLFormElement>(null);

  const handlePayment = (payment: number) => {
    setTickets(issueTickets(payment));
  };

  const handleWinningNumber = (winningNumber: WinningNumber) => {
    setWinningNumber(winningNumber);
    setIsModalOpen(true);
  };

  const resetStates = () => {
    setTickets([]);
    setWinningNumber({
      numbers: [],
      bonus: 0,
    });
    setIsModalOpen(false);
  };

  const resetGame = () => {
    resetStates();
    winningNumberFormRef.current?.reset();
  };

  return (
    <AppWrapper display="flex">
      <h1 className="app-title">🎱 행운의 로또</h1>
      <PaymentForm handlePayment={handlePayment} />
      {!!tickets.length && (
        <>
          <TicketList tickets={tickets} />
          <RemainedTime />
          <WinningNumberForm
            handleWinningNumber={handleWinningNumber}
            formRef={winningNumberFormRef}
          />
        </>
      )}

      {isModalOpen && (
        <ResultModal
          handleModalClose={() => setIsModalOpen(false)}
          resetGame={resetGame}
          tickets={tickets}
          winningNumber={winningNumber}
        />
      )}
    </AppWrapper>
  );
};

export default App;
