import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Li = styled.li`
  display: flex;
  align-items: center;
`;

const TicketWrapper = styled.span`
  margin-right: 10px;
  font-size: 24px;
`;

const Lotto = ({ lottoNumbers, isNumberVisible }) => {
  return (
    <Li>
      <TicketWrapper>🎟️</TicketWrapper>
      {isNumberVisible && <span>{lottoNumbers.join(", ")}</span>}
    </Li>
  );
};

Lotto.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
  lottoNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Lotto;
