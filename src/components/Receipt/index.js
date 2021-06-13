import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PurchaseNumberList from './PurchaseNumberList';
import ToggleButton from '../shared/Toggle';

import './style.scss';

const Receipt = ({ receipt }) => {
  const [showBalls, setShowBalls] = useState(false);

  const handleToggle = () => {
    setShowBalls((showBalls) => !showBalls);
  };

  return (
    <div className='purchased-lotto'>
      <div className='sub-title'>
        <p>구입한 로또 번호</p>
        <ToggleButton onToggle={handleToggle} />
      </div>
      <PurchaseNumberList receipt={receipt} showBalls={showBalls} />
    </div>
  );
};

Receipt.propTypes = {
  receipt: PropTypes.array,
};

export default React.memo(Receipt);
