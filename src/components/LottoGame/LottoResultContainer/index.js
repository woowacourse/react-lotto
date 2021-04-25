import React from 'react';
import { HIT_COUNT_BY_RANK, PROFITS } from '../../../constants/standard';

const RankCountItem = props => {
  return (
    <tr className="text-center">
      <td className="p-3">{HIT_COUNT_BY_RANK[props.rank]}</td>
      <td className="p-3">{PROFITS[props.rank]}</td>
      <td className="p-3">{props.rankCount}</td>
    </tr>
  );
};

const LottoResultContainer = props => {
  return (
    <>
      <h2 className="text-center">🏆 당첨 통계 🏆</h2>

      <div className="flex justify-center">
        <table className="border-collapse border border-black">
          <thead>
            <tr className="text-center">
              <th className="p-3">일치 갯수</th>
              <th className="p-3">당첨금</th>
              <th className="p-3">당첨 갯수</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(props.lottoResult.rankCount).map(([rank, rankCount]) => (
              <RankCountItem rank={rank} rankCount={rankCount} key={rank} />
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center font-bold">당신의 총 수익률은 {props.lottoResult.earningRate}%입니다.</p>

      <div className="flex justify-center mt-5">
        <button type="button" className="btn btn-cyan" onClick={props.restartGame}>
          다시 시작하기
        </button>
      </div>
    </>
  );
};

export default LottoResultContainer;
