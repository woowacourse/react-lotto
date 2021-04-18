/* eslint-disable react/sort-comp */
import { Component } from 'react';
import ResultTable from './ResultTable';
import ResultSummary from './ResultSummary';
import { Animation, PlainButton, XButton } from '../../shared';
import { getMatchCount, getStatistics } from './service';
import { coin } from '../../../statics';
import './style.css';

const COIN_ANIMATION_DURATION = 2000;

export default class UserResultContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {
        profit: 0,
        rateOfReturn: 0,
      },
      shouldPlayAnimation: true,
    };
    this.destroyAnimation = this.destroyAnimation.bind(this);
  }

  componentDidMount() {
    const { lottoBundle, winningNumber } = this.props;
    const matchCount = getMatchCount(lottoBundle, winningNumber);
    const result = getStatistics(lottoBundle, matchCount);

    this.setState({ result });
    setTimeout(this.destroyAnimation, COIN_ANIMATION_DURATION);
  }

  destroyAnimation() {
    this.setState({ shouldPlayAnimation: false });
  }

  render() {
    const { shouldPlayAnimation, result } = this.state;
    const { lottoBundle, winningNumber, onCloseWinningResult, onReset } = this.props;

    return (
      <>
        <div className="winning-result open">
          {shouldPlayAnimation ? (
            <div className="coin-animation">
              {shouldPlayAnimation && <Animation animationData={coin} speed={1.5} height="360px" />}
            </div>
          ) : (
            <div className="winning-result-inner">
              <XButton onClick={onCloseWinningResult} />
              <h2 className="winning-result-title">당첨결과</h2>
              <ResultTable lottoBundle={lottoBundle} winningNumber={winningNumber} />
              <ResultSummary result={result} />
              <div className="reset-button-wrapper">
                <PlainButton className="reset-button" onClick={onReset} text="다시 시작하기" />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
