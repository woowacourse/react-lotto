import React, { Component } from 'react';

import { StyledButton } from './styles/Button.style';

class Button extends Component {
  render() {
    return (
      <StyledButton
        type={this.props.type || 'submit'}
        size={this.props.size}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;
