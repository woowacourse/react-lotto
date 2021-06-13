import React from 'react';

import PropTypes from 'prop-types';

import { FlexBox } from './Flex.style';

export const Flex = props => {
  const { children, ...rest } = props;

  return <FlexBox {...rest}>{children}</FlexBox>;
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  flexFlow: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexWrap: PropTypes.string,
  flexBasis: PropTypes.string,
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
