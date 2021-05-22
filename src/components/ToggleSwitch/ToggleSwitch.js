import React from 'react';
import Styled from './ToggleSwitch.style';

const ToggleSwitch = ({ isChecked, onChange, title }) => (
  <Styled.ToggleSwitch>
    <Styled.ToggleCheckbox type="checkbox" value={isChecked} onChange={onChange} />
    <Styled.ToggleText>{title}</Styled.ToggleText>
  </Styled.ToggleSwitch>
);

ToggleSwitch.defaultProps = {
  isChecked: false,
  onChange: () => {},
  title: '',
};

export default ToggleSwitch;
