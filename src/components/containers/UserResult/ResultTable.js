/* eslint-disable react/no-array-index-key */
import { getNumOfMatch } from './service';
import { LottoBall } from '../../shared';
import { RESULT_TABLE_DATA } from '../../../constants';

export const ResultTable = (props) => {
  const { lottoBundle, winningNumber } = props;
  return (
    <div className="ResultTable">
      <table className="ResultTable__table">
        <thead>
          <tr className="ResultTable__row">
            <th className="ResultTable__head">구분</th>
            <th className="ResultTable__head">번호</th>
          </tr>
        </thead>
        <tbody>
          {lottoBundle.map((v, i) => (
            <ResultTableRow key={i} lotto={v} winningNumber={winningNumber} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const ResultTableRow = (props) => {
  const { lotto, winningNumber } = props;
  const { winningNumbers, bonusNumber } = winningNumber;
  const numOfMatch = getNumOfMatch(lotto, winningNumber);

  return (
    <tr className="ResultTable__row">
      <td className="ResultTable__data">{RESULT_TABLE_DATA[numOfMatch].DESCRIPTION}</td>
      <td className="ResultTable__data">
        {lotto.map((v, i) => (
          <LottoBall key={i} targetNumber={v} winningNumbers={winningNumbers.concat(bonusNumber)} />
        ))}
      </td>
    </tr>
  );
};
