/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function Modal(props) {
  const { className, isOpen, isLoaded, loading, children, onClickDimmedArea, ...rest } = props;
  return (
    <div
      className={cx('Modal', className, { 'Modal--open': isOpen })}
      onClick={onClickDimmedArea}
      role="dialog"
      {...rest}
    >
      {isLoaded ? (
        <div className="Modal__Inner">{children}</div>
      ) : (
        <div className="Modal__Inner--loading">{loading}</div>
      )}
    </div>
  );
}

Modal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  isLoaded: PropTypes.bool,
  loading: PropTypes.node,
  children: PropTypes.node,
  onClickDimmedArea: PropTypes.func,
};

Modal.defaultProps = {
  isOpen: false,
  isLoaded: false,
};
