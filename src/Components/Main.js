import React, { Component } from "react";
import styled from "styled-components";

import PurchaseInput from "./PurchaseInput";
import LottoDisplay from "./LottoDisplay";
import WinningNumberInput from "./WinningNumberInput";

const Container = styled.div`
  width: 23vw;
  min-width: 400px;
`;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lottoCount: 0,
    };
    this.setLottoCount = this.setLottoCount.bind(this);
  }

  setLottoCount(number) {
    this.setState({ ...this.state, lottoCount: number });
  }

  render() {
    return (
      <Container>
        <PurchaseInput setLottoCount={this.setLottoCount} />
        {this.state.lottoCount ? <LottoDisplay /> : ""}
        {this.state.lottoCount ? <WinningNumberInput /> : ""}
      </Container>
    );
  }
}
