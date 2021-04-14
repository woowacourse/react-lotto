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
  min-width: 480px;
  margin: auto;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  position: relative;
  padding: 2.5rem;

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
  }
`;

const ModalClose = styled.div`
  margin: 20px;
  width: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;

  .close-x {
    stroke: gray;
    fill: transparent;
    stroke-linecap: round;
    stroke-width: 5;
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
          <ModalClose>
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </ModalClose>
          {this.props.children}
        </ModalInner>
      </ModalWrapper>
    );
  }
}
