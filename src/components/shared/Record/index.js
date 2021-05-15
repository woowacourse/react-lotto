import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function Record(props) {
  const { className, label, children, ...rest } = props;

  return (
    <p className={cx('Record', className)} {...rest}>
      <span className="Record__label">{label}</span>
      <span className="Record__value">{children}</span>
    </p>
  );
}

Record.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
