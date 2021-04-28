import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className={`modal ${this.props.isModalOpen ? "open" : ""}`}>
        <div className="modal-inner p-10">
          <div className="modal-close" onClick={this.props.closeModal}>
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>

          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
