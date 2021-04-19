import React, { Component } from 'react';
import RestartButton from './RestartButton';
import RewardResultTable from './RewardResultTable';
import styled from 'styled-components';

const ModalSection = styled.section`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.25s ease;
  z-index: 2;
`;

const ModalInner = styled.div`
  transition: top 0.25s ease;
  max-width: 350px;
  margin: auto;
  padding: 2.5rem;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  position: relative;

  @media screen and (max-width: 768px) {
    .modal-inner {
      width: 90%;
      height: 90%;
      box-sizing: border-box;
    }
  }
`;

const ModalCloseButton = styled.button`
  padding: 0;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;

const Svg = styled.svg`
  display: inline-block;
  margin: 0;
  padding: 0;

  & path {
    stroke: gray;
    fill: transparent;
    stroke-linecap: round;
    stroke-width: 5;
  }
`;
class RewardResultModal extends Component {
  handleCloseModal = ({ currentTarget, target }) => {
    const isDimmedClicked = currentTarget === target;
    const isCloseButtonClicked = target.classList.contains('close-modal');

    if (!isDimmedClicked && !isCloseButtonClicked) return;
    this.props.setIsModalOpened(false);
  };

  render() {
    return (
      <ModalSection
        role="dialog"
        aria-modal="true"
        aria-labelledby="title-dialog"
        onClick={this.handleCloseModal}
      >
        <ModalInner>
          <ModalCloseButton
            className="close-modal"
            type="button"
            aria-label="close-button"
            onClick={this.handleCloseModal}
          >
            <Svg className="close-modal" viewBox="0 0 40 40">
              <path
                className="close-modal"
                d="M 10, 10 L 30,30 M 30,10 L 10,30"
              />
            </Svg>
          </ModalCloseButton>
          <RewardResultTable
            lottos={this.props.lottos}
            winningNumbers={this.props.winningNumbers}
          />
          <RestartButton
            initState={this.props.initState}
            purchaseForm={this.props.purchaseForm}
          />
        </ModalInner>
      </ModalSection>
    );
  }
}

export default RewardResultModal;
