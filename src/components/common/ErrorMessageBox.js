import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

export default class ErrorMessageBox extends Component {
  render() {
    return (
      <p
        css={css`
          color: red;
          text-align: center;
          margin-bottom: 0;
        `}
      >
        {this.props.text}
      </p>
    );
  }
}

ErrorMessageBox.propTypes = {
  text: PropTypes.string.isRequired,
};
