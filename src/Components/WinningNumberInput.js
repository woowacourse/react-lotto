import React, { useCallback, useContext, useState } from "react";
import styled from "@emotion/styled";

import ErrorMessageBox from "./common/ErrorMessageBox";
import LottoContext from "../Contexts/LottoContext";
import { isDistinctNumbers } from "../utils";
import { ERROR_MESSAGE, GUIDE_MESSAGE } from "../Constants";

const Header = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputHeader = styled.h3`
  text-align: center;
`;

const InputBoxContainer = styled.div`
  display: flex;
`;

const InputBox = styled.input`
  width: 40px;
  height: 36px;
  &:not(:last-child) {
    margin-right: 7px;
  }
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 10px 0;
  background-color: #00bcd4;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #018c9e;
  }
`;

const WinningNumberInput = () => {
  const [winningNumbers, setWinningNumbers] = useState([0, 0, 0, 0, 0, 0]);
  const [bonusNumber, setBonusNumber] = useState(0);
  const [isNumbersDuplicated, setIsNumbersDuplicated] = useState(false);
  const { action } = useContext(LottoContext);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (isDistinctNumbers([...winningNumbers, bonusNumber])) {
        action.updateLottoResult(winningNumbers, bonusNumber);
        action.openModal();
      }

      setIsNumbersDuplicated(
        !isDistinctNumbers([...winningNumbers, bonusNumber])
      );
    },
    [winningNumbers, bonusNumber]
  );

  const onChangeWinningNumber = useCallback((event) => {
    setWinningNumbers((prevWinningNumbers) => {
      const newWinningNumbers = [...prevWinningNumbers];

      newWinningNumbers[event.target.dataset.winningNumbersIndex] = Number(
        event.target.value
      );

      return newWinningNumbers;
    });
  }, []);

  const onChangeBonusNumber = useCallback((event) => {
    setBonusNumber(Number(event.target.value));
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <Header>{GUIDE_MESSAGE.WINNING_NUMBER}</Header>
      <FlexContainer>
        <InputSection>
          <InputHeader>당첨 번호</InputHeader>
          <InputBoxContainer>
            {Array.from({ length: 6 }, (_, index) => (
              <InputBox
                key={index}
                data-winning-numbers-index={index}
                name="winning-number"
                type="number"
                min="1"
                max="45"
                value={winningNumbers[index] || ""}
                onChange={onChangeWinningNumber}
                required="required"
              ></InputBox>
            ))}
          </InputBoxContainer>
        </InputSection>

        <InputSection>
          <InputHeader>보너스 번호</InputHeader>
          <InputBox
            name="bonus-number"
            type="number"
            min="1"
            max="45"
            value={bonusNumber || ""}
            onChange={onChangeBonusNumber}
            required="required"
          ></InputBox>
        </InputSection>
      </FlexContainer>
      <ErrorMessageBox
        text={isNumbersDuplicated ? ERROR_MESSAGE.DUPLICATED_NUMBER : ""}
      />
      <Button type="submit">확인</Button>
    </form>
  );
};

export default WinningNumberInput;
