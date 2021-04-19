import styled from '@emotion/styled';

const Styled = {
  WinningNumber: styled.div`
    display: flex;
    align-items: center;
  `,
  NumberWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  NumberBorder: styled.div`
    padding: 0.6rem 0.4rem 0.6rem 0.8rem;
    border: 1px solid lightgray;
    border-radius: 4px;
  `,
  NumberText: styled.p`
    font-size: 15px;
    color: #707070;
    margin: 0;
    text-align: center;
  `,
  PlusIcon: styled.div`
    margin: 0 0.4rem;
  `,
  ProfitRateMessage: styled.p`
    text-align: center;
    font-size: 22px;
  `,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;

    button {
      margin-bottom: 1em;
    }
  `,
};

export default Styled;
