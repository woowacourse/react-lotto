import PropTypes from 'prop-types';
import './style.css';

export default function Record({ label, children }) {
  return (
    <p className="Record">
      <span className="Record__label">{label}</span>
      <span className="Record__value">{children}</span>
    </p>
  );
}

Record.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
