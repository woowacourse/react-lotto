import React, { Component } from "react";
import { Global } from "@emotion/react";

import { Container, GlobalStyles } from "./style";
import { deepCopyJSONObject } from "../../@shared/utils/common";
import { INITIAL_RESULT } from "../../@shared/constants/lotto";

import { createLottoResult, createLottos } from "./utils";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      lottos: [],
      isModalOpen: false,
      lottoResult: deepCopyJSONObject(INITIAL_RESULT),
    };

    this.state = deepCopyJSONObject(this.initialState);
    this.action = {
      updateLottos: (lottoCount) => {
        const lottos = createLottos(lottoCount);

        this.setState({ lottos });
      },

      updateLottoResult: (winningNumbers, bonusNumber) => {
        const result = createLottoResult(
          INITIAL_RESULT,
          this.state.lottos,
          winningNumbers,
          bonusNumber
        );

        this.setState({ lottoResult: result });
      },

      openModal: () => {
        this.setState({ isModalOpen: true });
      },

      closeModal: () => {
        this.setState({ isModalOpen: false });
      },

      clear: () => {
        this.setState(this.initialState);
      },
    };
  }

  render() {
    return (
      <>
        <Global styles={GlobalStyles} />
        <Container>
          <h1>🎱 행운의 로또</h1>
          <Main />
          {this.state.isModalOpen && <ResultModal />}
        </Container>
      </>
    );
  }
}
