import React from 'react';

import TimeTable from './TimeTable';
import Container from './Container';

function Layout() {
  return (
    <section className="bg-salmon h-screen font-sans pt-4">
      <div className="min-w-5xl max-w-6xl mx-auto">
        <h1 className="text-4xl text-gray-100 font-bold py-6 text-center">
          WorldTimeLite
        </h1>
        <Container />
      </div>
    </section>
  );
}

export default Layout;
