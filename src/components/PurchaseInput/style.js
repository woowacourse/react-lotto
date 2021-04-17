import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

export const Button = styled.button`
  width: 80px;
  margin-left: 5px;
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
