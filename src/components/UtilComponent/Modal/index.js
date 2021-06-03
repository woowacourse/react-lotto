import React from 'react';
import './style.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDimmer = this.onClickDimmer.bind(this);
  }

  onClickDimmer(e) {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  }

  render() {
    return (
      <div className='modal' onClick={this.onClickDimmer}>
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
