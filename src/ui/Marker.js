import React from 'react';

function Marker({ style }) {
  return (
    <div
      className="absolute w-7 h-full bg-orange-500 bg-opacity-25 border border-orange-500 border-2 rounded"
      style={style}
    ></div>
  );
}

export default Marker;
