import React, { Component } from 'react';
import { LOTTO_NUMBERS_LENGTH } from '../constants/lottoRules';
import Animation from './Animation.js';
import '../css/draw-number.css';
import '../css/lotto-ball.css';
import dummyDrawNumber from '../constants/dummyData.json';
import countDown from '../animations/countDown.json';

const WINNING_NUMBER_KEY = (i) => `drwtNo${i}`;
const BONUS_NUMBER_KEY = 'bnusNo';
const DRAW_NTH_KEY = 'drwNo';
const DRAW_DATE_KEY = 'drwNoDate';
const COUNT_DOWN_ANIMATION_DURATION = 3000;

export default class WinningNumbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldPlayAnimation: true,
    };
    this.destroyAnimation = this.destroyAnimation.bind(this);
    this.drawNumber = this.getDrawNumber();
    this.props.setDrawNumber({ drawNumber: this.drawNumber });
  }

  componentDidMount() {
    setTimeout(this.destroyAnimation, COUNT_DOWN_ANIMATION_DURATION);
  }

  destroyAnimation() {
    this.setState({ shouldPlayAnimation: false });
  }

  // eslint-disable-next-line class-methods-use-this
  getDrawNumber() {
    return {
      winningNumbers: [...Array(LOTTO_NUMBERS_LENGTH)].map((_, i) =>
        Number(dummyDrawNumber[WINNING_NUMBER_KEY(i + 1)]),
      ),
      bonusNumber: Number(dummyDrawNumber[BONUS_NUMBER_KEY]),
    };
  }

  render() {
    return this.state.shouldPlayAnimation ? (
      <Animation animationData={countDown} speed={1} height="140px" />
    ) : (
      <DrawNumber drawNumber={this.drawNumber} onDisplayWinningResult={this.props.onDisplayWinningResult} />
    );
  }
}

class DrawNumber extends Component {
  render() {
    const { winningNumbers, bonusNumber } = this.props.drawNumber;
    return (
      <div className="draw-number-wrapper">
        <h2 className="draw-number-title">
          {dummyDrawNumber[DRAW_NTH_KEY]}회차 당첨번호 {dummyDrawNumber[DRAW_DATE_KEY].split('-').join('.')}
        </h2>
        <section className="draw-number-section">
          {winningNumbers.map((v) => (
            <LottoBall key={v} number={v} />
          ))}
          <span className="plus-sign">+</span>
          <span className="bonus-number-title">보너스번호</span>
          <LottoBall key={bonusNumber} number={bonusNumber} />
        </section>
        <button type="button" className="open-result-button" onClick={() => this.props.onDisplayWinningResult()}>
          당첨결과 확인하기
        </button>
      </div>
    );
  }
}

class LottoBall extends Component {
  render() {
    const { number } = this.props;
    let ballColorClassName;

    if (number < 10) {
      ballColorClassName = 'zeros';
    } else if (number < 20) {
      ballColorClassName = 'tens';
    } else if (number < 30) {
      ballColorClassName = 'twenties';
    } else if (number < 40) {
      ballColorClassName = 'thirties';
    } else {
      ballColorClassName = 'forties';
    }

    return <span className={`lotto-ball ${ballColorClassName}`}>{number < 10 ? `0${number}` : number}</span>;
  }
}
