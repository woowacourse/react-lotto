import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Lotto from "./Lotto";

const Ul = styled.ul`
  ${({ isFlexBox }) =>
    isFlexBox
      ? `
        display: flex;
        flex-wrap: wrap;
        `
      : ""};

  max-height: 40vh;
  overflow: scroll;
`;

const LottoBox = ({ isNumberVisible, lottos }) => {
  return (
    <Ul isFlexBox={!isNumberVisible}>
      {lottos.map((lottoNumbers, index) => (
        <Lotto
          key={lottoNumbers.toString() + index}
          lottoNumbers={lottoNumbers}
          isNumberVisible={isNumberVisible}
        />
      ))}
    </Ul>
  );
};

LottoBox.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
  lottos: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default LottoBox;
