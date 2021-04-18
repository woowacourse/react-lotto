/* eslint-disable react/sort-comp */
import { Component } from 'react';
import ResultTable from './ResultTable';
import ResultSummary from './ResultSummary';
import { Animation, PlainButton, XButton } from '../../shared';
import { getComputedResult } from './service';
import { coin } from '../../../statics';
import './style.css';

const COIN_ANIMATION_DURATION = 2000;

export default class UserResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      result: {
        profit: 0,
        rateOfReturn: 0,
      },
    };
    this.removeLoader = this.removeLoader.bind(this);
  }

  componentDidMount() {
    const { lottoBundle, winningNumber } = this.props;
    const result = getComputedResult(lottoBundle, winningNumber);

    this.setState({ result });
    setTimeout(this.removeLoader, COIN_ANIMATION_DURATION);
  }

  removeLoader() {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading, result } = this.state;
    const { lottoBundle, winningNumber, onCloseUserResult, onReset } = this.props;

    return (
      <div className="UserResult UserResult--open">
        {isLoading ? (
          <div className="UserResult--loading">
            {isLoading && <Animation animationData={coin} speed={1.5} height="360px" />}
          </div>
        ) : (
          <div className="UserResult__inner">
            <XButton onClick={onCloseUserResult} />
            <h2 className="UserResult__title">당첨결과</h2>
            <ResultTable lottoBundle={lottoBundle} winningNumber={winningNumber} />
            <ResultSummary result={result} />
            <div className="UserResult__reset_button_wrapper">
              <PlainButton
                className="UserResult__reset_button"
                onClick={onReset}
                text="다시 시작하기"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
