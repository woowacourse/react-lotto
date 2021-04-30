import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TicketDetail = (props) => {
  const { tickets } = props;

  const [isDetail, setIsDetail] = useState(false);

  const handleChange = ({ target: { checked } }) => {
    setIsDetail(checked);
  };

  return (
    <section className="mt-6">
      <div className="flex justify-between mb-2">
        <h2 className="text-xl font-semibold">총 {tickets.length}개를 구매하였습니다.</h2>
        <div className="flex items-center justify-center">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                onChange={handleChange}
                checked={isDetail}
                disabled={tickets.length === 0}
              />
              <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
              <div
                className={`dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transform transition duration-350
                ${isDetail ? 'translate-x-full bg-blue-500' : 'translate-x-0 '}
                `}
              />
            </div>
            <div className="ml-3 text-gray-700 font-medium select-none">번호 보기</div>
          </label>
        </div>
      </div>
      <div className={`flex flex-wrap ${isDetail && 'flex-col'} `}>
        {tickets.map((ticket, index) => (
          <div key={ticket.join(index)} className="flex items-center my-2">
            <span className="mx-1 text-4xl mr-2" role="img" aria-label="lotto-ticket">
              🎟️
            </span>
            {isDetail && (
              <span className="text-lg font-normal font-mono select-all">
                {ticket.map((num) => num.toString().padStart(2, '0')).join(', ')}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TicketDetail;

TicketDetail.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};
