import React, { Component } from 'react';

import { FlexBox } from './styles/FlexBox.style';

class Flex extends Component {
  render() {
    return <FlexBox>{this.props.children}</FlexBox>;
  }
}

export default Flex;
