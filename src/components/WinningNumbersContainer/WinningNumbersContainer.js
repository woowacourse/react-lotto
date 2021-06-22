import PropTypes from 'prop-types';
import React from 'react';

import { LOTTO, MESSAGE, SIZE } from '../../constants';
import { useSelectNumbers } from '../../hooks/useSelectNumbers';
import { Button, Form } from '..';
import { BonusNumberInput } from './BonusNumberInput/BonusNumberInput';
import { NumberList } from './NumberList/NumberList';
import { FormCss } from './WinningNumbersContainer.style';

export const WinningNumbersContainer = props => {
  const { onSubmit } = props;

  const {
    bonusNumber,
    numbers,
    handleSelectNumbers,
    handleChangeBonusNumber,
  } = useSelectNumbers();

  const handleSubmitWinningNumbers = e => {
    e.preventDefault();

    if (numbers.length !== LOTTO.BUNDLE_SIZE) {
      alert(MESSAGE.SELECT_WINNING_NUMBER);
      return;
    }

    if (numbers.includes(bonusNumber)) {
      alert(MESSAGE.DUPLICATED_WINNING_NUMBER);
      return;
    }

    onSubmit(numbers, bonusNumber);
  };

  return (
    <Form onSubmit={handleSubmitWinningNumbers} css={FormCss}>
      <h2>당첨번호 입력하기</h2>
      <p>당첨 번호 6개를 선택하고, 보너스 번호를 입력해주세요</p>
      <NumberList onChange={handleSelectNumbers} numbers={numbers} />
      <BonusNumberInput
        onChangeBonusNumber={handleChangeBonusNumber}
        bonusNumber={bonusNumber}
      />
      <Button size={SIZE.LARGE}>결과 확인하기</Button>
    </Form>
  );
};

WinningNumbersContainer.prototype = {
  onSubmit: PropTypes.func,
};
