import React, { Component } from "react";

import { Header } from "./style";

import Toggle from "../common/Toggle";
import LottoBox from "../LottoBox";
import { GUIDE_MESSAGE } from "../../@shared/constants/messages";

export default class LottoContainer extends Component {
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
