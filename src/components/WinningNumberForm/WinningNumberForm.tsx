import { useState, useCallback } from 'react';
import { WinningNumberFormWrapper } from './WinningNumberForm.styles';
import Input from '../common/Input';
import { Wrapper } from '../common/Wrapper';
import Button from '../common/Button';
import {
  isValidWinningNumber,
  alertByWinningNumberCase,
  isWinningNumberDuplicated,
  alertByWinningNumbersCase,
} from '../../services/validation';

type WinningNumberFormProps = {
  formRef: React.RefObject<HTMLFormElement>;
  handleWinningNumber: (winningNumber: WinningNumber) => void;
};

type WinningNumberInput = {
  [key: string]: number;
};

const initialWinningNumberInput = {
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
  sixth: 0,
  bonus: 0,
};

const WinningNumberForm = ({ formRef, handleWinningNumber }: WinningNumberFormProps) => {
  const [winningNumberInput, setWinningNumberInput] = useState<WinningNumberInput>(
    initialWinningNumberInput
  );

  const handleWinningNumberInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, valueAsNumber: value } = event.target;

      if (!isValidWinningNumber(value)) {
        alertByWinningNumberCase(value);
        event.target.value = '';
        setWinningNumberInput(state => ({ ...state, [name]: 0 }));
        return;
      }

      setWinningNumberInput(state => {
        return { ...state, [name]: value };
      });
    },
    [setWinningNumberInput]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // TODO: 일단 이렇게 받아오는건 손을 좀 보자
      const { first, second, third, fourth, fifth, sixth, bonus } = winningNumberInput;
      const winningNumber = {
        numbers: [first, second, third, fourth, fifth, sixth],
        bonus,
      };

      if (isWinningNumberDuplicated(winningNumber)) {
        alertByWinningNumbersCase(winningNumber);
        return;
      }

      handleWinningNumber(winningNumber);
    },
    [winningNumberInput]
  );

  return (
    <WinningNumberFormWrapper onSubmit={handleSubmit} ref={formRef}>
      <label className="input-label">당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label>
      <Wrapper className="winning-number-input-wrapper" display="flex">
        <div>
          <h4 className="input-caption">당첨 번호</h4>
          <Wrapper display="flex" onChange={handleWinningNumberInputChange}>
            <Input type="number" name="first" required />
            <Input type="number" name="second" required />
            <Input type="number" name="third" required />
            <Input type="number" name="fourth" required />
            <Input type="number" name="fifth" required />
            <Input type="number" name="sixth" required />
          </Wrapper>
        </div>
        <div>
          <h4 className="input-caption">보너스 번호</h4>
          <Wrapper display="flex" onChange={handleWinningNumberInputChange}>
            <Input type="number" name="bonus" required />
          </Wrapper>
        </div>
      </Wrapper>
      <Button fullWidth>결과 확인하기</Button>
    </WinningNumberFormWrapper>
  );
};

export default WinningNumberForm;
