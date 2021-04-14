import React, { Component } from "react";
import styled from "styled-components";

import PurchaseInput from "./PurchaseInput";
import LottoDisplay from "./LottoDisplay";
import WinningNumberInput from "./WinningNumberInput";

import LottoContext from "../Contexts/LottoContext";

const Container = styled.div`
  width: 23vw;
  min-width: 400px;
`;

export default class Main extends Component {
  render() {
    const lottoCount = this.context.state.lottos.length;

    return (
      <Container>
        <PurchaseInput />
        {lottoCount !== 0 && <LottoDisplay />}
        {lottoCount !== 0 && <WinningNumberInput />}
      </Container>
    );
  }
}

Main.contextType = LottoContext;
