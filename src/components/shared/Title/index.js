import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function Title(props) {
  const { className, as, size, children, ...rest } = props;
  const classnames = cx('Title', className, { [`Title--${size}`]: size });

  switch (as) {
    case 'h1':
      return (
        <h1 className={classnames} {...rest}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={classnames} {...rest}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={classnames} {...rest}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={classnames} {...rest}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={classnames} {...rest}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={classnames} {...rest}>
          {children}
        </h6>
      );
    default:
      return (
        <h2 className={classnames} {...rest}>
          {children}
        </h2>
      );
  }
}

Title.propTypes = {
  className: PropTypes.string,
  as: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
};
