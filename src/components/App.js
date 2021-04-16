import React, { Component } from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";

import GlobalStyles from "../styles/GlobalStyles";
import LottoContext from "../contexts/LottoContext";
import Main from "./Main";
import Modal from "./Modal";

import {
  LOTTO_PRICE,
  LOTTO_RANGE,
  LOTTO_LENGTH,
  INITIAL_RESULT,
} from "../constants";

import {
  calculateEarningRate,
  createDistinctRandomIntegers,
  deepCopyJSONObject,
  getRanking,
} from "../utils";

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
      createLottos: (lottoCount) => {
        const lottos = Array.from({ length: lottoCount }, () =>
          createDistinctRandomIntegers(
            LOTTO_RANGE.FROM,
            LOTTO_RANGE.TO,
            LOTTO_LENGTH
          )
        );

        this.setState({ lottos });
      },

      updateLottoResult: (winningNumbers, bonusNumber) => {
        const result = deepCopyJSONObject(INITIAL_RESULT);

        const price = this.state.lottos.length * LOTTO_PRICE;

        this.state.lottos.forEach((lotto) => {
          const ranking = getRanking(lotto, winningNumbers, bonusNumber);
          result.rankCount[ranking] += 1;
        });

        result.earningRate = calculateEarningRate(result.rankCount, price);

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
            {this.state.isModalOpen && <Modal />}
          </Container>
        </LottoContext.Provider>
      </>
    );
  }
}
