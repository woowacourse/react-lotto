import React from 'react';
import Styled from './LottoNumberItem.style';

const LottoNumberItem = (props) => (
  <Styled.Container
    enabled={props.enabled}
    number={Number(props.children)}
    {...props}
  ></Styled.Container>
);

LottoNumberItem.defaultProps = {
  enabled: true,
};

export default LottoNumberItem;
