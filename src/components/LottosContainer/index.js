import React from 'react';
import {
  Root,
  FlexContainer,
  TotalPurchase,
  SwitchWrapper,
  SwitchLabel,
  ToggleSwitch,
  LottoWrapper,
  LottoItem,
  LottoNumbers,
} from './style';

const LottosContainer = ({ lottos, isSwitchOn, onToggleDisplay }) => {
  const lottoList = lottos.map((lotto, idx) => {
    return (
      <LottoItem key={idx}>💎 {isSwitchOn ? <LottoNumbers>{lotto.numbers.join(',')}</LottoNumbers> : null}</LottoItem>
    );
  });

  return (
    <Root>
      <FlexContainer>
        <TotalPurchase>총 {lottos.length}개를 구매하였습니다.</TotalPurchase>
        <SwitchWrapper>
          <SwitchLabel>
            번호보기
            <ToggleSwitch type="checkbox" checked={isSwitchOn} onChange={onToggleDisplay} />
          </SwitchLabel>
        </SwitchWrapper>
      </FlexContainer>
      <LottoWrapper isSwitchOn={isSwitchOn}>{lottoList}</LottoWrapper>
    </Root>
  );
};

export default LottosContainer;
