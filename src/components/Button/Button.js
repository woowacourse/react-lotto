import React, { Component } from 'react';
import Styled from './Button.style';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Styled.Button {...this.props}>{this.props.children}</Styled.Button>;
  }
}

export default Button;
