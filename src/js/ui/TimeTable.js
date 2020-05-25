import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

import SearchBar from './SearchBar';
import TimeEntries from './TimeEntries';
import cities from '/src/data/cityMap.json';

function TimeTable() {
  const [places, setPlaces] = useState({
    'Mexico, Mexicali': {
      timezone: 'America/Tijuana',
      offset: -7,
      country: 'Mexico',
      city: 'Mexicali',
      abbreviation: 'PDT',
    },
  });
  const [home, setHome] = useState('Mexico, Mexicali');

  function handleDelete(placeId) {
    return () => {
      delete places[placeId];

      const placesIds = Object.keys(places);

      if (!placesIds.length) setHome(null);
      if (placeId === home) setHome(placesIds[0]);

      setPlaces({ ...places });
    };
  }

  function handleChange(_, place) {
    fetch(`http://worldtimeapi.org/api/timezone/${place.timezone}`)
      .then((r) => r.json())
      .then((r) => {
        const offset = parseInt(r.utc_offset);
        const placeId = `${place.country}, ${place.city}`;
        const placeEntry = {
          timezone: place.timezone,
          offset,
          country: place.country,
          city: place.city,
          abbreviation: r.abbreviation,
        };

        if (!Object.keys(places).length) setHome(placeId);

        places[placeId] = placeEntry;
        setPlaces({ ...places });
      })
      .catch(console.error);
  }

  return (
    <div
      className="bg-white rounded-sm shadow-lg p-4 min-w-lg"
      style={{ minWidth: '995px' }}
    >
      <div className="py-2">
        <div className="mb-6">
          <SearchBar cities={cities} onChange={handleChange} />
        </div>
        <TimeEntries
          places={places}
          home={home}
          onSetHome={setHome}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default TimeTable;
