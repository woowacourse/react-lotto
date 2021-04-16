import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={`submit-button ${this.props.customClass}`}>{this.props.buttonText}</button>
    );
  }
}

export default Button;
