import React, { Component } from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";

import GlobalStyles from "../Styles/GlobalStyles";
import LottoContext, { LottoContextProvider } from "../Contexts/LottoContext";
import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";

import LottoResult from "./LottoResult";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class App extends Component {
  render() {
    return (
      <>
        <Global styles={GlobalStyles} />
        <LottoContextProvider>
          <Container>
            <Header />
            <Main />
            {this.context.state.isModalOpen && (
              <Modal>
                <LottoResult />
              </Modal>
            )}
          </Container>
        </LottoContextProvider>
      </>
    );
  }
}

App.contextType = LottoContext;
