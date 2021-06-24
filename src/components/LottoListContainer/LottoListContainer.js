import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Flex } from '..';
import {
  LottoItem,
  LottoList,
  LottoNumberDetails,
  Section,
} from './LottoListContainer.style';
import { ShowNumberToggleButton } from './ToggleButton/ToggleButton';

export const LottoListContainer = props => {
  const { lottoList } = props;

  const [isShowNumbers, setIsShowNumbers] = useState(false);

  const handleShowNumbers = () => setIsShowNumbers(prevValue => !prevValue);

  return (
    <Section aria-label="purchase-lotto">
      <Flex justifyContent="space-between" alignItems="center">
        <label>
          총 <span>{lottoList.length}</span>개를 구매하였습니다.
        </label>
        <ShowNumberToggleButton onChange={handleShowNumbers} />
      </Flex>

      <LottoList isShowNumbers={isShowNumbers}>
        {lottoList?.map((lotto, idx) => (
          <LottoItem key={idx + 1}>
            <span>🎟️ </span>
            {isShowNumbers && (
              <LottoNumberDetails>{lotto.join(' ')}</LottoNumberDetails>
            )}
          </LottoItem>
        ))}
      </LottoList>
    </Section>
  );
};

LottoListContainer.prototype = {
  lottoList: PropTypes.array,
};
