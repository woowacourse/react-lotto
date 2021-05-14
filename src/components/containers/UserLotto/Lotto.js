import React from 'react';
import PropTypes from 'prop-types';
import { lottoImage } from '../../../statics';
import { LOTTO_NUMBER_SEPARATOR } from '../../../constants';

export const Lotto = (props) => {
  const { numbers } = props;

  return (
    <div className="Lotto">
      <img className="Lotto__image" src={lottoImage} alt="lotto" />
      <span className="Lotto__number">
        {numbers.map((v) => v.toString().padStart(2, '0')).join(LOTTO_NUMBER_SEPARATOR)}
      </span>
    </div>
  );
};

Lotto.propTypes = {
  numbers: PropTypes.array.isRequired,
};
