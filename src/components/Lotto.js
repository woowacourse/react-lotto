import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const List = styled.li`
  display: flex;
  align-items: center;
`;

const TicketIcon = styled.span`
  margin-right: 10px;
  font-size: 24px;
`;

export default class Lotto extends Component {
  render() {
    return (
      <List>
        <TicketIcon>🎟️</TicketIcon>
        {this.props.isNumberVisible && (
          <span>{this.props.lottoNumbers.join(", ")}</span>
        )}
      </List>
    );
  }
}

Lotto.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
  lottoNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};
