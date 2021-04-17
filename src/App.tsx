import React, { Component } from 'react';
import PaymentForm from './components/PaymentForm/PaymentForm';
import TicketList from './components/TicketList/TicketList';
import ResultModal from './components/ResultModal/ResultModal';
import WinningNumberForm from './components/WinningNumberForm/WinningNumberForm';
import { AppWrapper } from './App.styles';
import Button from './components/common/Button';
import { issueTickets } from './services/tickets';
import TICKET from './constants/ticket';
import ALERT_MESSAGE from './constants/alertMessage';
import {
  alertByWinningNumbersCase,
  isValidWinningNumber,
  alertByWinningNumberCase,
} from './services/validation';

type State = {
  tickets: Ticket[];
  winningNumber: WinningNumber;
  isModalOpen: boolean;
};

export default class App extends Component<{}, State> {
  winningNumberFormRef: React.RefObject<HTMLFormElement>;
  constructor(props: {}) {
    super(props);
    this.winningNumberFormRef = React.createRef();

    this.state = {
      tickets: [],
      winningNumber: {
        numbers: [],
        bonus: 0,
      },
      isModalOpen: false,
    };

    this.handlePayment = this.handlePayment.bind(this);
    this.handleWinningNumber = this.handleWinningNumber.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handlePayment(payment: number) {
    const tickets: Ticket[] = issueTickets(payment);
    this.setState({
      tickets,
    });
  }

  handleWinningNumber(winningNumber: WinningNumber) {
    const ticketCount = this.state.tickets.length;

    if (ticketCount === 0) {
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
    });

    this.winningNumberFormRef.current?.reset();
  }

  render() {
    return (
      <AppWrapper display="flex">
        <h1 className="app-title">🎱 행운의 로또</h1>
        <PaymentForm handlePayment={this.handlePayment} />
        <TicketList tickets={this.state.tickets} />
        <WinningNumberForm
          handleWinningNumber={this.handleWinningNumber}
          formRef={this.winningNumberFormRef}
        />
        {this.state.isModalOpen && (
          <ResultModal
            handleModalClose={() => this.handleModal(false)}
            resetGame={() => this.resetGame()}
            tickets={this.state.tickets}
            winningNumber={this.state.winningNumber}
          />
        )}
      </AppWrapper>
    );
  }
}
