import React, { useState } from 'react';

import { Flex } from '..';
import { ShowNumberToggleButton } from './ToggleButton/ToggleButton';

import {
  Section,
  LottoList,
  LottoItem,
  LottoNumberDetails,
} from './LottoListContainer.style';

export const LottoListContainer = props => {
  const { lottos } = props;

  const [isShowNumbers, setIsShowNumbers] = useState(false);

  const handleShowNumbers = () => setIsShowNumbers(!isShowNumbers);

  const renderLottoList = () =>
    lottos?.map((lotto, idx) => (
      <LottoItem key={idx + 1}>
        <span>🎟️ </span>
        {isShowNumbers && (
          <LottoNumberDetails>{lotto.join(' ')}</LottoNumberDetails>
        )}
      </LottoItem>
    ));

  return (
    <Section aria-label="purchase-lotto">
      <Flex justifyContent="space-between" alignItems="center">
        <label>
          총 <span>{lottos.length}</span>개를 구매하였습니다.
        </label>
        <ShowNumberToggleButton onChange={handleShowNumbers} />
      </Flex>

      <LottoList isShowNumbers={isShowNumbers}>{renderLottoList()}</LottoList>
    </Section>
  );
};
