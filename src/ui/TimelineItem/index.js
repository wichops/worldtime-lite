import React from 'react';

const START_OF_DAY = 0;
const END_OF_DAY = 23;

function getClassnamesByHour(hours) {
  let classes = '';
  switch (hours) {
    case 21:
    case 22:
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      classes += 'text-white bg-black ';
      break;
    case 18:
    case 19:
    case 20:
    case 6:
    case 7:
      classes += 'text-black bg-blue-200 ';
      break;
    default:
      classes += 'text-black bg-gray-200 ';
      break;
  }

  if (hours === START_OF_DAY) classes += 'rounded-l';
  if (hours === END_OF_DAY) classes += 'rounded-r';
  return classes;
}

function TimelineItem({time, onMouseOver}) {
  const hours = time.getHours();
  const classes = getClassnamesByHour(hours);
  return (
    <div
      onMouseOver={onMouseOver}
      className="py-3 box-content w-7 text-xs bg-white">
      <div
        className={`h-full flex flex-col items-center justify-between font-bold ${classes}`}>
        {hours === 0 ? (
          <React.Fragment>
            <span className="text-xxs">
              {time.toLocaleString('en-US', {month: 'short'})}
            </span>
            <span className="font-normal">{time.getDate()}</span>
          </React.Fragment>
        ) : (
          hours
        )}
      </div>
    </div>
  );
}

export default TimelineItem;
