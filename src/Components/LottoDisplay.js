import React, { useCallback, useContext, useState } from "react";
import styled from "@emotion/styled";

import LottoContext from "../Contexts/LottoContext";
import LottoBox from "./LottoBox";
import Toggle from "./common/Toggle";
import { GUIDE_MESSAGE } from "../Constants";

const Header = styled.h2`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 16px;
  font-weight: normal;
  align-items: center;
`;

const LottoDisplay = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { state } = useContext(LottoContext);
  const lottoCount = state.lottos.length;

  const onToggle = useCallback(({ target }) => {
    setIsToggled(target.checked);
  }, []);

  return (
    <div>
      <Header>
        <span>{GUIDE_MESSAGE.LOTTO_COUNT(lottoCount)}</span>
        <Toggle text={"번호 보기"} onToggle={onToggle} />
      </Header>
      <LottoBox isNumberVisible={isToggled} />
    </div>
  );
};

export default LottoDisplay;
