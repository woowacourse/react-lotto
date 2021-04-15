import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

import LottoContext from "../Contexts/LottoContext";

import Lotto from "./Lotto";

export default class LottoBox extends Component {
  render() {
    return (
      <ul
        css={
          this.props.isNumberVisible
            ? {}
            : css`
                display: flex;
                flex-wrap: wrap;
              `
        }
      >
        {this.context.state.lottos.map((lottoNumbers, index) => (
          <Lotto
            key={lottoNumbers.toString() + index}
            lottoNumbers={lottoNumbers}
            isNumberVisible={this.props.isNumberVisible}
          />
        ))}
      </ul>
    );
  }
}

LottoBox.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
};

LottoBox.contextType = LottoContext;
