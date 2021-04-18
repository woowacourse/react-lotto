import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  margin-top: 36px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NumberInput = styled.input`
  width: 28px;
  height: 32px;
  text-align: center;

  &: not(: last-child) {
    margin-right: 6px;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const SubmitButton = styled.button`
  height: 32px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #ffa02b;
  margin-top: 12px;
`;

const InputErrorMessage = styled.div`
  width: 100%;
  color: red;
  font-size: 0.8rem;
  margin-top: 2px;
`;

export { Root, FlexContainer, NumbersContainer, NumberInput, SubmitButton, InputErrorMessage };
