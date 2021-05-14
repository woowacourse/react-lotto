import PropTypes from 'prop-types';
import React from 'react';
import { StyledHeader } from './styles';

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <h1>{children}</h1>
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
