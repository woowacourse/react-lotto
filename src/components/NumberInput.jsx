import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const NumberInput = (props) => {
  return (
    <div>
      <label htmlFor={props.name} className="sr-only">
        {props.isBonus ? ' 보너스 번호' : '당첨 번호'}
      </label>
      <input
        id={props.name}
        type="number"
        name={props.name}
        className={cx(
          'appearance-textfield mx-1 w-14 h-14 text-center text-xl border rounded focus:outline-none shadow focus:ring-1.5',
          props.isValid ? 'ring-blue-700' : 'ring-rose-500',
          props.value !== '' && !props.isValid && 'ring-1.5'
        )}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
      />
    </div>
  );
};

NumberInput.propTypes = {
  isBonus: PropTypes.bool,
  isValid: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};

NumberInput.defaultProps = {
  isBonus: false,
  isValid: false,
};

export default NumberInput;
