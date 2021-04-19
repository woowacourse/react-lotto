import React, { Component } from 'react';
import Styled from './LottoNumberItem.style';

class LottoNumberItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styled.Container enabled={this.props.enabled} number={Number(this.props.children)}>
        {this.props.children}
      </Styled.Container>
    );
  }
}

LottoNumberItem.defaultProps = {
  enabled: true,
};

export default LottoNumberItem;
