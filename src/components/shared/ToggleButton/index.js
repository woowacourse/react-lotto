import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function ToggleButton(props) {
  const { className, onChange, children, ...rest } = props;

  return (
    <div className={cx('ToggleButton', className)}>
      <label className="ToggleButton__label">
        <input type="checkbox" className="ToggleButton__input" onChange={onChange} {...rest} />
        <span className="ToggleButton__text">{children}</span>
      </label>
    </div>
  );
}

ToggleButton.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};
