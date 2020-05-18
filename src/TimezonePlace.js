import React from 'react';

function TimezonePlace({city, country}) {
  return (
    <li className="flex items-center h3 mv2">
      <div className="w1">#</div>
      <div className="w3 ml3">
        <div className="flex items-center justify-center w3 h3 f4 br-100 bg-light-gray">
          <span className="db f4 fw6 tc br-100">-6</span>
        </div>
      </div>
      <div className="ml3">
        <span className="w2 db fw6">{city}</span>
        <span className="db">{country}</span>
      </div>
    </li>
  );
}

export default TimezonePlace;
