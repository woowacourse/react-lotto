import React, { Component } from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";

import GlobalStyles from "../styles/GlobalStyles";
import LottoContext from "../contexts/LottoContext";
import Main from "./Main";
import ResultModal from "./ResultModal";

import { INITIAL_RESULT } from "../constants";

import { createLottoResult, createLottos, deepCopyJSONObject } from "../utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      lottos: [],
      isModalOpen: false,
      lottoResult: deepCopyJSONObject(INITIAL_RESULT),
    };

    this.state = JSON.parse(JSON.stringify(this.initialState));
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
        <LottoContext.Provider
          value={{ state: this.state, action: this.action }}
        >
          <Container>
            <h1>🎱 행운의 로또</h1>
            <Main />
            {this.state.isModalOpen && <ResultModal />}
          </Container>
        </LottoContext.Provider>
      </>
    );
  }
}
