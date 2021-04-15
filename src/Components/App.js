import React, { Component } from "react";
import styled from "@emotion/styled";
import GlobalStyles from "../Styles/GlobalStyles";

import LottoContext from "../Contexts/LottoContext";
import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";

import { createDistinctRandomIntegers } from "../utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lottos: [],
      isModalOpen: false,
      lottoResult: {
        rankCount: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        },
        earningRate: 0,
      },
    };
    this.action = {
      createLottos: (lottoCount) => {
        const lottos = Array.from({ length: lottoCount }, () =>
          createDistinctRandomIntegers(1, 45, 6)
        ); // TODO: 매직넘버 상수화

        this.setState({ ...this.state, lottos });
      },

      openModal: () => {
        this.setState({ isModalOpen: true });
      },

      closeModal: () => {
        this.setState({ isModalOpen: false });
      },
    };
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <LottoContext.Provider
          value={{ state: this.state, action: this.action }}
        >
          <Container>
            <Header />
            <Main />
            {this.state.isModalOpen && <Modal />}
          </Container>
        </LottoContext.Provider>
      </>
    );
  }
}
