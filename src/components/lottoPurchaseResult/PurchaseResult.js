import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  PurchaseResultSection,
  PurchaseResultMessageDiv,
} from './PurchaseResult.style';
import LottoIconList from './LottoIconList';
import LottoDetailList from './LottoDetailList';
import ToggleButton from './ToggleButton';

export const PurchaseResult = ({ lottos }) => {
  const [checked, setChecked] = useState(false);

  return (
    <PurchaseResultSection aria-label="purchase-lotto">
      <PurchaseResultMessageDiv>
        <label>
          총 <span>{lottos.length}</span>개를 구매하였습니다.
        </label>
        <ToggleButton setChecked={setChecked} />
      </PurchaseResultMessageDiv>

      {checked ? (
        <LottoDetailList lottos={lottos} />
      ) : (
        <LottoIconList lottoCount={lottos.length} />
      )}
    </PurchaseResultSection>
  );
};

PurchaseResult.propTypes = {
  lottos: PropTypes.array.isRequired,
};

export default PurchaseResult;
