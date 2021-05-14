import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function ToggleButton(props) {
  const { containerClassname, className, isToggled, onChange, children, ...rest } = props;

  return (
    <div className={cx('ToggleButton', containerClassname)}>
      <label className="ToggleButton__label">
        <input
          type="checkbox"
          className={cx('ToggleButton__input', className)}
          checked={isToggled}
          onChange={onChange}
          {...rest}
        />
        <span className="ToggleButton__text">{children}</span>
      </label>
    </div>
  );
}

ToggleButton.propTypes = {
  containerClassname: PropTypes.string,
  className: PropTypes.string,
  isToggled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};
