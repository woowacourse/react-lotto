import React from "react";
import PropTypes from "prop-types";

import LottoContainer from "../LottoContainer";
import PurchaseInput from "../PurchaseInput";
import WinningNumberInput from "../WinningNumber";
import { MainContainer } from "./style";
import Timer from "../common/Timer";
import { getNextSaturday } from "./service";

const Main = ({
  state: { lottos },
  action: { updateLottos, updateLottoResult, openModal },
}) => {
  return (
    <MainContainer>
      <PurchaseInput updateLottos={updateLottos} />
      {lottos.length !== 0 && (
        <>
          <Timer targetTime={getNextSaturday()} />
          <LottoContainer lottos={lottos} />
          <WinningNumberInput
            updateLottoResult={updateLottoResult}
            openModal={openModal}
          />
        </>
      )}
    </MainContainer>
  );
};

Main.propTypes = {
  state: PropTypes.oneOfType([PropTypes.object]).isRequired,
  action: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Main;
