import React, { Component } from "react";
import PropTypes from "prop-types";

import Toggle from "../common/Toggle";
import LottoBox from "../LottoBox";
import { Header } from "./style";
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
    const { lottos } = this.props;
    const lottoCount = lottos.length;
    const { isToggled } = this.state;

    return (
      <div>
        <Header>
          <span>{GUIDE_MESSAGE.LOTTO_COUNT(lottoCount)}</span>
          <Toggle text={"번호 보기"} onToggle={this.onToggle} />
        </Header>
        <LottoBox isNumberVisible={isToggled} lottos={lottos} />
      </div>
    );
  }
}

LottoContainer.propTypes = {
  lottos: PropTypes.array.isRequired,
};
