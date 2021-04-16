import styled from '@emotion/styled';

const Styled = {
  WinningNumber: styled.div`
    display: flex;
    align-items: center;
  `,
  PlusIcon: styled.div`
    margin-right: 0.4rem;
  `,
  ProfitRateMessage: styled.p`
    text-align: center;
    font-size: 22px;
  `,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
      margin-bottom: 1em;
    }
  `,
};

export default Styled;
