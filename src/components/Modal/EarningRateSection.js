import { Component } from 'react';
import { PRIZE_BY_RANK } from '../../constants';
export default class EarningRateSection extends Component {
  getEarnedMoney = () => {
    return Object.keys(this.props.winningCounts).reduce(
      (sum, key) => sum + this.props.winningCounts[key] * PRIZE_BY_RANK[key],
      0
    );
  };

  calculateEarningRate = () => {
    const earnedMoney = this.getEarnedMoney();
    const paidMoney = this.props.paidMoney;

    return Math.floor(((earnedMoney - paidMoney) / paidMoney) * 100);
  };

  render() {
    return (
      <div className="mt-5 text-center">
        🎉🎉 당신의 총 수익률은 <span className="font-bold">{this.calculateEarningRate()}</span>
        %입니다. 🎉🎉
      </div>
    );
  }
}
