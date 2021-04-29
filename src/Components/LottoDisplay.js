import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

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

const LottoDisplay = ({ lottos }) => {
  const [isToggled, setIsToggled] = useState(false);
  const lottoCount = lottos.length;

  const onToggle = useCallback(({ target }) => {
    setIsToggled(target.checked);
  }, []);

  return (
    <div>
      <Header>
        <span>{GUIDE_MESSAGE.LOTTO_COUNT(lottoCount)}</span>
        <Toggle text={"번호 보기"} onToggle={onToggle} />
      </Header>
      <LottoBox isNumberVisible={isToggled} lottos={lottos} />
    </div>
  );
};

LottoDisplay.propTypes = {
  lottos: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default LottoDisplay;
