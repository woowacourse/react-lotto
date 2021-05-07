import { LOTTO_VALUE } from '../../constants';

const rankKey = ['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH'];

export default function LottoResultTable({ winningCounts }) {
  return (
    <table className="mt-3">
      <caption className="text-center mb-5 font-bold text-xll">💵 당첨 결과</caption>
      <tbody>
        <tr>
          <th className="p-2">일치 갯수</th>
          <th className="p-2">당첨금</th>
          <th className="p-2">당첨 갯수</th>
        </tr>
        {rankKey.map((key) => (
          <tr className="text-center" key={key}>
            <td className="p-2">{LOTTO_VALUE.WINNING_CONDITION_TEXT[key]}</td>
            <td className="p-2">{LOTTO_VALUE.WINNING_PRIZE[key].toLocaleString()}</td>
            <td className="p-2">
              <span>{winningCounts[LOTTO_VALUE.RANK[key]]}</span>개
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
