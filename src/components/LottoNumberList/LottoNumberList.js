import React, { Component } from 'react';
import { getIntersectionCount } from '../../utils';
import LottoNumberItem from '../LottoNumberItem/LottoNumberItem';
import Styled from './LottoNumberList.style';

class LottoNumberList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lottoList, winningNumber, bonusNumber } = this.props;
    const winningNumbers = Object.values(winningNumber);
    const isRequiredValidate = !!(winningNumbers.length && bonusNumber);

    return (
      <Styled.Container>
        {Object.entries(lottoList).map(([id, numberList]) => {
          const matchCount = getIntersectionCount(numberList, winningNumbers);
          const isRequiredCheckBonus = matchCount === 5;

          return (
            <Styled.Lotto key={id}>
              {numberList.map((number) => {
                const isMatchWinning = winningNumbers.includes(number);
                const isMatchBonus = isRequiredCheckBonus && bonusNumber === number;
                const isEnabled = isRequiredValidate && (isMatchWinning || isMatchBonus);

                return (
                  <LottoNumberItem
                    key={`${id}-${number}`}
                    enabled={isEnabled || !isRequiredValidate}
                  >
                    {number}
                  </LottoNumberItem>
                );
              })}
            </Styled.Lotto>
          );
        })}
      </Styled.Container>
    );
  }
}

LottoNumberList.defaultProps = {
  lottoList: {},
  winningNumber: {},
};

export default LottoNumberList;
