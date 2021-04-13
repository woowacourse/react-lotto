import { Component } from 'react';

export default class LottoItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li className="lotto-item">
        <span className="lotto-icon">🎟</span>
        <span>1, 2, 3, 4, 5, 6</span>
      </li>
    );
  }
}
