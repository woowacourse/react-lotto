import React, { Component } from 'react';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${props => props.marginTop};
`;

class Flex extends Component {
  render() {
    return <FlexBox>{this.props.children}</FlexBox>;
  }
}

export default Flex;
