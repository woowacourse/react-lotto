import React from 'react';

import PropTypes from 'prop-types';

import { LOTTO } from '../../../constants/lotto';

import { Ul, Checkbox, Label } from './NumberList.style';

export const NumberList = props => {
  const { numbers, onChange } = props;

  const handleSelectNumbers = ({ target: { name } }) => onChange(Number(name));

  return (
    <Ul>
      {Array.from({ length: LOTTO.END_NUM }, (_, idx) => {
        return (
          <li key={idx + 1}>
            <Checkbox
              type="checkbox"
              id={`winningNumber${idx + 1}`}
              name={idx + 1}
              onChange={handleSelectNumbers}
              checked={numbers.includes(idx + 1)}
            />
            <Label htmlFor={`winningNumber${idx + 1}`}>{idx + 1}</Label>
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
