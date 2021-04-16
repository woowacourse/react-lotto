import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "./style";

export default class BoldText extends Component {
  render() {
    return <Text>{this.props.text}</Text>;
  }
}

BoldText.propTypes = {
  text: PropTypes.string.isRequired,
};
