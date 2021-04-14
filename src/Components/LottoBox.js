import React, { Component } from "react";
import PropTypes from "prop-types";

import LottoContext from "../Contexts/LottoContext";

import Lotto from "./Lotto";

export default class LottoBox extends Component {
  render() {
    return (
      <ul style={{ display: this.props.isNumberVisible ? "" : "flex" }}>
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
