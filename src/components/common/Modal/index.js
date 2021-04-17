import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import { ModalClose, ModalContainer, ModalInner, Svg } from "./style";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.modalCloseSvgRef = createRef();
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  onMouseDown(event) {
    if (
      event.currentTarget === event.target ||
      event.target === this.modalCloseSvgRef.current
    ) {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <ModalContainer onMouseDown={this.onMouseDown}>
        <ModalInner>
          <ModalClose>
            <Svg viewBox="0 0 40 40" ref={this.modalCloseSvgRef}>
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </Svg>
          </ModalClose>
          {this.props.children}
        </ModalInner>
      </ModalContainer>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.any.isRequired,
};
