import React from 'react';
import './style.scss';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleToggle = this.onHandleToggle.bind(this);
  }

  onHandleToggle() {
    this.props.onHandleToggle();
  }

  render() {
    return (
      <label className='switch'>
        <input type='checkbox' onClick={this.onHandleToggle} />
        <span className='slider round'></span>
      </label>
    );
  }
}

export default ToggleButton;
