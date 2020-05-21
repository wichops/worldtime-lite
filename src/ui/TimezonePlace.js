import React from 'react';
import { DateTime } from 'luxon';

import TrashIcon from '../icons/trash.svg';
import HomeIcon from '../icons/home.svg';

import { getDayStart, createHourTimeline } from '../js/date';
import TimelineItem from './TimelineItem/index';

function TimezonePlace({
  city,
  country,
  offset,
  datetime,
  startDate,
  isHome,
  timezone,
  abbreviation,
  onDelete,
  onSetHome,
  onMouseOver,
}) {
  const signedOffset = (offset <= 0 ? '' : '+') + offset;

  const time = DateTime.fromJSDate(datetime).setZone(timezone);
  const timeString = time.toFormat('HH:MM');
  const dateString = time.toFormat('ccc, LLL dd');
  const timeline = createHourTimeline(startDate, 24, timezone);

  return (
    <li className="flex flex-1 justify-between h-16 -mx2 box-border text-sm">
      <div className="flex flex-1 items-center">
        <div className="p-0 text-center cursor-pointer" onClick={onDelete}>
          <img src={TrashIcon} className="w-3 h-3" />
        </div>
        <div className="p-2">
          <div className="flex items-center justify-center w-10 h-10 f4 br-100 bg-gray-200 rounded-full">
            <span
              className="block font-bold cursor-pointer"
              onClick={onSetHome}
            >
              {isHome ? (
                <img src={HomeIcon} className="w-4 h-4" />
              ) : (
                signedOffset
              )}
            </span>
          </div>
        </div>
        <div className="p-2">
          <p className="font-bold">{city}</p>
          <p className="text-sm text-gray-600">{country}</p>
        </div>
        <div className="flex-1 text-right p-0">
          <p className="font-bold">
            {timeString} {abbreviation}
          </p>
          <p className="text-sm text-gray-600">{dateString}</p>
        </div>
      </div>
      <div className="ml-4 flex timeline">
        {timeline.map((t) => (
          <TimelineItem
            key={Math.random() * 100}
            time={t}
            onMouseOver={onMouseOver}
          />
        ))}
      </div>
    </li>
  );
}

export default TimezonePlace;
