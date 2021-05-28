import styled from 'styled-components';

export const RewardResultTitle = styled.h2`
  text-align: center;
`;

export const RewardResultWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RewardTable = styled.table`
  border-collapse: collapse;
  border: 3px solid #eb7a7a;

  & tr {
    text-align: center;

    & th,
    td {
      padding: 0.75rem;
      border-bottom: 1.5px solid #f5bdbd;
    }
  }
`;

export const ProfitMessage = styled.p`
  text-align: center;

  & span {
    margin: 0 0.3rem;
    font-weight: bold;
    color: #c71f1f;
  }
`;
