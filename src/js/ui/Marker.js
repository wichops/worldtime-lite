import React from 'react';
import MarkerContext from '/src/js/MarkerContext';

function Marker() {
  return (
    <MarkerContext.Consumer>
      {({ left, scrollLeft, height }) => (
        <div
          className="absolute w-7 h-full bg-orange-500 bg-opacity-25 border border-orange-500 border-2 rounded"
          style={{ left: left, height }}
        ></div>
      )}
    </MarkerContext.Consumer>
  );
}

export default Marker;
