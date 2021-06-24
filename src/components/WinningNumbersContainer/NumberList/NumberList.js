import PropTypes from 'prop-types';
import React from 'react';

import { LOTTO } from '../../../constants';
import { Checkbox, Label, Ul } from './NumberList.style';

export const NumberList = props => {
  const { numbers, onChange } = props;

  const handleSelectNumbers = ({ target: { name } }) => {
    onChange(Number(name));
  };

  return (
    <Ul>
      {Array.from({ length: LOTTO.END_NUM }, (_, idx) => {
        const currentIndex = idx + 1;

        return (
          <li key={currentIndex}>
            <Checkbox
              type="checkbox"
              id={`winningNumber${currentIndex}`}
              name={currentIndex}
              onChange={handleSelectNumbers}
              checked={numbers.includes(currentIndex)}
            />
            <Label htmlFor={`winningNumber${currentIndex}`}>
              {currentIndex}
            </Label>
          </li>
        );
      })}
    </Ul>
  );
};

NumberList.prototype = {
  onChange: PropTypes.func,
  numbers: PropTypes.array.isRequired,
};
