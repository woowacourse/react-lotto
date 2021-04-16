import React, { Component } from "react";
import PropTypes from "prop-types";

import { List, TicketIcon } from "./style";

export default class Lotto extends Component {
  render() {
    const { isNumberVisible, lottoNumbers } = this.props;
    return (
      <List>
        <TicketIcon>🎟️</TicketIcon>
        {isNumberVisible && <span>{lottoNumbers.join(", ")}</span>}
      </List>
    );
  }
}

Lotto.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
  lottoNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};
