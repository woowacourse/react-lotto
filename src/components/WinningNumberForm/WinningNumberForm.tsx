import { ChangeEvent, FC, FormEvent, RefObject, useState } from 'react';
import { WinningNumberFormWrapper } from './WinningNumberForm.styles';
import Input from '../common/Input';
import { Wrapper } from '../common/Wrapper';
import Button from '../common/Button';
import { isValidWinningNumber, isWinningNumberDuplicated } from '../../services/validation';
import ALERT_MESSAGE from '../../constants/alertMessage';
import { WinningNumber } from '../../types';

interface Props {
  formRef: RefObject<HTMLFormElement>;
  handleWinningNumber: (winningNumber: WinningNumber) => void;
}

interface SetMap {
  first: (value: number) => void;
  second: (value: number) => void;
  third: (value: number) => void;
  fourth: (value: number) => void;
  fifth: (value: number) => void;
  sixth: (value: number) => void;
  bonus: (value: number) => void;
}

const isInSetMap = (name: string, setMap: SetMap): name is keyof SetMap => {
  return Object.keys(setMap).includes(name);
};

const WinningNumberForm: FC<Props> = ({ formRef, handleWinningNumber }) => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [fifth, setFifth] = useState(0);
  const [sixth, setSixth] = useState(0);
  const [bonus, setBonus] = useState(0);

  const setMap: SetMap = {
    first: (value: number) => setFirst(value),
    second: (value: number) => setSecond(value),
    third: (value: number) => setThird(value),
    fourth: (value: number) => setFourth(value),
    fifth: (value: number) => setFifth(value),
    sixth: (value: number) => setSixth(value),
    bonus: (value: number) => setBonus(value),
  };

  const handleWinningNumberInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, valueAsNumber: value } = event.target;

    if (!isValidWinningNumber(value)) {
      alert(ALERT_MESSAGE.NUMBER_RANGE_EXCEEDED);
      event.target.value = '';
      if (isInSetMap(name, setMap)) setMap[name](0);
      return;
    }

    if (isInSetMap(name, setMap)) setMap[name](value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const winningNumber = {
      numbers: [first, second, third, fourth, fifth, sixth],
      bonus,
    };

    if (isWinningNumberDuplicated(winningNumber)) {
      alert(ALERT_MESSAGE.DUPLICATED_NUMBER_EXIST);
      return;
    }

    handleWinningNumber(winningNumber);
  };

  return (
    <WinningNumberFormWrapper onSubmit={handleSubmit} ref={formRef}>
      <label className="input-label">당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label>
      <Wrapper className="winning-number-input-wrapper" display="flex">
        <div>
          <h4 className="input-caption">당첨 번호</h4>
          <Wrapper display="flex" onChange={handleWinningNumberInputChange}>
            {['first', 'second', 'third', 'fourth', 'fifth', 'sixth'].map((el, idx) => (
              <Input key={idx} type="number" name={el} required />
            ))}
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
