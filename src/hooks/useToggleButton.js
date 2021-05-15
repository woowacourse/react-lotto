import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { ToggleButton } from '../components/shared';

export const useToggleButton = (initialState = false) => {
  const [isToggled, setIsToggled] = useState(initialState);
  const toggle = (e) => setIsToggled((prevState) => !prevState);

  const HookedToggleButton = (props) => {
    const { children, ...rest } = props;
    return (
      <ToggleButton isToggled={isToggled} onChange={toggle} {...rest}>
        {children}
      </ToggleButton>
    );
  };

  HookedToggleButton.propTypes = {
    children: PropTypes.node,
  };

  return { HookedToggleButton, toggle, isToggled };
};
