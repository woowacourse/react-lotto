import React from "react";
import PropTypes from "prop-types";

import LottoContainer from "../LottoContainer";
import PurchaseInput from "../PurchaseInput";
import WinningNumberInput from "../WinningNumber";
import { MainContainer } from "./style";

const Main = ({
  state: { lottos },
  action: { updateLottos, updateLottoResult, openModal },
}) => {
  return (
    <MainContainer>
      <PurchaseInput updateLottos={updateLottos} />
      {lottos.length !== 0 && <LottoContainer lottos={lottos} />}
      {lottos.length !== 0 && (
        <WinningNumberInput
          updateLottoResult={updateLottoResult}
          openModal={openModal}
        />
      )}
    </MainContainer>
  );
};

Main.propTypes = {
  state: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired,
};

export default Main;
