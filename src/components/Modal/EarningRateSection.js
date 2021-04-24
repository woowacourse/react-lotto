import { PRIZE_BY_RANK } from '../../constants';

export default function EarningRateSection(props) {
  const getEarnedMoney = () => {
    return Object.keys(props.winningCounts).reduce(
      (sum, key) => sum + props.winningCounts[key] * PRIZE_BY_RANK[key],
      0
    );
  };

  const calculateEarningRate = () => {
    const earnedMoney = getEarnedMoney();
    const paidMoney = props.paidMoney;

    return Math.floor(((earnedMoney - paidMoney) / paidMoney) * 100);
  };

  return (
    <div className="mt-5 text-center">
      🎉🎉 당신의 총 수익률은 <span className="font-bold">{calculateEarningRate()}</span>
      %입니다. 🎉🎉
    </div>
  );
}
