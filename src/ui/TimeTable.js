import React from 'react';
import SelectSearch from 'react-select-search';

import TimezonePlace from './TimezonePlace';
import SearchBar from './SearchBar';
import timezones from '../timezones.json';

function TimeTable() {
  return (
    <div className="bg-white rounded-sm shadow-lg p-4">
      <SearchBar options={timezones.map(t => ({value: t, name: t}))} />
      <ul className="list">
        <TimezonePlace city="Cairo" country="Egypt" />
        <TimezonePlace city="Guadalajara" country="Mexico" />
        <TimezonePlace city="Tokyo" country="Japan" />
      </ul>
    </div>
  );
}

export default TimeTable;
