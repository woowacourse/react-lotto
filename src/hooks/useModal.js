import React, { useReducer } from 'react';
import { PropTypes } from 'prop-types';
import { Modal } from '../components/shared';

const MODAL_ACTION = {
  OPEN: 'modal/OPEN',
  COMPLETE_LOADING: 'modal/COMPLETE_LOADING',
  CLOSE: 'modal/CLOSE',
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case MODAL_ACTION.OPEN:
      return { ...state, isOpen: true };

    case MODAL_ACTION.COMPLETE_LOADING:
      return { ...state, isLoaded: true };

    case MODAL_ACTION.CLOSE:
      return { ...state, isOpen: false, isLoaded: false };

    default:
      return state;
  }
};

export const useModal = (initialState = { isOpen: false, isLoaded: false }) => {
  const [modalStatus, dispatch] = useReducer(modalReducer, initialState);
  const { isOpen, isLoaded } = modalStatus;

  const open = () => dispatch({ type: MODAL_ACTION.OPEN });
  const completeLoading = () => dispatch({ type: MODAL_ACTION.COMPLETE_LOADING });
  const close = () => dispatch({ type: MODAL_ACTION.CLOSE });

  const onClickDimmedArea = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }
    close();
  };

  const HookedModal = (props) => {
    const { children, ...rest } = props;
    return (
      <Modal isOpen={isOpen} isLoaded={isLoaded} onClickDimmedArea={onClickDimmedArea} {...rest}>
        {children}
      </Modal>
    );
  };

  HookedModal.propTypes = {
    children: PropTypes.node,
  };

  return {
    HookedModal,
    isOpen,
    isLoaded,
    open,
    completeLoading,
    close,
  };
};
