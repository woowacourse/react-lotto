import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Text = styled.p`
  font-weight: bold;
`;

export default class BoldText extends Component {
  render() {
    return <Text>{this.props.text}</Text>;
  }
}

BoldText.propTypes = {
  text: PropTypes.string.isRequired,
};
