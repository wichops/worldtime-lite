import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getDayStart, createHourTimeline } from '/src/js/date';

import Marker from '../Marker';
import TimezonePlace from './TimezonePlace';

const ONE_MINUTE = 1000 * 60;

function TimeTable({ places, home, onDelete, onSetHome }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [left, setLeft] = useState(0);
  const [offset, setOffset] = useState(0);
  const [listOffset, setListOffset] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleResize(e) {
      const { x } = list.current
        .querySelector('.timeline')
        .getBoundingClientRect();

      setListOffset(x);
      setLeft(x + offset);
    }

    window.addEventListener('resize', handleResize);
  }, [offset]);

  useEffect(() => {
    window.setInterval(() => setCurrentDate(new Date()), ONE_MINUTE);
  }, []);

  useEffect(() => {
    setHeight(list.current.offsetHeight);
  }, [places]);

  let list = useRef(null);

  const onMouseOver = (e) => {
    const { x } = e.target.getBoundingClientRect();
    setOffset(x - listOffset);
    setLeft(x);
  };
  const homePlace = places[home];
  const startOfDay = getDayStart(currentDate, homePlace.timezone);

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
            currentDate={currentDate}
            startDate={startOfDay}
            onSetHome={() => onSetHome(id)}
            onHourOver={onMouseOver}
            onDelete={onDelete(id)}
          />
        ))}
      </ul>
    </div>
  );
}

TimeTable.propTypes = {
  home: PropTypes.string.isRequired,
  places: PropTypes.objectOf(
    PropTypes.shape({
      timezone: PropTypes.string,
      offset: PropTypes.number,
      country: PropTypes.string,
      city: PropTypes.string,
      abbreviation: PropTypes.string,
    })
  ).isRequired,

  onDelete: PropTypes.func,
  onSetHome: PropTypes.func,
};

export default TimeTable;
