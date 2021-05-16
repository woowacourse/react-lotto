import React from 'react';
import './style.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonText, customClass, ...attributes } = this.props;
    return (
      <button className={`submit-button ${customClass}`} {...attributes}>
        {buttonText}
        {this.props.children && this.props.children}
      </button>
    );
  }
}

export default Button;
