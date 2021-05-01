import { useState } from 'react';
import classNames from 'classnames/bind';
import Lotto from './Lotto';
import { ToggleButton } from '../../shared';
import styles from './style.css';

const cx = classNames.bind(styles);
const initialState = { isToggled: false };

export const UserLotto = (props) => {
  const { lottoBundle } = props;
  const [isToggled, setLottoBundle] = useState(initialState.isToggled);
  const onChangeToggleButton = (e) => setLottoBundle(e.target.checked);
  const userLottoListClassname = cx({
    UserLotto__list: true,
    toggle: isToggled,
  });

  return (
    <div className="UserLotto">
      <ToggleButton onChange={onChangeToggleButton}>번호보기</ToggleButton>
      <p>
        총 <span className="UserLotto__number">{lottoBundle.length}</span>개 구매하였습니다.
      </p>
      <ul className={userLottoListClassname}>
        {lottoBundle.map((v, i) => (
          <li key={i}>
            <Lotto numbers={v} />
          </li>
        ))}
      </ul>
    </div>
  );
};
