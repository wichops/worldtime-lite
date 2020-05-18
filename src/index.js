import React from 'react';
import ReactDOM from 'react-dom';

import TimeTable from './ui/TimeTable';

function App() {
  return (
    <section className="bg-red-400 h-screen font-sans pt-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-gray-100 py-6">WorldTimeLite</h1>
        <TimeTable />
      </div>
    </section>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
