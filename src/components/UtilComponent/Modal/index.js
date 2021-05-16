import React from 'react';
import './style.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickDimmer(e) {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  }

  render() {
    return (
      <div className='modal' onClick={(e) => this.onClickDimmer(e)}>
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
