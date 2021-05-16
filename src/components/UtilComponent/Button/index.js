import React from 'react';
import './style.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { customClass, children, ...rest } = this.props;
    return (
      <button className={`submit-button ${customClass}`} {...rest}>
        {children}
      </button>
    );
  }
}

export default Button;
