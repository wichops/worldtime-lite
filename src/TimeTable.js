import React from 'react';

import TimezonePlace from './TimezonePlace';

function TimeTable() {
  return (
    <div className="bg-white br2 shadow-4 pa3">
      <div>
        <input
          className="bg-near-white pv2 ph3 bn br-pill"
          type="text"
          placeholder="Type a place or city"
        />
      </div>
      <ul className="list">
        <TimezonePlace city="Cairo" country="Egypt" />
        <TimezonePlace city="Guadalajara" country="Mexico" />
        <TimezonePlace city="Tokyo" country="Japan" />
      </ul>
    </div>
  );
}

export default TimeTable;
