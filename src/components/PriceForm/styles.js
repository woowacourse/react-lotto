import styled from 'styled-components';
import PALETTE from '../../constants/palette';

export const PriceFormContainer = styled.section`
  margin-bottom: 2rem;

  form {
    display: flex;

    & > * {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const PriceLabel = styled.label`
  flex-grow: 1;

  span {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  input {
    height: 50px;
    font-size: 1rem;
    padding: 0 1rem;
    border: 1px solid ${PALETTE.GRAY_006};
    border-radius: 5px;
  }
`;

export const SubmitButtonContainer = styled.div`
  justify-content: flex-end;
  margin-left: 15px;
`;
