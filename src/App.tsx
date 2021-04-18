import React, { Component } from 'react';
import { AppWrapper } from './App.styles';

import PaymentForm from './components/PaymentForm/PaymentForm';
import RemainedTime from './components/RemainedTime/RemainedTime';
import TicketList from './components/TicketList/TicketList';
import WinningNumberForm from './components/WinningNumberForm/WinningNumberForm';
import ResultModal from './components/ResultModal/ResultModal';

import { issueTickets } from './services/tickets';
import { getRemainedTime } from './utils/date';

import ALERT_MESSAGE from './constants/alertMessage';
import { GREENWICH_MILLISECONDS, TIMER_TICK } from './constants/timer';

type State = {
  tickets: Ticket[];
  winningNumber: WinningNumber;
  isModalOpen: boolean;
  remainTime: Date | null;
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
      remainTime: null,
    };

    this.handlePayment = this.handlePayment.bind(this);
    this.handleRemainedTime = this.handleRemainedTime.bind(this);
    this.handleWinningNumber = this.handleWinningNumber.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  tickRemainTime() {
    this.setState({
      remainTime: new Date(getRemainedTime() - GREENWICH_MILLISECONDS),
    });
  }

  handleRemainedTime() {
    this.tickRemainTime();
    this.remainTimer = setInterval(() => {
      this.tickRemainTime();
    }, TIMER_TICK);
  }

  handlePayment(payment: number) {
    const tickets: Ticket[] = issueTickets(payment);
    this.setState({
      tickets,
    });

    this.handleRemainedTime();
  }

  handleWinningNumber(winningNumber: WinningNumber) {
    if (this.state.tickets.length === 0) {
      alert(ALERT_MESSAGE.SHOULD_BUY_TICKET);
      return;
    }

    this.setState({
      winningNumber,
    });

    this.handleModal(true);
  }

  handleModal(isOpen: boolean) {
    this.setState({
      isModalOpen: isOpen,
    });
  }

  resetGame() {
    this.setState({
      tickets: [],
      winningNumber: {
        numbers: [],
        bonus: 0,
      },
      isModalOpen: false,
      remainTime: null,
    });

    this.winningNumberFormRef.current?.reset();
    this.remainTimer && clearInterval(this.remainTimer);
  }

  render() {
    return (
      <AppWrapper display="flex">
        <h1 className="app-title">🎱 행운의 로또</h1>
        <PaymentForm handlePayment={this.handlePayment} />
        {this.state.remainTime && <RemainedTime remainTime={this.state.remainTime} />}
        <TicketList tickets={this.state.tickets} />
        <WinningNumberForm
          handleWinningNumber={this.handleWinningNumber}
          formRef={this.winningNumberFormRef}
        />
        {this.state.isModalOpen && (
          <ResultModal
            handleModalClose={() => this.handleModal(false)}
            resetGame={this.resetGame}
            tickets={this.state.tickets}
            winningNumber={this.state.winningNumber}
          />
        )}
      </AppWrapper>
    );
  }
}
