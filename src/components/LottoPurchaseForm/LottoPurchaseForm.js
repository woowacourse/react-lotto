import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../shared/';
import {
  PurchaseInputForm,
  PurchaseFormFlexDiv,
  PurchaseInput,
} from './LottoPurchaseForm.style';
import { useInput } from '../../hooks';
import { LOTTO } from '../../constants/lotto';
import { MESSAGE } from '../../constants/messages';

export const LottoPurchaseForm = ({ purchaseLotto, isPurchased }) => {
  const [price, onChangePrice, clearValue] = useInput(0);

  const onSubmit = e => {
    e.preventDefault();

    purchaseLotto(price);
  };

  useEffect(() => {
    if (!isPurchased) {
      clearValue();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPurchased]);

  return (
    <PurchaseInputForm onSubmit={onSubmit}>
      <label htmlFor="input-price">구입할 금액을 입력해주세요.</label>
      <PurchaseFormFlexDiv>
        <PurchaseInput
          type="number"
          name="price"
          value={price}
          onChange={onChangePrice}
          placeholder={MESSAGE.INPUT_PLACEHOLDER}
          min={LOTTO.MIN_PRICE}
          max={LOTTO.MAX_PRICE}
          step={LOTTO.UNIT}
          required
        />
        <Button>확인</Button>
      </PurchaseFormFlexDiv>
    </PurchaseInputForm>
  );
};

LottoPurchaseForm.propTypes = {
  purchaseLotto: PropTypes.func.isRequired,
  isPurchased: PropTypes.bool.isRequired,
};

export default LottoPurchaseForm;
