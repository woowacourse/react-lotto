import React, { Component } from 'react';
import LottoDetail from './LottoDetail';
import styled from 'styled-components';

const DetailListUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
  padding: 0.6rem;
  max-height: 200px;
  overflow-y: auto;
  border: 0.5px solid #e9e2e2;
  border-radius: 5px;
`;

class LottoDetailList extends Component {
  render() {
    const { lottos } = this.props;

    return (
      <DetailListUl>
        {lottos.map((lotto, idx) => (
          <LottoDetail key={idx} lotto={lotto} />
        ))}
      </DetailListUl>
    );
  }
}
export default LottoDetailList;
