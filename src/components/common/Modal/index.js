import React, { useRef } from "react";
import PropTypes from "prop-types";
import { ModalClose, ModalContainer, ModalInner, Svg } from "./style";

const Modal = ({ closeModal, children }) => {
  const modalCloseSvgRef = useRef();
  const onMouseDown = (event) => {
    if (
      event.currentTarget === event.target ||
      event.target === modalCloseSvgRef.current
    ) {
      closeModal();
    }
  };

  return (
    <ModalContainer onMouseDown={onMouseDown}>
      <ModalInner>
        <ModalClose>
          <Svg viewBox="0 0 40 40" ref={modalCloseSvgRef}>
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </Svg>
        </ModalClose>
        {children}
      </ModalInner>
    </ModalContainer>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
