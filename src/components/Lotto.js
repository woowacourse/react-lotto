import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

export default class Lotto extends Component {
  render() {
    return (
      <li
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <span
          css={css`
            margin-right: 10px;
            font-size: 24px;
          `}
        >
          🎟️
        </span>
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
