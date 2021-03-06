import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

import SearchBar from './SearchBar';
import TimeEntries from './TimeEntries';
import cities from '/src/data/cityMap.json';

function TimeTable() {
  const [places, setPlaces] = useState({});
  const [home, setHome] = useState(null);

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

        places[placeId] = placeEntry;
        setPlaces({ ...places });
        if (Object.keys(places).length === 1) setHome(placeId);
      })
      .catch(console.error);
  }

  return (
    <div className="bg-white rounded-sm shadow-lg p-4 min-w-lg h-64">
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
