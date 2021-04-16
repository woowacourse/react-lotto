import React, { Component } from 'react';
import { LOTTO_UNIT_PRICE, BONUS_CHECK_REQUIRED_COUNT, BONUS_COUNT, RESULT_TABLE_DATA } from '../constants/lottoRules';
import '../css/winning-result.css';
import '../css/lotto-ball.css';
import Animation from './Animation.js';
import coin from '../animations/coin.json';

const COIN_ANIMATION_DURATION = 2000;

export default class WinningResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rateOfReturn: 0,
      shouldPlayAnimation: true,
    };
    this.destroyAnimation = this.destroyAnimation.bind(this);
    this.getNumOfMatch = this.getNumOfMatch.bind(this);
  }

  componentDidMount() {
    const matchCount = this.getMatchCount();
    const { profit, rateOfReturn } = this.getStatistics(matchCount);

    this.setState({ profit, rateOfReturn });
    setTimeout(this.destroyAnimation, COIN_ANIMATION_DURATION);
  }

  destroyAnimation() {
    this.setState({ shouldPlayAnimation: false });
  }

  getNumOfMatch(lotto) {
    const { winningNumbers, bonusNumber } = this.props.drawNumber;
    let numOfMatch = lotto.reduce((acc, cur) => acc + Number(winningNumbers.includes(cur)), 0);

    if (numOfMatch === BONUS_CHECK_REQUIRED_COUNT && lotto.includes(bonusNumber)) {
      numOfMatch += BONUS_COUNT;
    }
    return numOfMatch;
  }

  getMatchCount() {
    const matchCount = {};

    this.props.lottoBundle.forEach((lotto) => {
      const numOfMatch = this.getNumOfMatch(lotto);

      matchCount[numOfMatch] = matchCount[numOfMatch] === undefined ? 1 : matchCount[numOfMatch] + 1;
    });

    return matchCount;
  }

  getStatistics(matchCount) {
    const investment = this.props.lottoBundle.length * LOTTO_UNIT_PRICE;
    const profit = Object.keys(matchCount).reduce(
      (acc, key) => acc + matchCount[key] * RESULT_TABLE_DATA[key].PRIZE,
      0,
    );

    return {
      profit,
      rateOfReturn: (((profit - investment) / investment) * 100).toFixed(2),
    };
  }

  render() {
    return (
      <>
        <div className="winning-result open">
          {this.state.shouldPlayAnimation ? (
            <div className="coin-animation">
              {this.state.shouldPlayAnimation && <Animation animationData={coin} speed={1.5} height="360px" />}
            </div>
          ) : (
            <div className="winning-result-inner">
              <button type="button" className="close-button" onClick={this.props.onCloseWinningResult}>
                <svg viewBox="0 0 40 40">
                  <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                </svg>
              </button>
              <h2 className="winning-result-title">당첨결과</h2>
              <div className="result-table-wrapper">
                <table className="result-table">
                  <thead>
                    <tr className="table-row">
                      <th className="table-head">구분</th>
                      <th className="table-head">번호</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.lottoBundle.map((v, i) => (
                      <TableRow
                        key={String.fromCharCode(97 + i)}
                        lotto={v}
                        getNumOfMatch={this.getNumOfMatch}
                        drawNumber={this.props.drawNumber}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="profit">
                <span className="description">당첨 금액</span>
                <span className="value">{this.state.profit}원</span>
              </p>
              <p className="rate-of-return">
                <span className="description">총 수익률</span>
                <span className="value">{this.state.rateOfReturn}%</span>
              </p>
              <div className="reset-button-wrapper">
                <button type="button" className="reset-button" onClick={this.props.onReset}>
                  다시 시작하기
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

class TableRow extends Component {
  render() {
    const { lotto, getNumOfMatch, drawNumber } = this.props;
    const { winningNumbers, bonusNumber } = drawNumber;
    const drawNumbers = winningNumbers.concat(bonusNumber);
    const numOfMatch = getNumOfMatch(lotto);

    return (
      <tr className="table-row">
        <td className="table-data">{RESULT_TABLE_DATA[numOfMatch].DESCRIPTION}</td>
        <td className="table-data">
          {lotto.map((number) => (
            <LottoBall number={number} drawNumbers={drawNumbers} />
          ))}
        </td>
      </tr>
    );
  }
}

class LottoBall extends Component {
  render() {
    const { number, drawNumbers } = this.props;
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

    if (!drawNumbers.includes(number)) {
      ballColorClassName += ' not-matched';
    }

    return <span className={`lotto-ball ${ballColorClassName}`}>{number < 10 ? `0${number}` : number}</span>;
  }
}
