import React, { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import Styled from './EnterWinning.style';
import { ALERT_MESSAGE, INPUT_NAME, LOTTO, PATH } from '../../constants';
import { initObject, isUniqueArray } from '../../utils';
import Button from '../../components/Button/Button';
import PageTitle from '../../components/PageTitle/PageTitle';

const EnterWinning = () => {
  const location = useLocation();
  const history = useHistory();

  if (!location.state) return <Redirect to="/" />;

  const [winningNumber, setWinningNumber] = useState(
    initObject(Object.values(INPUT_NAME.WINNING_NUMBER), '')
  );
  const [bonusNumber, setBonusNumber] = useState('');

  const handleChangeWinningNumber = (event) => {
    setWinningNumber((prevState) => ({
      ...prevState,
      [event.target.name]: Number(event.target.value),
    }));
  };

  const handleChangeBonusNumber = (event) => {
    setBonusNumber(Number(event.target.value));
  };

  const handleSubmitWinningNumber = (event) => {
    event.preventDefault();
    const { lottoList, moneyInput } = location.state;

    const numberList = [...Object.values(winningNumber), bonusNumber];

    if (!isUniqueArray(numberList)) {
      alert(ALERT_MESSAGE.DUPLICATED_WINNING_NUMBER);
      return;
    }

    history.push({
      pathname: PATH.RESULT,
      state: { lottoList, moneyInput, winningNumber, bonusNumber },
    });
  };

  return (
    <>
      <PageTitle>당첨 번호 입력</PageTitle>

      <p>지난 주 당첨번호를 입력해주세요</p>
      <form onSubmit={handleSubmitWinningNumber}>
        <Styled.InputGroup>
          <Styled.Fieldset>
            <legend hidden>당첨 번호 입력</legend>
            {Object.keys(winningNumber).map((key, index) => (
              <Styled.NumberInput
                key={key}
                type="number"
                min={LOTTO.MIN_NUMBER}
                max={LOTTO.MAX_NUMBER}
                name={key}
                aria-label={`${index + 1}번째 당첨 번호`}
                value={winningNumber[key]}
                onChange={handleChangeWinningNumber}
                required
                autoFocus={index === 0}
              />
            ))}
          </Styled.Fieldset>

          <Styled.PlusIcon>➕</Styled.PlusIcon>

          <label htmlFor="bonus-number" hidden>
            보너스 번호
          </label>
          <Styled.NumberInput
            type="number"
            min={LOTTO.MIN_NUMBER}
            max={LOTTO.MAX_NUMBER}
            id="bonus-number"
            name="bonus-number"
            value={bonusNumber}
            onChange={handleChangeBonusNumber}
            required
          />
        </Styled.InputGroup>
        <Button>🥁 당첨 결과 확인</Button>
      </form>
    </>
  );
};

export default EnterWinning;
