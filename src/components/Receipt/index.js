import React, { useState } from 'react';

import PurchaseNumberList from './PurchaseNumberList';
import ToggleButton from '../common/Toggle';

import './style.scss';

const Receipt = () => {
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
      <PurchaseNumberList showBalls={showBalls} isColoredBalls={false} />
    </div>
  );
};

export default React.memo(Receipt);
