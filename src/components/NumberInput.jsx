import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export default class NumberInput extends React.Component {
  static propTypes = {
    isBonus: PropTypes.bool,
    isValid: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isBonus: false,
    isValid: false,
  };

  render() {
    return (
      <div>
        <label htmlFor={this.props.name} className="sr-only">
          {this.props.isBonus ? ' 보너스 번호' : '당첨 번호'}
        </label>
        <input
          id={this.props.name}
          type="number"
          name={this.props.name}
          className={cx(
            'appearance-textfield mx-1 w-14 h-14 text-center text-xl border rounded focus:outline-none shadow focus:ring-1.5',
            this.props.isValid ? 'ring-blue-700' : 'ring-rose-500',
            this.props.value !== '' && !this.props.isValid && 'ring-1.5'
          )}
          value={this.props.value}
          onChange={this.props.onChange}
          onFocus={this.props.onFocus}
        />
      </div>
    );
  }
}
