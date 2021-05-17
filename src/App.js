import React from 'react';
import Lottie from 'react-lottie';
import coinSpin from './animation/coinSpin.json';
import Canvas from './components/Canvas';
import MoneyInput from './components/MoneyInput';
import Receipt from './components/Receipt';
import ResultModal from './components/ResultModal';
import TimeLeft from './components/TimeLeft';
import WinningNumber from './components/WinningNumber';
import {
  LOTTERY_BALL_LENGTH,
  LOTTERY_NUMBERS_LENGTH,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
} from './constants/number';
import muyahoAudio from './sound/muyaho.mp3';
import './style.scss';
import getRandomNumber from './utils/random-number';
import { hideScroll, showScroll } from './utils/scroll';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoneyInputValid: false,
      isModalOpen: false,
      isLoading: false,
      moneyAmount: 0,
      receipt: [],
      lotteryNumbers: [...Array(LOTTERY_NUMBERS_LENGTH)].map((_, idx) => ({
        value: 0,
        type: idx < LOTTERY_BALL_LENGTH ? 'winning' : 'bonus',
      })),
    };

    this.audio = new Audio(muyahoAudio);

    this.handleModalButtonClick = this.handleModalButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
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

  handleLotteryNumberSubmit(lotteryNumbers) {
    this.setState({ lotteryNumbers });
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
      <div>
        {this.state.isMoneyInputValid && (
          <>
            <TimeLeft />
            <audio controls autoPlay hidden>
              <source src={muyahoAudio} type='audio/mp3' />
            </audio>
          </>
        )}
        <Canvas />
        <div className='title'>슈퍼 로또</div>
        <MoneyInput
          onHandleSubmit={(money, ticketCount) => {
            this.handleMoneySubmit(money);
            this.makeReceipt(ticketCount);
          }}
        />
        {this.state.isLoading ? (
          <Lottie
            speed={1}
            height={'300px'}
            width={'300px'}
            options={{
              animationData: coinSpin,
              loop: false,
            }}
          />
        ) : (
          <>
            {this.state.isMoneyInputValid && (
              <>
                <Receipt receipt={this.state.receipt} />
                <WinningNumber
                  lotteryNumbers={this.state.lotteryNumbers}
                  onHandleChangeLotteryNumbers={(lotteryNumbers) =>
                    this.handleLotteryNumberSubmit(lotteryNumbers)
                  }
                  onModalButtonClick={this.handleModalButtonClick}
                />
              </>
            )}
            {this.state.isModalOpen && (
              <ResultModal
                lotteryNumbers={this.state.lotteryNumbers}
                receipt={this.state.receipt}
                moneyAmount={this.state.moneyAmount}
                onResetButtonClick={this.handleResetButtonClick}
                onModalClose={this.handleModalClose}
              />
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
