import React from 'react';
import './style.scss';
class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label className='switch'>
        <input type='checkbox' />
        <span className='slider round'></span>
      </label>
    );
  }
}

export default ToggleButton;
