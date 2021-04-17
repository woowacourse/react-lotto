import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonText, customClass, ...attributes } = this.props;
    return (
      <button className={`submit-button ${customClass}`} {...attributes}>
        {buttonText}
      </button>
    );
  }
}

export default Button;
