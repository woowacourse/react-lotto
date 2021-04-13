import React, { Component } from "react";
import styled from "styled-components";

import PurchaseInput from "./PurchaseInput";
import LottoDisplay from "./LottoDisplay";
import WinningNumberInput from "./WinningNumberInput";

const Container = styled.div`
  width: 23vw;
  min-width: 300px;
`;

export default class Main extends Component {
  render() {
    return (
      <Container>
        <PurchaseInput />
        <LottoDisplay />
        <WinningNumberInput />
      </Container>
    );
  }
}
