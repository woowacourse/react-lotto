import React, { Component } from 'react';
import Styled from './ToggleSwitch.style';

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styled.ToggleSwitch>
        <Styled.ToggleCheckbox
          type="checkbox"
          value={this.props.isChecked}
          onChange={this.props.onChange}
        />
        <Styled.ToggleText>{this.props.title}</Styled.ToggleText>
      </Styled.ToggleSwitch>
    );
  }
}

export default ToggleSwitch;
