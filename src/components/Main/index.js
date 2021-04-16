import React, { Component } from "react";
import LottoContainer from "../LottoContainer";
import PurchaseInput from "../PurchaseInput";
import WinningNumberInput from "../WinningNumber";
import { MainContainer } from "./style";

export default class Main extends Component {
  render() {
    const lottoCount = this.context.state.lottos.length;

    return (
      <MainContainer>
        <PurchaseInput />
        {lottoCount !== 0 && <LottoContainer />}
        {lottoCount !== 0 && <WinningNumberInput />}
      </MainContainer>
    );
  }
}
