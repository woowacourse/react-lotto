import React, { Component } from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.label`
  z-index: 0;
  position: relative;

  .toggle-button {
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
`;

export default class Toggle extends Component {
  render() {
    return (
      <ToggleWrapper>
        <input type="checkbox" className="toggle-button" />
        <span>{this.props.children}</span>
      </ToggleWrapper>
    );
  }
}
