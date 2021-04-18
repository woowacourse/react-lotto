import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  margin-top: 36px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LottoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ isSwitchOn }) => (isSwitchOn ? 'column' : 'row')};
`;

const LottoItem = styled.span`
  font-size: 24px;

  &: not(: last-child) {
    margin-bottom: 4px;
    margin-right: 2px;
  }
`;

const LottoNumbers = styled.span`
  font-size: 20px;
`;

export { Root, FlexContainer, LottoWrapper, LottoItem, LottoNumbers };
