import React from "react";
import PropTypes from "prop-types";

import { List, TicketIcon } from "./style";

const Lotto = ({ isNumberVisible, lottoNumbers }) => {
  return (
    <List>
      <TicketIcon>🎟️</TicketIcon>
      {isNumberVisible && <span>{lottoNumbers.join(", ")}</span>}
    </List>
  );
};

Lotto.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
  lottoNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Lotto;
