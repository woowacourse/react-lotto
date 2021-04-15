import React, { Component } from 'react';
import LottoNumberItem from '../LottoNumberItem/LottoNumberItem';
import Styled from './LottoNumberList.style';

class LottoNumberList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styled.Container>
        {Object.entries(this.props.lottoList).map(([id, numberList]) => (
          <Styled.Lotto key={id}>
            {numberList.map((number) => (
              <LottoNumberItem key={`${id}-${number}`}>{number}</LottoNumberItem>
            ))}
          </Styled.Lotto>
        ))}
      </Styled.Container>
    );
  }
}

LottoNumberList.defaultProps = {
  lottoList: {},
};

export default LottoNumberList;
