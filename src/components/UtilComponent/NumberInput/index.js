import React from 'react';
import './style.scss';

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      customClass,
      onInputFocusOut,
      onInputChange,
      isCurrentInput,
      ...attributes
    } = this.props;
    return (
      <input
        onBlur={onInputFocusOut}
        onChange={onInputChange}
        className={`number-input ${customClass}`}
        type='number'
        {...attributes}
        autoFocus={isCurrentInput ? 'autoFocus' : ''}
        required
      />
    );
  }
}

export default NumberInput;
