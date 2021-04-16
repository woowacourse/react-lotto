import React, { Component } from "react";
import PropTypes from "prop-types";

import { TicketList } from "./style";
import Lotto from "../Lotto";

export default class LottoBox extends Component {
  render() {
    const { isNumberVisible, lottos } = this.props;

    return (
      <TicketList isNumberVisible={isNumberVisible}>
        {lottos.map((lottoNumbers, index) => (
          <Lotto
            key={lottoNumbers.toString() + index}
            lottoNumbers={lottoNumbers}
            isNumberVisible={isNumberVisible}
          />
        ))}
      </TicketList>
    );
  }
}

LottoBox.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
  lottos: PropTypes.array.isRequired,
};
