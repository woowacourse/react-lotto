import { Component } from 'react';
import PaymentForm from './components/PaymentForm/PaymentForm';
import TicketList from './components/TicketList/TicketList';
import ResultModal from './components/ResultModal/ResultModal';
import WinningNumberInput from './components/WinningNumberInput/WinningNumberInput';
import { AppWrapper } from './App.styles';
import Button from './components/common/Button';
import { getRandomNumber } from './utils/random';

type Ticket = {
  numbers: number[];
};

type WinningNumber = {
  numbers: number[];
  bonus: number;
};

type State = {
  payment: number;
  isToggled: boolean;
  tickets: Ticket[];
  winningNumber: WinningNumber;
  isModalOpen: boolean;
};

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      payment: 0,
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

  // TODO : 핸들링하는거 빼고는 나머지 다 service에다 넣기 (로또게임 기능 관련)
  // getLottoNumberList() {
  //   const numberList = new Set();
  //   while (numberList.size < LOTTO.NUMBER_LIST_LENGTH) {
  //     numberList.add(getRandomNumber(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER));
  //   }

  //   return [...numberList];
  // }

  // issueTickets(payment: number) {
  //   const lottoNumberList = this.#getLottoNumberList();
  //   this.#lottoItemList.push({
  //     lottoNumberList,
  //     matchCount: 0,
  //     bonusNumberMatched: false,
  //   });
  // }

  handlePayment(newPayment: number) {
    this.setState({
      payment: newPayment,
    });
  }

  render() {
    return (
      <AppWrapper display="flex">
        <h1 className="app-title">🎱 행운의 로또</h1>
        <PaymentForm handlePayment={this.handlePayment} />
        <TicketList />
        <WinningNumberInput />
        <Button fullWidth>결과 확인하기</Button>
        <ResultModal />
      </AppWrapper>
    );
  }
}
