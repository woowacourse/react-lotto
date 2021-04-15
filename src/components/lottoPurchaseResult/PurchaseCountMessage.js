import React, { Component } from 'react';

class PurchaseCountMessage extends Component {
  render() {
    return (
      <label>
        총 <span>5</span>개를 구매하였습니다.
      </label>
    );
  }
}

export default PurchaseCountMessage;
