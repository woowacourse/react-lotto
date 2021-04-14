import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ErrorMessageBox extends Component {
  render() {
    return (
      <p style={{ color: "red", textAlign: "center", marginBottom: 0 }}>
        {this.props.text}
      </p>
    );
  }
}

ErrorMessageBox.propTypes = {
  text: PropTypes.string.isRequired,
};
