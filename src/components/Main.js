import React, { Component } from "react";
import styled from "@emotion/styled";

import PurchaseInput from "./PurchaseInput";
import LottoDisplay from "./LottoDisplay";
import WinningNumberInput from "./WinningNumberInput";

import LottoContext from "../contexts/LottoContext";

const MainContainer = styled.main`
  width: 23vw;
  min-width: 400px;
`;

export default class Main extends Component {
  render() {
    const lottoCount = this.context.state.lottos.length;

    return (
      <MainContainer>
        <PurchaseInput />
        {lottoCount !== 0 && <LottoDisplay />}
        {lottoCount !== 0 && <WinningNumberInput />}
      </MainContainer>
    );
  }
}

Main.contextType = LottoContext;
