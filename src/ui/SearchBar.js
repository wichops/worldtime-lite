import React from 'react';
import SelectSearch from 'react-select-search';

function SearchBar({options}) {
  return <SelectSearch search options={options} />;
}

export default SearchBar;
