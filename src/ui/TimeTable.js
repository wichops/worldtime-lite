import React, {useState} from 'react';
import Fuse from 'fuse.js';
import Select from 'react-select-search';

import TimezonePlace from './TimezonePlace';
import cities from '../cityMap.json';

function TimeTable() {
  const [places, setPlaces] = useState([]);
  const fuse = new Fuse(cities, {threshold: 0.3, keys: ['city', 'country']});

  function handleChange(_, place) {
    setPlaces(places.concat(place));
  }

  return (
    <div className="bg-white rounded-sm shadow-lg p-4">
      <div className="py-2">
        <Select
          placeholder="Look for a city"
          options={[]}
          onChange={handleChange}
          getOptions={query => {
            return new Promise((resolve, reject) => {
              function search() {
                const result = fuse
                  .search(query)
                  .slice(0, 10)
                  .map(entry => {
                    const {item} = entry;
                    const {country, province, city, timezone} = item;
                    return {
                      name: `${country}, ${province}, ${city}`,
                      value: `${item.lat}, ${item.lng}`,
                      country,
                      province,
                      city,
                      timezone: timezone,
                    };
                  });
                console.log(result);
                resolve(result);
              }
              setTimeout(search, 300);
            });
          }}
          search
        />
      </div>
      <ul className="list">
        {places.map(p => (
          <TimezonePlace city={p.city} country={p.country} />
        ))}
      </ul>
    </div>
  );
}

export default TimeTable;
