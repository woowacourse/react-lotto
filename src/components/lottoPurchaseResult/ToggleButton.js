import React from 'react';
import PropTypes from 'prop-types';
import {
  ToggleButtonDiv,
  ToggleButtonInput,
  ToggleButtonLabel,
  ToggleButtonSpan,
} from './ToggleButton.style';

export const ToggleButton = ({ setChecked }) => {
  const onChange = e => {
    setChecked(e.target.checked);
  };

  return (
    <ToggleButtonDiv>
      <ToggleButtonInput
        id="show-details"
        onChange={onChange}
        type="checkbox"
      />

      <ToggleButtonLabel htmlFor="show-details">
        <span>번호보기</span>
        <ToggleButtonSpan id="show-number-span"></ToggleButtonSpan>
      </ToggleButtonLabel>
    </ToggleButtonDiv>
  );
};

ToggleButton.propTypes = {
  setChecked: PropTypes.func.isRequired,
};

export default ToggleButton;
