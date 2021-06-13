import React, { Component } from 'react';

import {
  ModalSection,
  ModalInnerDiv,
  ModalCloseButton,
  HiddenButtonName,
} from './Modal.style';
export class Modal extends Component {
  handleCloseModal = ({ currentTarget, target }) => {
    const isDimmedClicked = currentTarget === target;
    const isCloseButtonClicked = target.classList.contains('close-modal');

    if (!isDimmedClicked && !isCloseButtonClicked) return;
    this.props.handleModalClosed();
  };

  render() {
    const {
      children,
      backgroundColor,
      transition,
      innerMaxWidth,
      innerBackgroundColor,
      innerMargin,
      innerPadding,
      innerTransition,
      closeButtonWidth,
      closeButtonHeight,
      closeButtonRightPosition,
      closeButtonTopPosition,
      closeButtonPathStroke,
      closeButtonPathStrokeWidth,
    } = this.props;

    return (
      <ModalSection
        role="dialog"
        aria-modal="true"
        aria-labelledby="title-dialog"
        onClick={this.handleCloseModal}
        backgroundColor={backgroundColor}
        transition={transition}
      >
        <ModalInnerDiv
          innerMaxWidth={innerMaxWidth}
          innerBackgroundColor={innerBackgroundColor}
          innerMargin={innerMargin}
          innerPadding={innerPadding}
          innerTransition={innerTransition}
        >
          <ModalCloseButton
            className="close-modal"
            type="button"
            aria-label="close-button"
            onClick={this.handleCloseModal}
            closeButtonWidth={closeButtonWidth}
            closeButtonHeight={closeButtonHeight}
            closeButtonRightPosition={closeButtonRightPosition}
            closeButtonTopPosition={closeButtonTopPosition}
            closeButtonPathStroke={closeButtonPathStroke}
            closeButtonPathStrokeWidth={closeButtonPathStrokeWidth}
          >
            <svg aria-hidden="true" className="close-modal" viewBox="0 0 40 40">
              <path
                className="close-modal"
                d="M 10, 10 L 30,30 M 30,10 L 10,30"
              />
            </svg>
            <HiddenButtonName>닫기 버튼</HiddenButtonName>
          </ModalCloseButton>
          {children}
        </ModalInnerDiv>
      </ModalSection>
    );
  }
}
