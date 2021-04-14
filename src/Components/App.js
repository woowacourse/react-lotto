import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";

import LottoContext from "../Contexts/LottoContext";
import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";

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
    };
    this.action = {
      createLottos: (lottoNumber) => {
        let lottos;

        if (lottoNumber) {
          lottos = [
            [1, 2, 3, 4, 5, 6],
            [2, 3, 4, 5, 6, 7],
          ];
        } else {
          lottos = [];
        }

        this.setState({ ...this.state, lottos });
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
            <Modal />
          </Container>
        </LottoContext.Provider>
      </>
    );
  }
}
