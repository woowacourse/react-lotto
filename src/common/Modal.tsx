import React, { Component } from 'react';
import styled, { css } from 'styled-components';

type ModalWrapperProps = {
  open?: boolean;
};

const modalOpen = css`
  opacity: 1;
  visibility: visible;
`;

const ModalWrapper = styled.div<ModalWrapperProps>`
  opacity: 0;
  visibility: hidden;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.25s ease;
  z-index: 2;
  ${({ open }) => open && modalOpen};
`;

const ModalInner = styled.div`
  transition: top 0.25s ease;
  max-width: 350px;
  margin: auto;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
    box-sizing: border-box;
  }
`;

type ModalProps = {
  open?: boolean;
};

export default class Modal extends Component<ModalProps> {
  render() {
    return (
      <ModalWrapper open={this.props.open}>
        <ModalInner>
          <div className="modal-close">
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>
          {this.props.children}
        </ModalInner>
      </ModalWrapper>
    );
  }
}
