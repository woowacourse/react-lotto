import React, { Component } from 'react';
import Styled from './LottoNumberList.style';

class LottoNumberList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {Object.entries(this.props.lottoList).map(([id, numberList]) => (
          <li key={id}>
            {numberList.map((number) => (
              <span key={`${id}-${number}`}>{number} </span>
            ))}
          </li>
        ))}
      </ul>
    );
  }
}

LottoNumberList.defaultProps = {
  lottoList: {},
};

export default LottoNumberList;
