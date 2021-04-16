import React, { Component } from 'react';
import Styled from './ToggleSwitch.style';

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isChecked, onChange, title } = this.props;

    return (
      <Styled.ToggleSwitch>
        <Styled.ToggleCheckbox type="checkbox" value={isChecked} onChange={onChange} />
        <Styled.ToggleText>{title}</Styled.ToggleText>
      </Styled.ToggleSwitch>
    );
  }
}

ToggleSwitch.defaultProps = {
  isChecked: false,
  onChange: () => {},
  title: '',
};

export default ToggleSwitch;
