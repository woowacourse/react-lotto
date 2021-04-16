import React from 'react';
import Modal from './components/modal';
import MoneyInput from './components/money-input';
import PurchaseNumberList from './components/purchase-number-list';
import WinningNumber from './components/winning-number';
import { LOTTERY_BALL_LENGTH, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from './constants/number';
import { getRandomNumber } from './utils/random-number';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoneyInputValid: false,
      isModalOpen: false,
      moneyAmount: 0,
      receipt: [],
      winningNumber: [],
    };
  }

  handleMoneySubmit(money) {
    this.setState({
      isMoneyInputValid: true,
      moneyAmount: money,
    });
  }

  handleWinningNumberSubmit(winningNumbers) {
    this.setState({
      winningNumber: winningNumbers,
    });
  }

  handleModalButtonClick() {
    this.setState({
      isModalOpen: true,
    });
  }

  makeAutoTicket() {
    const uniqueTicket = new Set();
    while (uniqueTicket.size !== LOTTERY_BALL_LENGTH) {
      uniqueTicket.add(getRandomNumber(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER));
    }

    return [...uniqueTicket];
  }

  makeReceipt(ticketCount) {
    this.setState({ receipt: [...Array(ticketCount)].map(() => this.makeAutoTicket()) });
  }

  render() {
    return (
      <>
        <MoneyInput
          onHandleSubmit={(money, ticketCount) => {
            this.handleMoneySubmit(money);
            this.makeReceipt(ticketCount);
          }}
        ></MoneyInput>
        {this.state.isMoneyInputValid && (
          <>
            <PurchaseNumberList receipt={this.state.receipt}></PurchaseNumberList>
            <WinningNumber
              onHandleSubmit={(winningNumbers) => this.handleWinningNumberSubmit(winningNumbers)}
              onModalButtonClick={() => this.handleModalButtonClick()}
            ></WinningNumber>
          </>
        )}
        {this.state.isModalOpen && (
          <>
            <Modal></Modal>
          </>
        )}
      </>
    );
  }
}

export default App;
