import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function Ball(props) {
  const { className, children, ...rest } = props;

  return (
    <span className={cx('Ball', className)} {...rest}>
      {children}
    </span>
  );
}

Ball.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};