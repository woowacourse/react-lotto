import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import { LOTTO, MESSAGE } from '../../constants';
import { Button, Flex, Form, Input } from '..';
import { formCss, inputCss } from './PurchaseContainer.style';

export const PurchaseContainer = props => {
  const { onSubmit, isPurchased } = props;

  const formRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (!isPurchased) {
      formRef.current.reset();
      inputRef.current.focus();
    }
  }, [isPurchased]);

  const handlePurchaseLottoInput = e => {
    e.preventDefault();

    onSubmit(e.target.elements.price.value);
  };

  return (
    <Form ref={formRef} onSubmit={handlePurchaseLottoInput} css={formCss}>
      <label htmlFor="input-price">구입할 금액을 입력해주세요.</label>
      <Flex>
        <Input
          ref={inputRef}
          type="number"
          name="price"
          placeholder={MESSAGE.INPUT_PLACEHOLDER}
          required
          disabled={isPurchased}
          autoFocus
          min={LOTTO.MIN_PRICE}
          max={LOTTO.MAX_PRICE}
          step={LOTTO.UNIT}
          css={inputCss}
        />
        <Button disabled={isPurchased}>확인</Button>
      </Flex>
    </Form>
  );
};

Input.prototype = {
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};
