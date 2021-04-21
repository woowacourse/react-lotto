import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default class Title extends Component {
  render() {
    const { as, size, children } = this.props;
    const TitleClass = cx({ Title, [`Title--${size}`]: true });

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
}
