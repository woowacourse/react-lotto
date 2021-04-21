/* eslint-disable react/sort-comp */
import { Component } from 'react';
import ResultTable from './ResultTable';
import { Animation, Button, Title, XButton, Record } from '../../shared';
import { getComputedResult } from './service';
import { coin } from '../../../statics';
import './style.css';

const COIN_ANIMATION_DURATION = 1500;

export default class UserResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      result: { profit: 0, rateOfReturn: 0 },
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
    const { profit, rateOfReturn } = result;
    const { lottoBundle, winningNumber, onCloseUserResult, onReset } = this.props;

    return (
      <div className="UserResult UserResult--open">
        {isLoading ? (
          <div className="UserResult--loading">
            <Animation animationData={coin} loop="false" speed="2" height="360px" />
          </div>
        ) : (
          <div className="UserResult__inner">
            <XButton onClick={onCloseUserResult} />
            <Title>당첨결과</Title>
            <ResultTable lottoBundle={lottoBundle} winningNumber={winningNumber} />
            <div className="Record__wrapper">
              <Record label="당첨 금액">{profit}원</Record>
              <Record label="총 수익률">{rateOfReturn}%</Record>
            </div>
            <div className="UserResult__reset_button_wrapper">
              <Button type="button" className="UserResult__reset_button" onClick={onReset}>
                다시 시작하기
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
