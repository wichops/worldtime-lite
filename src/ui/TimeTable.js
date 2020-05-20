import React, {useState, useEffect} from 'react';
import {DateTime} from 'luxon';
import {getDayStart, createHourTimeline} from '../js/date';

import TimezonePlace from './TimezonePlace';

function TimeTable({places, home, onDelete, onSetHome}) {
  const [time, setTime] = useState(new Date());
  const homePlace = places[home];

  const startOfDay = getDayStart(time, homePlace.timezone);

  return (
    <ul className="list">
      {Object.entries(places).map(([id, p]) => (
        <TimezonePlace
          key={id}
          isHome={id === home}
          city={p.city}
          country={p.country}
          abbreviation={p.abbreviation}
          offset={p.offset - homePlace.offset}
          timezone={p.timezone}
          datetime={time}
          startDate={startOfDay}
          onSetHome={() => onSetHome(id)}
          onDelete={onDelete(id)}
        />
      ))}
    </ul>
  );
}

export default TimeTable;
