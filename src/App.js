import React from 'react';
import Modal from './components/modal';
import MoneyInput from './components/money-input';
import Receipt from './components/receipt';
import WinningNumber from './components/winning-number';
import Canvas from './components/canvas';
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
      bonusNumber: 0,
    };
    this.MoneyInputRef = React.createRef();
  }

  handleMoneySubmit(money) {
    this.setState({
      isMoneyInputValid: true,
      moneyAmount: money,
    });
  }

  handleWinningNumberSubmit(winningNumbers, bonusNumber) {
    this.setState({
      winningNumber: winningNumbers,
      bonusNumber: bonusNumber,
    });
  }

  handleModalButtonClick() {
    this.setState({
      isModalOpen: true,
    });
  }

  handleResetButtonClick() {
    this.setState({
      isMoneyInputValid: false,
      isModalOpen: false,
    });
    this.MoneyInputRef.current.resetMoneyForm();
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
          ref={this.MoneyInputRef}
          onHandleSubmit={(money, ticketCount) => {
            this.handleMoneySubmit(money);
            this.makeReceipt(ticketCount);
          }}
        ></MoneyInput>
        {this.state.isMoneyInputValid && (
          <>
            <Receipt receipt={this.state.receipt}></Receipt>
            <WinningNumber
              onHandleSubmit={(winningNumbers, bonusNumber) =>
                this.handleWinningNumberSubmit(winningNumbers, bonusNumber)
              }
              onModalButtonClick={() => this.handleModalButtonClick()}
            ></WinningNumber>
          </>
        )}
        {this.state.isModalOpen && (
          <>
            <Modal
              winningNumber={this.state.winningNumber}
              bonusNumber={this.state.bonusNumber}
              receipt={this.state.receipt}
              onResetButtonClick={() => this.handleResetButtonClick()}
            ></Modal>
          </>
        )}
      </>
    );
  }
}

export default App;
