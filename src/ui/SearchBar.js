import React from 'react';
import Fuse from 'fuse.js';
import Select from 'react-select-search';

function SearchBar({cities, onChange}) {
  const fuse = new Fuse(cities, {threshold: 0.2, keys: ['city', 'country']});

  return (
    <Select
      placeholder="Look for a city"
      options={[]}
      onChange={onChange}
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
            resolve(result);
          }
          setTimeout(search, 300);
        });
      }}
      search
    />
  );
}

export default SearchBar;
