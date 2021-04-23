import React, { useState } from 'react';
import { WinningNumberFormWrapper } from './WinningNumberForm.styles';
import Input from '../common/Input';
import Wrapper from '../common/Wrapper';
import Button from '../common/Button';
import {
  isValidWinningNumber,
  alertByWinningNumberCase,
  isWinningNumberDuplicated,
  alertByWinningNumbersCase,
} from '../../services/validation';

type Props = {
  formRef: React.RefObject<HTMLFormElement>;
  handleWinningNumber: (winningNumber: WinningNumber) => void;
};

type State = {
  [key: string]: number;
};

const WinningNumberForm = ({ handleWinningNumber, formRef }: Props) => {
  const [state, setState] = useState<State>({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    sixth: 0,
    bonus: 0,
  });

  const handleWinningNumberInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, valueAsNumber: value } = event.target;

    if (!isValidWinningNumber(value)) {
      alertByWinningNumberCase(value);
      event.target.value = '';
      setState({ ...state, [name]: 0 });
      return;
    }

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { first, second, third, fourth, fifth, sixth, bonus } = state;
    const winningNumber = {
      numbers: [first, second, third, fourth, fifth, sixth],
      bonus,
    };

    if (isWinningNumberDuplicated(winningNumber)) {
      alertByWinningNumbersCase(winningNumber);
      return;
    }

    handleWinningNumber(winningNumber);
  };

  return (
    <WinningNumberFormWrapper onSubmit={handleSubmit} ref={formRef}>
      <label className="input-label">
        <span>당첨번호 6개</span>와 <span>보너스 번호 1개</span>를 입력해주세요.
      </label>
      <Wrapper className="winning-number-input-wrapper" display="flex">
        <div>
          <Wrapper display="flex" onChange={handleWinningNumberInputChange}>
            <Input className="input-caption" type="number" name="first" required />
            <Input className="input-caption" type="number" name="second" required />
            <Input className="input-caption" type="number" name="third" required />
            <Input className="input-caption" type="number" name="fourth" required />
            <Input className="input-caption" type="number" name="fifth" required />
            <Input className="input-caption" type="number" name="sixth" required />
          </Wrapper>
        </div>
        +
        <div>
          <Wrapper display="flex" onChange={handleWinningNumberInputChange}>
            <Input className="input-caption" type="number" name="bonus" required />
          </Wrapper>
        </div>
      </Wrapper>
      <Button fullWidth>결과 확인하기</Button>
    </WinningNumberFormWrapper>
  );
};

export default WinningNumberForm;
