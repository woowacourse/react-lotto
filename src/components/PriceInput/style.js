import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Form = styled.form``;

const Label = styled.label`
  font-weight: 500;
`;

const InputWrapper = styled.div`
  height: 32px;
  margin-top: 4px;
`;

const Input = styled.input`
  height: 100%;
  width: calc(100% - 52px);
  box-sizing: border-box;
  margin-right: 4px;
  padding-left: 6px;
`;

const SubmitButton = styled.button`
  height: 100%;
  width: 48px;
  border: none;
  border-radius: 5px;
  background-color: #ffa02b;
`;

const InputErrorMessage = styled.div`
  width: 100%;
  color: red;
  font-size: 0.8rem;
  margin-top: 2px;
`;

export { Root, Form, Label, InputWrapper, Input, SubmitButton, InputErrorMessage };
