import React, { memo } from 'react';
import PropTypes from 'prop-types';

const LottoHeader = memo((props) => (
  <header className="lotto-header">
    <h1>{props.headerTitle}</h1>
  </header>
));

LottoHeader.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};

export default LottoHeader;
