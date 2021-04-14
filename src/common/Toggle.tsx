import React, { Component } from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.label`
  z-index: 0;
  position: relative;

  .toggle-button {
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

  /* Span */
  .toggle-text {
    display: inline-block;
    width: 100%;
    cursor: pointer;
  }

  /* Track */
  .toggle-text::before {
    content: '';
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

  .toggle-text::after {
    content: '';
    position: absolute;
    top: 2px;
    right: 16px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: white;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
    transition: background-color 0.2s, transform 0.2s;
  }

  .toggle-button:checked {
    right: -10px;
    background-color: rgb(0, 188, 212);
  }

  .toggle-button:checked + .toggle-text::before {
    background-color: rgba(0, 188, 212, 0.6);
  }

  .toggle-button:checked + .toggle-text::after {
    background-color: rgb(0, 188, 212);
    transform: translateX(16px);
  }

  /* Hover, Focus */
  &:hover > .toggle-button {
    opacity: 0.04;
  }

  .toggle-button:focus {
    opacity: 0.12;
  }

  &:hover > .toggle-button:focus {
    opacity: 0.16;
  }

  .toggle-button:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  .toggle-button:active + .toggle-text::before {
    background-color: rgba(0, 188, 212, 0.6);
  }

  .toggle-button:checked:active + .toggle-text::before {
    background-color: rgba(0, 0, 0, 0.38);
  }

  .toggle-button:disabled {
    opacity: 0;
  }

  .toggle-button:disabled + .toggle-text {
    color: black;
    opacity: 0.38;
    cursor: default;
  }

  .toggle-button:disabled + .toggle-text::before {
    background-color: rgba(0, 0, 0, 0.38);
  }

  .toggle-button:checked:disabled + .toggle-text::before {
    background-color: rgba(0, 188, 212, 0.6);
  }
`;

export default class Toggle extends Component {
  render() {
    return (
      <ToggleWrapper>
        <input type="checkbox" className="toggle-button" />
        <span className="toggle-text">{this.props.children}</span>
      </ToggleWrapper>
    );
  }
}
