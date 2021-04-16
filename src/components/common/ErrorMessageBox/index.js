import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "./style";

export default class ErrorMessageBox extends Component {
  render() {
    return <Text>{this.props.text}</Text>;
  }
}

ErrorMessageBox.propTypes = {
  text: PropTypes.string.isRequired,
};
