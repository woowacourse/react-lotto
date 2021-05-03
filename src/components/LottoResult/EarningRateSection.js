import { PRIZE_BY_RANK } from '../../constants';

export default function EarningRateSection({ winningCounts, paidMoney }) {
  const earnedMoney = Object.keys(winningCounts).reduce(
    (sum, key) => sum + winningCounts[key] * PRIZE_BY_RANK[key],
    0
  );
  const earningRate = Math.floor(((earnedMoney - paidMoney) / paidMoney) * 100);

  return (
    <div className="mt-5 text-center">
      🎉🎉 당신의 총 수익률은 <span className="font-bold">{earningRate}</span>
      %입니다. 🎉🎉
    </div>
  );
}
