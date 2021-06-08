import React from 'react';
import { RESULT_TABLE_DATA } from '../../constants/lottoRules';
import LottoBall from '../LottoBall/LottoBall';
import './TableRow.styles.css';

const TableRow = ({ lotto, numOfMatch, winningNumbers }) => {
  return (
    <tr className="table-row">
      <td className="table-data">{RESULT_TABLE_DATA[numOfMatch].DESCRIPTION}</td>
      <td className="table-data">
        {lotto.map((v, i) => (
          <LottoBall key={i} ballNumber={v} winningNumbers={winningNumbers} />
        ))}
      </td>
    </tr>
  );
};

export default TableRow;
