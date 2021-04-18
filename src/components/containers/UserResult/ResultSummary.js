import { Component } from 'react';

export default class ResultSummary extends Component {
  render() {
    const { profit, rateOfReturn } = this.props.result;

    return (
      <>
        <p className="profit">
          <span className="description">당첨 금액</span>
          <span className="value">{profit}원</span>
        </p>
        <p className="rate-of-return">
          <span className="description">총 수익률</span>
          <span className="value">{rateOfReturn}%</span>
        </p>
      </>
    );
  }
}
