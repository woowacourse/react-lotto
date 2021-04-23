import React, { Component } from 'react';
import PaymentForm from './components/PaymentForm/PaymentForm';
import TicketList from './components/TicketList/TicketList';
import ResultModal from './components/ResultModal/ResultModal';
import WinningNumberForm from './components/WinningNumberForm/WinningNumberForm';
import { AppWrapper } from './App.styles';
import { issueTickets } from './services/tickets';
import { getRemainedTime } from './utils/date';
import RemainedTime from './components/RemainedTime/RemainedTime';
import { Ticket, WinningNumber } from './types';

type State = {
  tickets: Ticket[];
  winningNumber: WinningNumber;
  isModalOpen: boolean;
  remainTime: number;
};

export default class App extends Component<{}, State> {
  winningNumberFormRef: React.RefObject<HTMLFormElement>;
  remainTimer: NodeJS.Timeout | null;

  constructor(props: {}) {
    super(props);
    this.winningNumberFormRef = React.createRef();
    this.remainTimer = null;

    this.state = {
      tickets: [],
      winningNumber: {
        numbers: [],
        bonus: 0,
      },
      isModalOpen: false,
      remainTime: 0,
    };

    this.handlePayment = this.handlePayment.bind(this);
    this.handleWinningNumber = this.handleWinningNumber.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleRemainedTime = this.handleRemainedTime.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  handleRemainedTime() {
    this.setState({
      remainTime: getRemainedTime(),
    });
  }

  handlePayment(payment: number) {
    const tickets = issueTickets(payment);

    this.setState({ tickets });
    this.handleRemainedTime();
    this.remainTimer = setInterval(() => {
      this.handleRemainedTime();
    }, 1000);
  }

  handleWinningNumber(winningNumber: WinningNumber) {
    this.setState({ winningNumber });
    this.handleModal(true);
  }

  handleModal(isOpen: boolean) {
    this.setState({ isModalOpen: isOpen });
  }

  resetGame() {
    this.setState({
      tickets: [],
      winningNumber: {
        numbers: [],
        bonus: 0,
      },
      isModalOpen: false,
      remainTime: 0,
    });

    this.winningNumberFormRef.current?.reset();
    this.remainTimer && clearInterval(this.remainTimer);
  }

  render() {
    const { remainTime, tickets, winningNumber, isModalOpen } = this.state;

    return (
      <AppWrapper display="flex">
        <h1 className="app-title">🎱 행운의 로또</h1>
        <PaymentForm handlePayment={this.handlePayment} />
        {!!tickets.length && (
          <>
            <TicketList tickets={tickets} />
            <RemainedTime remainTime={remainTime} />
            <WinningNumberForm
              handleWinningNumber={this.handleWinningNumber}
              formRef={this.winningNumberFormRef}
            />
          </>
        )}

        {isModalOpen && (
          <ResultModal
            handleModalClose={() => this.handleModal(false)}
            resetGame={this.resetGame}
            tickets={tickets}
            winningNumber={winningNumber}
          />
        )}
      </AppWrapper>
    );
  }
}
