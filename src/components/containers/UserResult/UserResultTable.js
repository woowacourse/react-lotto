/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { getNumOfMatch } from './service';
import { LottoBall, Table, Thead, Tbody, TbodyRow } from '../../shared';
import { RESULT_TABLE_DATA } from '../../../constants';

export const UserResultTable = (props) => {
  const { lottoBundle, winningNumber } = props;
  const { winningNumbers, bonusNumber } = winningNumber;

  const theadItems = ['구분', '번호'];
  const getFirstCell = (lotto) => {
    const numOfMatch = getNumOfMatch(lotto, winningNumber);
    return RESULT_TABLE_DATA[numOfMatch].DESCRIPTION;
  };
  const LottoBalls = (lotto, rowIndex) =>
    lotto.map((num, index) => (
      <LottoBall
        key={`${rowIndex}th-lotto-ball-${index}`}
        targetNumber={num}
        winningNumbers={winningNumbers.concat(bonusNumber)}
      />
    ));

  return (
    <Table>
      <Thead>{theadItems}</Thead>
      <Tbody>
        {lottoBundle.map((lotto, index) => (
          <TbodyRow key={index} rowIndex={index}>
            {[getFirstCell(lotto), LottoBalls(lotto, index)]}
          </TbodyRow>
        ))}
      </Tbody>
    </Table>
  );
};

UserResultTable.propTypes = {
  lottoBundle: PropTypes.array.isRequired,
  winningNumber: PropTypes.exact({
    winningNumbers: PropTypes.array,
    bonusNumber: PropTypes.number,
  }).isRequired,
};
