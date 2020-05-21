import React from 'react';

import TimeTable from './TimeTable';
import Container from './Container';

function Layout() {
  return (
    <section className="bg-red-400 h-screen font-sans pt-4">
      <div className="max-w-6xl min-w-5xl mx-auto">
        <h1 className="text-4xl text-gray-100 py-6">WorldTimeLite</h1>
        <Container />
      </div>
    </section>
  );
}

export default Layout;
