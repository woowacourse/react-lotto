import React, { Component } from 'react';

import { FlexBox } from './Flex.style';

class Flex extends Component {
  render() {
    const {
      children,
      flexFlow,
      justifyContent,
      alignItems,
      flexWrap,
      flexBasis,
      flexGrow,
      flexShrink,
    } = this.props;

    return (
      <FlexBox
        FlexBox={flexFlow}
        justifyContent={justifyContent}
        alignItems={alignItems}
        flexWrap={flexWrap}
        flexBasis={flexBasis}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
      >
        {children}
      </FlexBox>
    );
  }
}

export default Flex;
