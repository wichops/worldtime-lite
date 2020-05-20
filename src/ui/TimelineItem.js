import React from 'react';

function TimelineItem({time}) {
  return (
    <div
      className="w-6 flex items-center justify-center bg-black text-sm"
      key={Math.random() * 100}>
      {time.getDate()}
      <br />
      {time.getHours()}
    </div>
  );
}

export default TimelineItem;
