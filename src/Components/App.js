import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}
