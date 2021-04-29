import { useState } from 'react';
import { WinningNumberFormWrapper } from './WinningNumberForm.styles';
import Input from '../common/Input';
import { Wrapper } from '../common/Wrapper';
import Button from '../common/Button';
import {
  isValidWinningNumber,
  alertByWinningNumberCase,
  isWinningNumberDuplicated,
} from '../../services/validation';
import { WINNING_NUMBER_INDEX, WINNING_NUMBER_LEGNTH } from '../../constants/game';
import ALERT_MESSAGE from '../../constants/alertMessage';

type WinningNumberFormProps = {
  formRef: React.RefObject<HTMLFormElement>;
  submitWinningNumber: (winningNumbers: number[]) => void;
};

const WinningNumberForm = ({ formRef, submitWinningNumber }: WinningNumberFormProps) => {
  const [winningNumberInputs, setWinningNumberInputs] = useState<number[]>(
    new Array(WINNING_NUMBER_LEGNTH).fill(0)
  );

  const handleWinningNumberInputsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: winningNumberIndex, valueAsNumber: value } = event.target;
    const newWinningInputs = [...winningNumberInputs];
    if (!isValidWinningNumber(value)) {
      alertByWinningNumberCase(value);
      event.target.value = '';
      newWinningInputs.splice(Number(winningNumberIndex), 1, 0);
      return;
    }

    newWinningInputs.splice(Number(winningNumberIndex), 1, value);
    setWinningNumberInputs(newWinningInputs);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isWinningNumberDuplicated(winningNumberInputs)) {
      alert(ALERT_MESSAGE.DUPLICATED_NUMBER_EXIST);
      return;
    }

    submitWinningNumber(winningNumberInputs);
  };

  return (
    <WinningNumberFormWrapper onSubmit={handleSubmit} ref={formRef}>
      <label className="input-label">당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label>
      <Wrapper className="winning-number-input-wrapper" display="flex">
        <div>
          <h4 className="input-caption">당첨 번호</h4>
          <Wrapper display="flex" onChange={handleWinningNumberInputsChange}>
            <Input type="number" name={String(WINNING_NUMBER_INDEX.FIRST)} required />
            <Input type="number" name={String(WINNING_NUMBER_INDEX.SECOND)} required />
            <Input type="number" name={String(WINNING_NUMBER_INDEX.THIRD)} required />
            <Input type="number" name={String(WINNING_NUMBER_INDEX.FOURTH)} required />
            <Input type="number" name={String(WINNING_NUMBER_INDEX.FIFTH)} required />
            <Input type="number" name={String(WINNING_NUMBER_INDEX.SIXTH)} required />
          </Wrapper>
        </div>
        <div>
          <h4 className="input-caption">보너스 번호</h4>
          <Wrapper display="flex" onChange={handleWinningNumberInputsChange}>
            <Input type="number" name={String(WINNING_NUMBER_INDEX.BONUS)} required />
          </Wrapper>
        </div>
      </Wrapper>
      <Button fullWidth>결과 확인하기</Button>
    </WinningNumberFormWrapper>
  );
};

export default WinningNumberForm;
