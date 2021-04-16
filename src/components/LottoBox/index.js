import React, { Component } from "react";
import PropTypes from "prop-types";

import { TicketList } from "./style";
import Lotto from "../Lotto";

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
