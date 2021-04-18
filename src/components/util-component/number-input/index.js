import React from 'react';
import './style.scss';

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { customClass, ...attributes } = this.props;
    return (
      <input className={`number-input ${customClass}`} type='number' {...attributes} required />
    );
  }
}

export default NumberInput;
