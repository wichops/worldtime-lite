import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { getDayStart, createHourTimeline } from '../../date';
import MarkerContext from '/src/js/MarkerContext';

import Marker from '../Marker';
import TimezonePlace from './TimezonePlace';

const ONE_MINUTE = 1000 * 60;

function TimeTable({ places, home, onDelete, onSetHome }) {
  if (!home) return null;

  const context = useContext(MarkerContext);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (!home) return;
    context.setHeight(list.current.offsetHeight);
  }, [places]);

  useEffect(() => {
    const { x } = list.current
      .querySelector('.timeline')
      .getBoundingClientRect();

    context.setListOffset(x);
  }, []);

  useEffect(() => {
    function handleResize(e) {
      const { x } = list.current
        .querySelector('.timeline')
        .getBoundingClientRect();

      context.setResizePosition(x);
    }
    window.addEventListener('resize', handleResize);
  }, [context.offset]);

  useEffect(() => {
    window.setInterval(() => setCurrentDate(new Date()), ONE_MINUTE);
  }, []);

  let list = useRef(null);

  const onMouseOver = (e) => {
    const { x } = e.target.getBoundingClientRect();

    context.setLeft(x);
  };

  const handleSetHome = (id) => {
    onSetHome(id);
  };

  const homePlace = places[home];
  const startOfDay = getDayStart(currentDate, homePlace.timezone);

  return (
    <div>
      <Marker />
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
            onSetHome={() => handleSetHome(id)}
            onHourOver={onMouseOver}
            onDelete={onDelete(id)}
          />
        ))}
      </ul>
    </div>
  );
}

TimeTable.propTypes = {
  home: PropTypes.string,
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
