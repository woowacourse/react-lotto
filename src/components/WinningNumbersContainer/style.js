import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  margin-top: 36px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumberInputGuide = styled.span``;

const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form``;

const NumberInputType = styled.h4``;

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

export { Root, NumberInputGuide, Form, FlexContainer, NumbersContainer, NumberInputType, NumberInput, SubmitButton };
