import React, { Component } from 'react';
import Styled from './LottoNumberItem.style';

class LottoNumberItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styled.Container disabled={this.props.disabled} number={Number(this.props.children)}>
        {this.props.children}
      </Styled.Container>
    );
  }
}

LottoNumberItem.defaultProps = {
  disabled: false,
};

export default LottoNumberItem;
