import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Switch = styled.label`
  z-index: 0;
  position: relative;

  & > input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    right: 6px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s 0.1s, transform 0.2s 0.1s;
  }

  & > span {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    line-height: 1.7;
    font-size: 14px;
  }

  & > span::before {
    content: "";
    float: right;
    display: inline-block;
    margin: 5px 0 5px 10px;
    border-radius: 7px;
    width: 36px;
    height: 14px;
    background-color: rgba(0, 0, 0, 0.38);
    vertical-align: top;
    transition: background-color 0.2s, opacity 0.2s;
  }

  & > span::after {
    content: "";
    position: absolute;
    top: 2px;
    right: 16px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: white;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    transition: background-color 0.2s, transform 0.2s;
  }

  & > input:checked {
    right: -10px;
    background-color: rgb(0, 188, 212);
  }

  & > input:checked + span::before {
    background-color: rgba(0, 188, 212, 0.6);
  }

  & > input:checked + span::after {
    background-color: rgb(0, 188, 212);
    transform: translateX(16px);
  }

  &:hover > input {
    opacity: 0.04;
  }

  & > input:focus {
    opacity: 0.12;
  }

  &:hover > input:focus {
    opacity: 0.16;
  }

  & > input:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  & > input:active + span::before {
    background-color: rgba(0, 188, 212, 0.6);
  }

  & > input:checked:active + span::before {
    background-color: rgba(0, 0, 0, 0.38);
  }

  & > input:disabled {
    opacity: 0;
  }

  & > input:disabled + span {
    color: black;
    opacity: 0.38;
    cursor: default;
  }

  & > input:disabled + span::before {
    background-color: rgba(0, 0, 0, 0.38);
  }

  & > input:checked:disabled + span::before {
    background-color: rgba(0, 188, 212, 0.6);
  }
`;

export default class Toggle extends Component {
  render() {
    const { text, onToggle } = this.props;

    return (
      <Switch htmlFor="lotto-numbers-toggle">
        <input type="checkbox" id="lotto-numbers-toggle" onChange={onToggle} />
        <span>{text}</span>
      </Switch>
    );
  }
}

Toggle.propTypes = {
  text: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};
