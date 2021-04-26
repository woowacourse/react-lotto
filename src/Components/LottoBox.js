import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import LottoContext from "../Contexts/LottoContext";

import Lotto from "./Lotto";

const Ul = styled.ul`
  ${({ isFlexBox }) =>
    isFlexBox
      ? `
        display: flex;
        flex-wrap: wrap;
        `
      : ""};
`;

export default class LottoBox extends Component {
  render() {
    return (
      <Ul isFlexBox={!this.props.isNumberVisible}>
        {this.context.state.lottos.map((lottoNumbers, index) => (
          <Lotto
            key={lottoNumbers.toString() + index}
            lottoNumbers={lottoNumbers}
            isNumberVisible={this.props.isNumberVisible}
          />
        ))}
      </Ul>
    );
  }
}

LottoBox.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
};

LottoBox.contextType = LottoContext;
