import PropTypes from 'prop-types';
import './style.css';

export default function XButton({ onClick }) {
  return (
    <button type="button" className="XButton" onClick={onClick}>
      <svg className="XButton__svg" viewBox="0 0 40 40">
        <path className="XButton__svg_path" d="M 10,10 L 30,30 M 30,10 L 10,30" />
      </svg>
    </button>
  );
}

XButton.propTypes = {
  onClick: PropTypes.func,
};
