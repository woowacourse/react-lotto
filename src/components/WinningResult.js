import React, { Component } from 'react';
import {
  LOTTO_UNIT_PRICE,
  BONUS_CHECK_REQUIRED_COUNT,
  BONUS_COUNT,
  RESULT_TABLE_KEY_LIST,
  RESULT_TABLE_DATA,
} from '../constants/lottoRules';
import '../css/winning-result.css';
import Animation from './Animation.js';
import coin from '../animations/coin.json';

const COIN_ANIMATION_DURATION = 2000;
export default class WinningResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchCount: {},
      rateOfReturn: 0,
      shouldPlayAnimation: true,
    };
    this.destroyAnimation = this.destroyAnimation.bind(this);
  }

  componentDidMount() {
    const matchCount = this.getMatchCount();
    const rateOfReturn = this.getRateOfReturn(matchCount);

    this.setState({ matchCount, rateOfReturn });
    setTimeout(this.destroyAnimation, COIN_ANIMATION_DURATION);
  }

  destroyAnimation() {
    this.setState({ shouldPlayAnimation: false });
  }

  getMatchCount() {
    const matchCount = {};
    const { winningNumbers, bonusNumber } = this.props.drawNumber;

    this.props.lottoBundle.forEach((lotto) => {
      let numOfMatch = lotto.reduce((acc, cur) => acc + Number(winningNumbers.includes(cur)), 0);

      if (numOfMatch === BONUS_CHECK_REQUIRED_COUNT && lotto.includes(bonusNumber)) {
        numOfMatch += BONUS_COUNT;
      }
      matchCount[numOfMatch] = matchCount[numOfMatch] === undefined ? 1 : matchCount[numOfMatch] + 1;
    });

    return matchCount;
  }

  getRateOfReturn(matchCount) {
    const investment = this.props.lottoBundle.length * LOTTO_UNIT_PRICE;
    const profit = Object.keys(matchCount).reduce(
      (acc, key) => acc + matchCount[key] * RESULT_TABLE_DATA[key].PRIZE,
      0,
    );

    return (((profit - investment) / investment) * 100).toFixed(2);
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
                      <th className="table-head">당첨금</th>
                      <th className="table-head">개수</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RESULT_TABLE_KEY_LIST.map((v) => (
                      <TableRow key={v} tableKey={v} numOfMatch={this.state.matchCount[v]} />
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="winning-result-rate-of-return">당신의 총 수익률은 {this.state.rateOfReturn}%입니다.</p>
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
    const key = this.props.tableKey;
    return (
      <tr className="table-row">
        <td className="table-data">{RESULT_TABLE_DATA[key].DESCRIPTION}</td>
        <td className="table-data">{RESULT_TABLE_DATA[key].PRIZE}</td>
        <td className="table-data">{this.props.numOfMatch ?? 0}</td>
      </tr>
    );
  }
}
