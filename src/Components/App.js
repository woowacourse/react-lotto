import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";

import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Container>
          <Header />
          <Main />
          <Modal />
        </Container>
      </>
    );
  }
}
