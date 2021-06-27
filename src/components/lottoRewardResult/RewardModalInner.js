import React from 'react';
import PropTypes from 'prop-types';
import RewardResultTable from './RewardResultTable';
import RestartButton from './RestartButton';

export const RewardModalInner = ({ lottos, winningNumbers, restart }) => {
  return (
    <>
      <RewardResultTable lottos={lottos} winningNumbers={winningNumbers} />
      <RestartButton restart={restart} />
    </>
  );
};

RewardModalInner.propTypes = {
  lottos: PropTypes.array.isRequired,
  winningNumbers: PropTypes.shape({
    numbers: PropTypes.array,
    bonusNumber: PropTypes.number,
  }).isRequired,
  restart: PropTypes.func.isRequired,
};

export default RewardModalInner;
