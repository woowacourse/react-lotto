import React, { useRef, useEffect } from 'react';

import PropTypes from 'prop-types';

import { Button, Flex, Input, Form } from '..';

import { LOTTO } from '../../constants/lotto';
import { MESSAGE } from '../../constants/messages';

import { formCss, inputCss } from './PurchaseContainer.style';

export const PurchaseContainer = props => {
  const { onSubmit, disabled } = props;

  const formRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (!disabled) {
      formRef.current.reset();
      inputRef.current.focus();
    }
  }, [disabled]);

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
          disabled={disabled}
          autoFocus
          min={LOTTO.MIN_PRICE}
          max={LOTTO.MAX_PRICE}
          step={LOTTO.UNIT}
          css={inputCss}
        />
        <Button disabled={disabled}>확인</Button>
      </Flex>
    </Form>
  );
};

Input.prototype = {
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};
