import styled from '@emotion/styled';

const Styled = {
  Form: styled.form`
    display: flex;
    justify-content: space-between;
  `,
  InputGroup: styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0;
  `,
  Fieldset: styled.fieldset`
    border: none;
    padding: 0;
    margin: 0;
  `,
  NumberInput: styled.input`
    max-width: 20px;
    padding: 0.4rem;
    font-size: 16px;
    text-align: center;

    & + & {
      margin-left: 0.4rem;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `,
  PlusIcon: styled.div`
    margin: 0 0.4rem;
  `,
};

export default Styled;
