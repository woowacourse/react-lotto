import { Component } from 'react';
import PaymentForm from './components/PaymentForm/PaymentForm';
import TicketList from './components/TicketList/TicketList';
import ResultModal from './components/ResultModal/ResultModal';
import WinningNumberInput from './components/WinningNumberInput/WinningNumberInput';
import { AppWrapper } from './App.styles';
import Button from './components/common/Button';
import { issueTickets } from './services/tickets';

type State = {
  isToggled: boolean;
  tickets: Ticket[];
  winningNumber: WinningNumber;
  isModalOpen: boolean;
};

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isToggled: false,
      tickets: [],
      winningNumber: {
        numbers: [],
        bonus: 0,
      },
      isModalOpen: false,
    };

    this.handlePayment = this.handlePayment.bind(this);
  }

  handlePayment(payment: number) {
    const tickets: Ticket[] = issueTickets(payment);

    this.setState({
      tickets,
    });
  }

  render() {
    return (
      <AppWrapper display="flex">
        <h1 className="app-title">🎱 행운의 로또</h1>
        <PaymentForm handlePayment={this.handlePayment} />
        <TicketList tickets={this.state.tickets} />
        <WinningNumberInput />
        <Button fullWidth>결과 확인하기</Button>
        <ResultModal />
      </AppWrapper>
    );
  }
}
