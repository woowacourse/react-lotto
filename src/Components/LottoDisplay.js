import React, { Component } from "react";
import styled from "@emotion/styled";

import LottoContext from "../Contexts/LottoContext";
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

export default class LottoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(event) {
    this.setState({
      ...this.state,
      isToggled: event.target.checked,
    });
  }

  render() {
    const lottoCount = this.context.state.lottos.length;

    return (
      <div>
        <Header>
          <span>{GUIDE_MESSAGE.LOTTO_COUNT(lottoCount)}</span>
          <Toggle text={"번호 보기"} onToggle={this.onToggle} />
        </Header>
        <LottoBox isNumberVisible={this.state.isToggled} />
      </div>
    );
  }
}

LottoDisplay.contextType = LottoContext;
