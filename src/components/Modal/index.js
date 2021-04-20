import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.modalClose = this.modalClose.bind(this);
  }

  modalClose(e) {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <div className="modal open" onClick={this.modalClose}>
        <div className="modal-inner p-10">
          <button type="button" className="modal-close" onClick={this.props.closeModal}>
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          {this.props.container}
        </div>
      </div>
    );
  }
}
