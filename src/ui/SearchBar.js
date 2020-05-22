import React from 'react';
import PropTypes from 'prop-types';

import Fuse from 'fuse.js';
import Select from 'react-select-search';

function search() {
  const result = fuse
    .search(query)
    .slice(0, 10)
    .map((entry) => {
      const { item } = entry;
      const { country, province, city, timezone } = item;
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

function SearchBar({ cities, onChange }) {
  const fuse = new Fuse(cities, { threshold: 0.2, keys: ['city', 'country'] });

  return (
    <Select
      search
      placeholder="Look for a city"
      options={[]}
      onChange={onChange}
      getOptions={(query) => {
        return new Promise((resolve, reject) => {
          setTimeout(search, 300);
        });
      }}
    />
  );
}

SearchBar.propTypes = {
  cities: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
    city: PropTypes.string,
    country: PropTypes.string,
    province: PropTypes.string,
    timezone: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

export default SearchBar;
