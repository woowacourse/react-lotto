import React from 'react';
import Styled from './Button.style';

const Button = (props) => <Styled.Button {...props}>{props.children}</Styled.Button>;

export default Button;
