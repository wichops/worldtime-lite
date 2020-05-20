import React, {useState, useEffect} from 'react';
import {DateTime} from 'luxon';

import TimezonePlace from './TimezonePlace';

function TimeTable({places, home, onDelete, onSetHome}) {
  const [time, setTime] = useState(DateTime.utc());
  const homePlace = places[home];

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
          datetime={time.setZone(p.timezone)}
          onSetHome={() => onSetHome(id)}
          onDelete={onDelete(id)}
        />
      ))}
    </ul>
  );
}

export default TimeTable;
