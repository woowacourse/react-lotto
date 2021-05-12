import React from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonContainer } from './styles';

const ToggleButton = ({ label, onChange }) => {
  return (
    <ToggleButtonContainer>
      <input type="checkbox" onChange={onChange} />
      <span>{label}</span>
    </ToggleButtonContainer>
  );
};

ToggleButton.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToggleButton;
