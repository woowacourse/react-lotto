import React, { Component } from 'react';

import { StyledButton } from './Button.style';

class Button extends Component {
  render() {
    const {
      type,
      minWidth,
      onClick,
      disabled,
      autoFocus,
      form,
      name,
      value,
      backgroundColor,
      borderColor,
      color,
    } = this.props;

    return (
      <StyledButton
        type={type || 'submit'}
        onClick={onClick}
        disabled={disabled}
        autoFocus={autoFocus}
        form={form}
        name={name}
        value={value}
        minWidth={minWidth}
        backgroundColor={backgroundColor || '#c71f1f'}
        borderColor={borderColor || '#c71f1f'}
        color={color || '#fce9e9'}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;
