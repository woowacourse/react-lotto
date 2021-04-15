import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  margin-top: 36px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalPurchase = styled.span``;

const SwitchWrapper = styled.div``;

const SwitchLabel = styled.label``;

const ToggleSwitch = styled.input``;

const LottoWrapper = styled.div`
  display: flex;
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

export {
  Root,
  FlexContainer,
  TotalPurchase,
  SwitchWrapper,
  SwitchLabel,
  ToggleSwitch,
  LottoWrapper,
  LottoItem,
  LottoNumbers,
};
