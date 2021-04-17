import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InputHeader = styled.h3`
  text-align: center;
`;

export const InputBoxes = styled.div`
  display: flex;
`;

export const InputBox = styled.input`
  width: 40px;
  height: 36px;
  &:not(:last-child) {
    margin-right: 7px;
  }
  text-align: center;
`;

export const Button = styled.button`
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
