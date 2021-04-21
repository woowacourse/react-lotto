import PropTypes from 'prop-types';
import './style.css';

export default function ToggleButton({ onChange, children }) {
  return (
    <div className="ToggleButton">
      <label className="ToggleButton__label">
        <input type="checkbox" className="ToggleButton__input" onChange={onChange} />
        <span className="ToggleButton__text">{children}</span>
      </label>
    </div>
  );
}

ToggleButton.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.any,
};
