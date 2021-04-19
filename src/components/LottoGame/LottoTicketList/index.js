import React, { useState } from 'react';

const LottoTicketItem = props => {
  return (
    <div className="lotto-wrapper flex items-center">
      <span className="lotto mx-1 text-4xl">🎟️ </span>
      {props.isToggleOn && <span className="ml-3 text-2xl ">{props.numbers.join(', ')}</span>}
    </div>
  );
};

const LottoTicketList = props => {
  const [isToggleOn, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(isToggleOn => !isToggleOn);
  };

  return (
    <section className="mt-9 ">
      <div className="flex">
        <label className="flex-auto my-0">총 {props.lottoTickets.length}개를 구매하였습니다.</label>
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
          {props.lottoTickets.map((lottoTicket, index) => (
            <LottoTicketItem key={index} numbers={lottoTicket} isToggleOn={isToggleOn} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LottoTicketList;
