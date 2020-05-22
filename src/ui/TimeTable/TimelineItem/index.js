import React from 'react';
import PropTypes from 'prop-types';

import { getTimeOfDay } from '../../../js/date';

const START_OF_DAY = 0;
const END_OF_DAY = 23;

function getClassnamesByHour(hours) {
  const timeOfDay = getTimeOfDay(hours);
  let classes = '';

  switch (timeOfDay) {
    case 'night':
      classes += 'text-white bg-black ';
      break;
    case 'dawn':
    case 'dusk':
      classes += 'text-black bg-blue-200 ';
      break;
    case 'day':
      classes += 'text-black bg-gray-200 ';
      break;
  }

  if (hours === START_OF_DAY) classes += 'rounded-l';
  if (hours === END_OF_DAY) classes += 'rounded-r';
  return classes;
}

function TimelineItem({ date, onMouseOver }) {
  const hours = date.getHours();
  let classes = 'h-full flex flex-col items-center justify-between font-bold ';
  classes += getClassnamesByHour(hours);
  return (
    <div
      onMouseOver={onMouseOver}
      className="py-3 box-content w-7 text-xs bg-white"
    >
      <div className={classes}>
        {hours === 0 ? (
          <React.Fragment>
            <span className="text-xxs">
              {date.toLocaleString('en-US', { month: 'short' })}
            </span>
            <span className="font-normal">{date.getDate()}</span>
          </React.Fragment>
        ) : (
          hours
        )}
      </div>
    </div>
  );
}
TimelineItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onMouseOver: PropTypes.func,
};

export default TimelineItem;
