import React, { useState } from "react";
import { Global } from "@emotion/react";

import { Container, GlobalStyles } from "./style";
import { deepCopyJSONObject } from "../../@shared/utils/common";
import { INITIAL_RESULT } from "../../@shared/constants/lotto";

import { createLottoResult, createLottos } from "./service";
import Main from "../Main";
import ResultModal from "../ResultModal";

const App = () => {
  const [lottos, setLottos] = useState([]);
  const [isModalOpen, setModalState] = useState(false);
  const [lottoResult, setLottoResult] = useState(
    deepCopyJSONObject(INITIAL_RESULT)
  );

  const state = {
    lottos,
    isModalOpen,
    lottoResult,
  };

  const action = {
    updateLottos: (lottoCount) => {
      const newLottos = createLottos(lottoCount);

      setLottos(newLottos);
    },

    updateLottoResult: (winningNumbers, bonusNumber) => {
      const newLottoResult = createLottoResult(
        INITIAL_RESULT,
        lottos,
        winningNumbers,
        bonusNumber
      );

      setLottoResult(newLottoResult);
    },

    openModal: () => {
      setModalState(true);
    },

    closeModal: () => {
      setModalState(false);
    },

    clear: () => {
      setLottos([]);
      setModalState(false);
      setLottoResult(deepCopyJSONObject(INITIAL_RESULT));
    },
  };

  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <h1>🎱 행운의 로또</h1>
        <Main state={state} action={action} />
        {state.isModalOpen && <ResultModal state={state} action={action} />}
      </Container>
    </>
  );
};

export default App;
