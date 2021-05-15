import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Lotto } from './Lotto';
import { useToggleButton } from '../../../hooks';
import styles from './style.css';

const cx = classNames.bind(styles);

export const UserLotto = (props) => {
  const { lottoBundle } = props;
  const { HookedToggleButton: ToggleButton, isToggled } = useToggleButton(false);

  return (
    <div className="UserLotto">
      <ToggleButton>번호보기</ToggleButton>
      <p>
        총 <span className="UserLotto__number">{lottoBundle.length}</span>개 구매하였습니다.
      </p>
      <ul className={cx('UserLotto__list', { toggle: isToggled })}>
        {lottoBundle.map((lotto, index) => (
          <li key={index}>
            <Lotto numbers={lotto} />
          </li>
        ))}
      </ul>
    </div>
  );
};

UserLotto.propTypes = {
  lottoBundle: PropTypes.array.isRequired,
};
