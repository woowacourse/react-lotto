import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function Button(props) {
  const { className, children, ...rest } = props;

  return (
    <button className={cx('Button', className)} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  onClick: PropTypes.func,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  formAction: PropTypes.string,
  formEncType: PropTypes.oneOf([
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'text/plain',
  ]),
  formMethod: PropTypes.oneOf(['get', 'post']),
  name: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
};
