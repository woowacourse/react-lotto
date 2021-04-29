import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TicketDetail = (props) => {
  const [isDetail, setIsDetail] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (event) => {
    setIsDetail(event.target.checked);
  };

  return (
    <section className="mt-6">
      <div className="flex justify-between mb-2">
        <h2 className="text-xl font-semibold">총 {props.tickets.length}개를 구매하였습니다.</h2>
        <div className="flex items-center justify-center">
          <label className="flex items-center p-2 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="from-fuchsia-300 sr-only"
                onChange={handleChange}
                checked={isDetail}
                disabled={props.tickets.length === 0}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
              <div
                className={cx(
                  'dot absolute -left-1 -top-1 w-6 h-6 rounded-full shadow transform duration-350',
                  isFocused ? 'bg-blue-500' : 'bg-white',
                  isDetail ? 'translate-x-full bg-blue-500' : 'translate-x-0 '
                )}
              />
            </div>
            <div className="ml-3 text-gray-700 font-medium select-none">번호 보기</div>
          </label>
        </div>
      </div>
      <div className={cx('flex flex-wrap', isDetail && 'flex-col')}>
        {props.tickets.map((ticket, index) => (
          <div key={ticket.join(index)} className="flex items-center my-2">
            <span className="mr-2 mx-1 text-4xl" role="img" aria-label="lotto-ticket">
              🎟️
            </span>
            {isDetail && (
              <span className="font-mono text-lg font-normal select-all">
                {ticket.map((num) => num.toString().padStart(2, '0')).join(', ')}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

TicketDetail.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default TicketDetail;
