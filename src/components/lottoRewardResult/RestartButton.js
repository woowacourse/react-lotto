import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../shared';
import { RestartButtonWrapperDiv } from './RestartButton.style';
import { MESSAGE } from '../../constants/messages';

export const RestartButton = ({ restart }) => {
  const onClick = () => {
    alert(MESSAGE.CONFIRM_RESTART);
    restart();
  };

  return (
    <RestartButtonWrapperDiv>
      <Button size="medium" type="reset" onClick={onClick}>
        다시 시작하기
      </Button>
    </RestartButtonWrapperDiv>
  );
};

RestartButton.propTypes = {
  restart: PropTypes.func.isRequired,
};

export default RestartButton;
