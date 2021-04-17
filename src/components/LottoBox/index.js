import React from "react";
import PropTypes from "prop-types";

import { TicketList } from "./style";
import Lotto from "../Lotto";

const LottoBox = ({ isNumberVisible, lottos }) => {
  return (
    <TicketList isNumberVisible={isNumberVisible}>
      {lottos.map((lottoNumbers) => (
        <Lotto
          key={lottoNumbers.toString()}
          lottoNumbers={lottoNumbers}
          isNumberVisible={isNumberVisible}
        />
      ))}
    </TicketList>
  );
};

LottoBox.propTypes = {
  isNumberVisible: PropTypes.bool.isRequired,
  lottos: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default LottoBox;
