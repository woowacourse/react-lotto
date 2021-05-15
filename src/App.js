import React from 'react';
import Modal from './components/Modal';
import MoneyInput from './components/MoneyInput';
import Receipt from './components/Receipt';
import WinningNumber from './components/WinningNumber';
import { LOTTERY_BALL_LENGTH, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from './constants/number';
import getRandomNumber from './utils/random-number';
import Canvas from './components/Canvas';
import TimeLeft from './components/TimeLeft';
import { hideScroll, showScroll } from './utils/scroll';
import audio_muyaho from './sound/muyaho.mp3';
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
      receipt: [],
      lotto: {
        winningNumbers: [],
        bonusNumber: 0,
      },
    };

    this.moneyInputRef = React.createRef();
    this.audio = new Audio(audio_muyaho);

    this.handleModalButtonClick = this.handleModalButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  componentWillUnmount() {
    this.moneyInputRef = null;
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
    if (!Array.isArray(winningNumbers)) return;

    this.setState({
      lotto: {
        winningNumbers,
        bonusNumber,
      },
    });
  }

  handleModalButtonClick() {
    this.setState({
      isModalOpen: true,
    });

    hideScroll('modal-opened');
  }

  handleResetButtonClick() {
    this.setState({
      isMoneyInputValid: false,
      isModalOpen: false,
    });

    showScroll('modal-opened');
  }

  handleModalClose() {
    this.setState({
      isModalOpen: false,
    });

    showScroll('modal-opened');
  }

  makeAutoTicket() {
    const uniqueTicket = new Set();
    while (uniqueTicket.size !== LOTTERY_BALL_LENGTH) {
      uniqueTicket.add(getRandomNumber(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER));
    }

    return [...uniqueTicket];
  }

  makeReceipt(ticketCount) {
    if (typeof ticketCount !== 'number') return;

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
        {this.state.isMoneyInputValid && (
          <>
            <TimeLeft />
            <audio controls autoPlay hidden>
              <source src={audio_muyaho} type='audio/mp3' />
            </audio>
          </>
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
        {this.state.isLoading ? (
          <Lottie
            speed={1}
            height='300px'
            width='300px'
            options={{
              animationData: coinSpin,
              loop: false,
            }}
          />
        ) : (
          this.state.isMoneyInputValid && (
            <>
              <Receipt receipt={this.state.receipt} />
              <WinningNumber
                onHandleSubmit={(winningNumbers, bonusNumber) =>
                  this.handleWinningNumberSubmit(winningNumbers, bonusNumber)
                }
                onModalButtonClick={this.handleModalButtonClick}
              />
              {this.state.isModalOpen && (
                <Modal
                  lotto={this.state.lotto}
                  receipt={this.state.receipt}
                  moneyAmount={this.state.moneyAmount}
                  onResetButtonClick={this.handleResetButtonClick}
                  onModalClose={this.handleModalClose}
                />
              )}
            </>
          )
        )}
      </div>
    );
  }
}

export default App;
