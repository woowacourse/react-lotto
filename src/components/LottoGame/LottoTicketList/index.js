import React, { useReducer } from 'react';

const LottoTicketItem = ({ isShow, numbers }) => {
  return (
    <div className="lotto-wrapper flex items-center">
      <span className="lotto mx-1 text-4xl">🎟️ </span>
      {isShow && <span className="ml-3 text-2xl ">{numbers.join(', ')}</span>}
    </div>
  );
};

const LottoTicketList = ({ lottoTickets }) => {
  const [isToggleOn, toggle] = useReducer(prev => !prev, false);

  const handleToggle = () => {
    toggle();
  };

  return (
    <section className="mt-9 ">
      <div className="flex">
        <label className="flex-auto my-0">총 {lottoTickets.length}개를 구매하였습니다.</label>
        <div className="flex-auto flex justify-end pr-1">
          <label className="switch">
            <input type="checkbox" />
            <span className="text-base font-normal" onClick={handleToggle}>
              번호보기
            </span>
          </label>
        </div>
      </div>
      <div className="mt-4 scroll">
        <div className="flex flex-wrap flex-row">
          {lottoTickets.map((lottoTicket, index) => (
            <LottoTicketItem key={index} numbers={lottoTicket} isShow={isToggleOn} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LottoTicketList;
