import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import LottoContext from "../Contexts/LottoContext";

import Lotto from "./Lotto";

const Ul = styled.ul`
  ${({ isFlexBox }) =>
    isFlexBox
      ? `
        display: flex;
        flex-wrap: wrap;
        `
      : ""};
`;

const LottoBox = ({ isNumberVisible }) => {
  const { state } = useContext(LottoContext);

  return (
    <Ul isFlexBox={!isNumberVisible}>
      {state.lottos.map((lottoNumbers, index) => (
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
};

export default LottoBox;
