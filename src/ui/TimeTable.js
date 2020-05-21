import React, { useState, useRef, useEffect } from 'react';
import { getDayStart, createHourTimeline } from '../js/date';

import Marker from './Marker';
import TimezonePlace from './TimezonePlace';

function TimeTable({ places, home, onDelete, onSetHome }) {
  const [time, setTime] = useState(new Date());
  const [left, setLeft] = useState(0);
  const [offset, setOffset] = useState(0);
  const [listOffset, setListOffset] = useState(0);
  const [height, setHeight] = useState(0);
  const homePlace = places[home];

  const onMouseOver = (e) => {
    const { x } = e.target.getBoundingClientRect();
    setOffset(x - listOffset);
    setLeft(x);
  };

  useEffect(() => {
    function handleResize(e) {
      const { x } = list.current
        .querySelector('.timeline')
        .getBoundingClientRect();

      setListOffset(x);
      setLeft(x + offset);
    }

    window.addEventListener('resize', handleResize);

    setHeight(list.current.offsetHeight);
  }, [offset]);

  let list = useRef(null);

  const startOfDay = getDayStart(time, homePlace.timezone);

  return (
    <div>
      <Marker style={{ left, height }} />
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
