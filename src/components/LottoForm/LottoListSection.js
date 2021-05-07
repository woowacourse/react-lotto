export default function LottoListSection({
  lottoCount,
  isLottoListToggled,
  setIsLottoListToggled,
  children,
}) {
  const onToggle = () => {
    setIsLottoListToggled(!isLottoListToggled);
  };

  return (
    <section className="mt-5">
      <div className="d-flex justify-space-between items-center">
        <div>
          총 <span>{lottoCount}</span>개를 구매하였습니다.
        </div>
        <label className="toggle-button">
          <input type="checkbox" checked={isLottoListToggled} onChange={onToggle} />
          <span className="toggle-slider"></span>
        </label>
      </div>
      <ul className="lotto-list">{children}</ul>
    </section>
  );
}
