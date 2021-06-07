import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PurchaseNumberList from './PurchaseNumberList';
import ToggleButton from '../@util-components/Toggle';
import './style.scss';

const Receipt = ({ receipt }) => {
  const [showBalls, setShowBalls] = useState(false);
  const handleToggle = () => setShowBalls(!showBalls);

  return (
    <div className='purchased-lotto'>
      <div className='sub-title'>
        <p>구입한 로또 번호</p>
        <ToggleButton onHandleToggle={handleToggle} />
      </div>
      <PurchaseNumberList receipt={receipt} showBalls={showBalls} />
    </div>
  );
};

Receipt.propTypes = {
  receipt: PropTypes.array,
};

Receipt.propTypes = {
  receipt: PropTypes.array,
};

export default Receipt;
