import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tickets from "./Tickets";
import Toggle from "./common/Toggle";

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
    const { lottoCount } = this.props;

    return (
      <div>
        <Header>
          <span>총 {lottoCount}개를 구매하였습니다.</span>
          <Toggle text={"번호 보기"} onToggle={this.onToggle} />
        </Header>
        <Tickets isNumberVisible={this.state.isToggled} />
      </div>
    );
  }
}

LottoDisplay.propTypes = {
  lottoCount: PropTypes.number.isRequired,
};
