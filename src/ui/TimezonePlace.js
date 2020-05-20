import React from 'react';
import {DateTime} from 'luxon';

function TimezonePlace({
  city,
  country,
  offset,
  datetime,
  time,
  isHome,
  onDelete,
  onSetHome,
}) {
  const signedOffset = (offset <= 0 ? '' : '+') + offset;
  const timeString = datetime.toFormat('HH:MM');
  const dateString = datetime.toFormat('ccc, LLL dd');

  return (
    <li className="flex flex-1 justify-between h-16 my-2 -mx2 box-border text-sm">
      <div className="flex flex-1 items-center">
        <div className="p-2 text-center" onClick={onDelete}>
          #
        </div>
        <div className="p-2">
          <div className="flex items-center justify-center w-10 h-10 f4 br-100 bg-gray-200 rounded-full">
            <span
              className="block text-base font-bold cursor-pointer"
              onClick={onSetHome}>
              {isHome ? 'o_o' : signedOffset}
            </span>
          </div>
        </div>
        <div className="p-2">
          <p className="font-bold">{city}</p>
          <p className="text-sm text-gray-600">{country}</p>
        </div>
        <div className="flex-1 text-right p-2">
          <p className="font-bold">{timeString}</p>
          <p className="text-sm text-gray-600">{dateString}</p>
        </div>
      </div>
      <div className="flex text-white p-2">
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
        <div className="w-6 flex items-center justify-center bg-black">1</div>
      </div>
    </li>
  );
}

export default TimezonePlace;
