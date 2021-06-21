import React from 'react';

import PropTypes from 'prop-types';

import { Button, HiddenButtonName } from './ModalCloseButton.style';

export const ModalCloseButton = props => {
  const { onClick } = props;

  return (
    <Button type="button" aria-label="close-button" onClick={() => onClick()}>
      <svg aria-hidden="true" viewBox="0 0 40 40">
        <path d="M 10, 10 L 30,30 M 30,10 L 10,30" />
      </svg>
      <HiddenButtonName>닫기 버튼</HiddenButtonName>
    </Button>
  );
};

ModalCloseButton.prototype = {
  onClick: PropTypes.func,
};
