import React, { useState } from "react";
import { Global } from "@emotion/react";

import { Container, GlobalStyles } from "./style";
import { deepCopyJSONObject } from "../../@shared/utils/common";
import { INITIAL_RESULT } from "../../@shared/constants/lotto";

import { createLottoResult, createLottos } from "./service";
import Main from "../Main";
import ResultModal from "../ResultModal";
import useModal from "../../hook/useModal";

const App = () => {
  const [lottos, setLottos] = useState([]);
  const [lottoResult, setLottoResult] = useState(
    deepCopyJSONObject(INITIAL_RESULT)
  );
  const { isModalOpen, closeModal, openModal } = useModal(false);

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

    openModal,

    closeModal,

    clear: () => {
      setLottos([]);
      closeModal();
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
