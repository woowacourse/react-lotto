import { Component } from 'react';

export default class EarningRateSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        당신의 총 수익률은 <span>0</span>%입니다.
      </div>
    );
  }
}
