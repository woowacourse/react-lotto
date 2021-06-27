import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../shared';
import { WinningNumberSelectForm } from './WinningNumberForm.style';
import NumberList from './NumberList';
import BonusNumberInput from './BonusNumberInput';
import { LOTTO } from '../../constants/lotto';
import { MESSAGE } from '../../constants/messages';

export const WinningNumberForm = ({
  winningNumbers,
  setWinningNumbers,
  openModal,
}) => {
  const onSubmit = e => {
    e.preventDefault();

    if (winningNumbers.numbers.length < LOTTO.BUNDLE_SIZE) {
      alert(MESSAGE.SELECT_WINNING_NUMBER);
      return;
    }

    if (winningNumbers.numbers.includes(winningNumbers.bonusNumber)) {
      alert(MESSAGE.DUPLICATED_WINNING_NUMBER);
      return;
    }

    openModal();
  };

  const pickNumber = num => {
    const isDuplicated = winningNumbers.numbers.includes(num);
    const newNumbers = isDuplicated
      ? winningNumbers.numbers.filter(n => n !== num)
      : winningNumbers.numbers.concat(num);

    if (newNumbers.length === LOTTO.BUNDLE_SIZE + 1) {
      return;
    }

    setWinningNumbers({
      ...winningNumbers,
      numbers: newNumbers,
    });
  };

  const changeBonusNumber = num => {
    setWinningNumbers({
      ...winningNumbers,
      bonusNumber: num,
    });
  };

  return (
    <WinningNumberSelectForm onSubmit={onSubmit}>
      <h2>당첨번호 입력하기</h2>
      <p>당첨 번호 6개를 선택하고, 보너스 번호를 입력해주세요</p>
      <NumberList pickNumber={pickNumber} numbers={winningNumbers.numbers} />
      <BonusNumberInput changeBonusNumber={changeBonusNumber} />

      <Button size="large">결과 확인하기</Button>
    </WinningNumberSelectForm>
  );
};

WinningNumberForm.propTypes = {
  winningNumbers: PropTypes.array.isRequired,
  setWinningNumbers: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default WinningNumberForm;
