import React, { Component } from 'react';

import { StyledButton } from './styles/Button.style';

class Button extends Component {
  render() {
    const { type, size, onClick } = this.props;

    return (
      <StyledButton type={type || 'submit'} size={size} onClick={onClick}>
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;
