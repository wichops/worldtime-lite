import React, {useState} from 'react';
import luxon from 'luxon';

import SearchBar from './SearchBar';
import TimezonePlace from './TimezonePlace';
import cities from '../cityMap.json';

function TimeTable() {
  const [places, setPlaces] = useState({
    'Uruguay, Aigua': {
      country: 'Uruguay',
      city: 'Aigua',
      datetime: '2020-05-19T18:40:19.462967-03:00',
      offset: '-3',
      abbreviation: '-03',
    },
    'Mexico, Mexico City': {
      country: 'Mexico',
      city: 'Mexico City',
      datetime: '2020-05-19T16:40:23.291143-05:00',
      offset: '-5',
      abbreviation: 'CDT',
    },
  });
  const [home, setHome] = useState('Mexico, Mexico City');

  function handleDelete(placeId) {
    return () => {
      delete places[placeId];

      const placesIds = Object.keys(places);

      if (!placesIds.length) setHome(null);
      if (placeId === home) setHome(placesIds[0]);

      setPlaces({...places});
    };
  }

  function handleChange(_, place) {
    fetch(`http://worldtimeapi.org/api/timezone/${place.timezone}`)
      .then(r => r.json())
      .then(r => {
        const offset = parseInt(r.utc_offset);
        const placeId = `${place.country}, ${place.city}`;
        const placeEntry = {
          offset,
          country: place.country,
          city: place.city,
          datetime: r.datetime,
          abbreviation: r.abbreviation,
        };

        if (!Object.keys(places).length) setHome(placeId);

        places[placeId] = placeEntry;
        setPlaces({...places});
      })
      .catch(console.error);
  }

  const homePlace = places[home];
  return (
    <div className="bg-white rounded-sm shadow-lg p-4">
      <div className="py-2">
        <SearchBar cities={cities} onChange={handleChange} />
      </div>
      <ul className="list">
        {Object.entries(places).map(([id, p]) => (
          <TimezonePlace
            key={id}
            isHome={id === home}
            city={p.city}
            country={p.country}
            abbreviation={p.abbreviation}
            offset={p.offset - homePlace.offset}
            datetime={new Date(p.datetime)}
            onSetHome={() => setHome(id)}
            onDelete={handleDelete(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TimeTable;
