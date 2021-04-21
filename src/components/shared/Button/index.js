import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function Button({ className, children, ...props }) {
  const buttonClassnames = cx('Button', `${className}`);

  return (
    <button className={buttonClassnames} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  children: '',
  type: 'button',
  onClick: () => {},
};
