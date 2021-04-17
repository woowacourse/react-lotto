import React, { useState } from "react";
import PropTypes from "prop-types";

import Toggle from "../common/Toggle";
import LottoBox from "../LottoBox";
import { Header } from "./style";
import { GUIDE_MESSAGE } from "../../@shared/constants/messages";

const LottoContainer = ({ lottos }) => {
  const [isToggled, setToggleState] = useState(false);

  const onToggle = (event) => {
    setToggleState(event.target.checked);
  };

  return (
    <div>
      <Header>
        <span>{GUIDE_MESSAGE.LOTTO_COUNT(lottos.length)}</span>
        <Toggle text={"번호 보기"} onToggle={onToggle} />
      </Header>
      <LottoBox isNumberVisible={isToggled} lottos={lottos} />
    </div>
  );
};

LottoContainer.propTypes = {
  lottos: PropTypes.array.isRequired,
};

export default LottoContainer;
