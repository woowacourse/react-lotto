import React, { Component } from 'react';
import styled from 'styled-components';

const LottoLi = styled.li`
  display: flex;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

class LottoIcon extends Component {
  render() {
    return (
      <LottoLi>
        <span>🎟️ </span>
      </LottoLi>
    );
  }
}

export default LottoIcon;
