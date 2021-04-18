import { Component } from 'react';

export default class ResultSummary extends Component {
  render() {
    const { profit, rateOfReturn } = this.props.result;

    return (
      <>
        <p className="ResultSummary__profit">
          <span className="ResultSummary__description">당첨 금액</span>
          <span className="ResultSummary__value">{profit}원</span>
        </p>
        <p className="ResultSummary__rate_of_return">
          <span className="ResultSummary__description">총 수익률</span>
          <span className="ResultSummary__value">{rateOfReturn}%</span>
        </p>
      </>
    );
  }
}
