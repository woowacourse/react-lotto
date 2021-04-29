import React, { useContext } from "react";
import styled from "@emotion/styled";

import PurchaseInput from "./PurchaseInput";
import LottoDisplay from "./LottoDisplay";
import WinningNumberInput from "./WinningNumberInput";

import LottoContext from "../Contexts/LottoContext";

const MainContainer = styled.main`
  width: 23vw;
  min-width: 400px;
`;

const Main = () => {
  const { state } = useContext(LottoContext);
  const lottoCount = state.lottos.length;

  return (
    <MainContainer>
      <PurchaseInput />
      {lottoCount !== 0 && <LottoDisplay />}
      {lottoCount !== 0 && <WinningNumberInput />}
    </MainContainer>
  );
};

export default Main;
