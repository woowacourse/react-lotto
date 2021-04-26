import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Message = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 0;
`;

export default class ErrorMessageBox extends Component {
  render() {
    return <Message>{this.props.text}</Message>;
  }
}

ErrorMessageBox.propTypes = {
  text: PropTypes.string.isRequired,
};
