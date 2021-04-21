import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function Title({ as, size, children }) {
  const TitleClass = cx('Title', { [`Title--${size}`]: Boolean(size) });

  switch (as) {
    case 'h1':
      return <h1 className={TitleClass}>{children}</h1>;
    case 'h2':
      return <h2 className={TitleClass}>{children}</h2>;
    case 'h3':
      return <h3 className={TitleClass}>{children}</h3>;
    case 'h4':
      return <h4 className={TitleClass}>{children}</h4>;
    case 'h5':
      return <h5 className={TitleClass}>{children}</h5>;
    case 'h6':
      return <h6 className={TitleClass}>{children}</h6>;
    default:
      return <h2 className={TitleClass}>{children}</h2>;
  }
}

Title.propTypes = {
  as: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.any,
};
