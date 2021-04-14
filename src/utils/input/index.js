import React from 'react';
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state.className = 'number-input';
  }

  render() {
    return (
      <input
        className={`number-input ${this.props.customClass}`}
        type='number'
        {...this.props}
        required
      />
    );
  }
}

export default Input;
