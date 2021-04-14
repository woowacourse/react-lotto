import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Lotto extends Component {
  render() {
    return (
      <li style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "10px", fontSize: "24px" }}>🎟️</span>
        {this.props.isNumberVisible && (
          <span>{this.props.lottoNumbers.join(", ")}</span>
        )}
      </li>
    );
  }
}

Lotto.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
  lottoNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};
