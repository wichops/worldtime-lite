import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { getTimeOfDay, DAY, NIGHT, DAWN, DUSK } from '../../../js/date';

const START_OF_DAY = 0;
const END_OF_DAY = 23;

function getClassnamesByHour(hours) {
  const timeOfDay = getTimeOfDay(hours);
  let classes = '';

  switch (timeOfDay) {
    case NIGHT:
      classes += 'text-white bg-black ';
      break;
    case DAWN:
    case DUSK:
      classes += 'text-black bg-blue-200 ';
      break;
    case DAY:
      classes += 'text-black bg-gray-200 ';
      break;
  }

  if (hours === START_OF_DAY) classes += 'rounded-l';
  if (hours === END_OF_DAY) classes += 'rounded-r';
  return classes;
}

function TimelineItem({ isHome, currentDate, date, timezone, onMouseOver }) {
  const ref = useRef(null);
  useEffect(() => {
    const newDate = new Date(
      currentDate.toLocaleString('en-US', { timeZone: timezone })
    );
    if (
      ref.current !== null &&
      isHome &&
      newDate.getHours() === date.getHours() &&
      newDate.getDate() === date.getDate()
    ) {
      onMouseOver({ target: ref.current });
    }
  }, []);

  const [hours, meridian] = date
    .toLocaleString('en-US', { hour: 'numeric', hour12: true })
    .split(' ');

  let classes = 'h-full flex flex-col items-center justify-between ';
  classes += getClassnamesByHour(date.getHours());
  return (
    <div ref={ref} className="py-3 box-content w-7 text-xs bg-white">
      <div className={classes}>
        {date.getHours() === 0 ? (
          <React.Fragment>
            <span className="text-xxs">
              {date.toLocaleString('en-US', { month: 'short' })}
            </span>
            <span>{date.getDate()}</span>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className="font-bold">{hours}</span>
            <span className="text-xxs">{meridian}</span>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

TimelineItem.defaultProps = {
  currentDate: new Date(),
};
TimelineItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onMouseOver: PropTypes.func,
};

export default TimelineItem;
