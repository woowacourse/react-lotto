import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function XButton(props) {
  const { className, onClick, ...rest } = props;

  return (
    <button type="button" className={cx('XButton', className)} onClick={onClick} {...rest}>
      <svg className="XButton__svg" viewBox="0 0 40 40">
        <path className="XButton__svg_path" d="M 10,10 L 30,30 M 30,10 L 10,30" />
      </svg>
    </button>
  );
}

XButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
