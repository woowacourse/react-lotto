import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import LottoContext from "../contexts/LottoContext";
import Lotto from "./Lotto";

const TicketList = styled.ul`
  ${({ isNumberVisible }) =>
    !isNumberVisible ? "display: flex; flex-wrap: wrap;" : ""}
`;

export default class LottoBox extends Component {
  render() {
    return (
      <TicketList isNumberVisible={this.props.isNumberVisible}>
        {this.context.state.lottos.map((lottoNumbers, index) => (
          <Lotto
            key={lottoNumbers.toString() + index}
            lottoNumbers={lottoNumbers}
            isNumberVisible={this.props.isNumberVisible}
          />
        ))}
      </TicketList>
    );
  }
}

LottoBox.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
};

LottoBox.contextType = LottoContext;
