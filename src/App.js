import React from 'react';
import Modal from './components/modal';
import MoneyInput from './components/money-input';
import Receipt from './components/receipt';
import WinningNumber from './components/winning-number';
import { LOTTERY_BALL_LENGTH, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from './constants/number';
import getRandomNumber from './utils/random-number';
import Canvas from './components/canvas';
import TimeLeft from './components/time-left';
import { hideScroll, showScroll } from './utils/scroll';
import muyahoAudio from './sound/muyaho.mp3';
import Lottie from 'react-lottie';
import coinSpin from './animation/coinSpin.json';
import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoneyInputValid: false,
      isModalOpen: false,
      isLoading: false,
      moneyAmount: 0,
      bonusNumber: 0,
      receipt: [],
      winningNumber: [],
    };

    this.moneyInputRef = React.createRef();
    this.audio = new Audio(muyahoAudio);
  }

  handleMoneySubmit(money) {
    this.setState({
      isMoneyInputValid: true,
      moneyAmount: money,
    });

    if (this.state.isMoneyInputValid) {
      this.audio.play();
    }
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

    hideScroll();
  }

  handleResetButtonClick() {
    this.setState({
      isMoneyInputValid: false,
      isModalOpen: false,
    });

    showScroll();
  }

  handleModalClose() {
    this.setState({
      isModalOpen: false,
    });

    showScroll();
  }

  makeAutoTicket() {
    const uniqueTicket = new Set();
    while (uniqueTicket.size !== LOTTERY_BALL_LENGTH) {
      uniqueTicket.add(getRandomNumber(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER));
    }

    return [...uniqueTicket];
  }

  makeReceipt(ticketCount) {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        receipt: [...Array(ticketCount)].map(() => this.makeAutoTicket()),
      });
    }, 1000);
  }

  render() {
    return (
      <div ref={this.bodyRef}>
        {this.state.isMoneyInputValid && <TimeLeft />}
        {this.state.isMoneyInputValid && (
          <audio controls autoPlay hidden>
            <source src={muyahoAudio} type='audio/mp3' />
          </audio>
        )}
        <Canvas />
        <div className='title'>슈퍼 로또</div>
        <MoneyInput
          ref={this.moneyInputRef}
          onHandleSubmit={(money, ticketCount) => {
            this.handleMoneySubmit(money);
            this.makeReceipt(ticketCount);
          }}
        />
        {this.state.isLoading && (
          <Lottie
            speed={1}
            height={'300px'}
            width={'300px'}
            options={{
              animationData: coinSpin,
              loop: false,
            }}
          />
        )}
        {!this.state.isLoading && this.state.isMoneyInputValid && (
          <>
            <Receipt receipt={this.state.receipt} />
            <WinningNumber
              onHandleSubmit={(winningNumbers, bonusNumber) =>
                this.handleWinningNumberSubmit(winningNumbers, bonusNumber)
              }
              onModalButtonClick={() => this.handleModalButtonClick()}
            />
          </>
        )}
        {!this.state.isLoading && this.state.isModalOpen && (
          <>
            <Modal
              winningNumber={this.state.winningNumber}
              bonusNumber={this.state.bonusNumber}
              receipt={this.state.receipt}
              moneyAmount={this.state.moneyAmount}
              onResetButtonClick={() => this.handleResetButtonClick()}
              onModalClose={() => this.handleModalClose()}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
