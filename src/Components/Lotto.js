import React, { Component } from "react";
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

export default class Lotto extends Component {
  render() {
    return (
      <Li>
        <TicketWrapper>🎟️</TicketWrapper>
        {this.props.isNumberVisible && (
          <span>{this.props.lottoNumbers.join(", ")}</span>
        )}
      </Li>
    );
  }
}

Lotto.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
  lottoNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};
