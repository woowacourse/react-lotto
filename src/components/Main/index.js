import React, { Component } from "react";
import PropTypes from "prop-types";

import LottoContainer from "../LottoContainer";
import PurchaseInput from "../PurchaseInput";
import WinningNumberInput from "../WinningNumber";
import { MainContainer } from "./style";

export default class Main extends Component {
  render() {
    const {
      state: { lottos },
      action: { updateLottos, updateLottoResult, openModal },
    } = this.props;
    const lottoCount = lottos.length;

    return (
      <MainContainer>
        <PurchaseInput updateLottos={updateLottos} />
        {lottoCount !== 0 && <LottoContainer lottos={lottos} />}
        {lottoCount !== 0 && (
          <WinningNumberInput
            updateLottoResult={updateLottoResult}
            openModal={openModal}
          />
        )}
      </MainContainer>
    );
  }
}

Main.propTypes = {
  state: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired,
};
