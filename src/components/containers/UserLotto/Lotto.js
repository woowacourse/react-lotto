import { Component } from 'react';
import { lottoImage } from '../../../statics';
import { LOTTO_NUMBER_SEPARATOR } from '../../../constants';

export default class Lotto extends Component {
  render() {
    const { numbers } = this.props;

    return (
      <div className="Lotto">
        <img className="Lotto__image" src={lottoImage} alt="lotto" />
        <span className="Lotto__number">
          {numbers.map((v) => (v < 10 ? `0${v}` : v)).join(LOTTO_NUMBER_SEPARATOR)}
        </span>
      </div>
    );
  }
}
