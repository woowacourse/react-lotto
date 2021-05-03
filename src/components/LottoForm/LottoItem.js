export default function LottoItem({ isToggled, numbers }) {
  return (
    <li className={`lotto-item ${isToggled ? 'toggle' : ''}`}>
      <span className="lotto-icon">🎟</span>
      {isToggled && <span>{[...numbers].join(', ')}</span>}
    </li>
  );
}
