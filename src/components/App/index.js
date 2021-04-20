import React, { Component } from 'react';
import LottoGame from '../LottoGame';

export default class App extends Component {
  render() {
    return (
      <div id="app" className="p-3">
        <LottoGame />
      </div>
    );
  }
}
