import styled from 'styled-components';

export const BonusNumberInputWrapperDiv = styled.div`
  margin-bottom: 1rem;

  & p {
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    text-align: center;
    font-weight: bold;
  }
`;

export const NumberInput = styled.input`
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  text-align: center;
  width: 40px;
  height: 36px;
  font-size: 1rem;
  font-weight: bold;
  color: #c71f1f;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
