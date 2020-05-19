import React from 'react';

function TimezonePlace({city, country}) {
  return (
    <li className="flex items-center h-16 my-2 -mx2 box-border">
      <div className="p-2 text-center">#</div>
      <div className="ml3 p-2">
        <div className="flex items-center justify-center w-12 h-12 f4 br-100 bg-gray-200 rounded-full">
          <span className="block text-lg font-bold">-6</span>
        </div>
      </div>
      <div className="ml3 p-2">
        <p className="w2 font-bold">{city}</p>
        <p>{country}</p>
      </div>
    </li>
  );
}

export default TimezonePlace;
