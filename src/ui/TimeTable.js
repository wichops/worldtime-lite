import React, {useState, useRef, useEffect} from 'react';
import {DateTime} from 'luxon';
import {getDayStart, createHourTimeline} from '../js/date';

import Marker from './Marker';
import TimezonePlace from './TimezonePlace';

function TimeTable({places, home, onDelete, onSetHome}) {
  const [time, setTime] = useState(new Date());
  const [left, setLeft] = useState(-50);
  const [height, setHeight] = useState(0);
  const homePlace = places[home];

  const onMouseOver = e => {
    const {x} = e.target.getBoundingClientRect();
    setLeft(`${x}px`);
  };

  useEffect(() => {
    setHeight(list.current.offsetHeight);
  }, [places]);

  let list = useRef(null);

  const startOfDay = getDayStart(time, homePlace.timezone);

  return (
    <div>
      <Marker style={{left, height}} />
      <ul className="list" ref={list}>
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
            onMouseOver={onMouseOver}
            onDelete={onDelete(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TimeTable;
