import { Component } from 'react';

export default class EarningRateSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mt-5 text-center">
        🎉🎉 당신의 총 수익률은 <span className="font-bold">0</span>%입니다. 🎉🎉
      </div>
    );
  }
}
