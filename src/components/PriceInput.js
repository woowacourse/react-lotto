import React, { Component } from 'react';

export default class PriceInput extends Component {
  render() {
    return (
      <form>
        <label>
          <span>구입할 금액을 입력해주세요.</span>
          <input type="number" min="1000" />
        </label>
        <button>확인</button>
      </form>
    );
  }
}
