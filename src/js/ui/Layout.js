import React, { useContext, useEffect, useRef } from 'react';

import MarkerContext from '/src/js/MarkerContext';
import TimeTable from './TimeTable';

function Layout() {
  const context = useContext(MarkerContext);
  const containerRef = useRef(null);

  function handleScroll(e) {
    context.setScrollPosition(e.target.scrollLeft);
  }

  useEffect(() => {
    context.setScrollLeft(containerRef.current.scrollLeft);
  }, []);

  return (
    <section className="bg-salmon h-screen font-sans pt-4 px-4">
      <h1 className="text-4xl text-gray-100 font-bold py-6 text-center">
        WorldTimeLite
      </h1>
      <div
        className="w-full overflow-y-hidden overflow-x-auto mx-auto"
        onScroll={handleScroll}
        ref={containerRef}
      >
        <TimeTable />
      </div>
    </section>
  );
}

export default Layout;
