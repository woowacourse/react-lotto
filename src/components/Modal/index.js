import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div className="modal open">
        <div className="modal-inner p-10">
          <div className="modal-close">
            <svg viewBox="0 0 40 40" onClick={this.props.closeModal}>
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>
          {this.props.container}
        </div>
      </div>
    );
  }
}
