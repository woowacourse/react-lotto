import React, { useState } from 'react';
import { Root, FlexContainer, LottoWrapper, LottoItem, LottoNumbers } from './style';

export default function LottosContainer({ lottos }) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleDisplay = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const lottoItems = lottos.map((lotto, idx) => (
    <LottoItem key={idx}>💎 {isSwitchOn ? <LottoNumbers>{lotto.numbers.join(',')}</LottoNumbers> : null}</LottoItem>
  ));

  return (
    <Root>
      <FlexContainer>
        <span>총 {lottos.length}개를 구매하였습니다.</span>
        <div>
          <label>
            번호보기
            <input type="checkbox" checked={isSwitchOn} onChange={toggleDisplay} />
          </label>
        </div>
      </FlexContainer>
      <LottoWrapper isSwitchOn={isSwitchOn}>{lottoItems}</LottoWrapper>
    </Root>
  );
}
