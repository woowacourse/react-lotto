import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function Ball({ className, children }) {
  const ballClassnames = cx('Ball', `${className}`);

  return <span className={ballClassnames}>{children}</span>;
}

Ball.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

Ball.defaultProps = {
  className: '',
  children: '',
};
