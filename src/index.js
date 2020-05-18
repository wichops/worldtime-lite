import React from 'react';
import ReactDOM from 'react-dom';

import TimeTable from './TimeTable';
import 'tachyons';

function App() {
  return (
    <section className="bg-light-red pa3 vh-100 sans-serif">
      <div className="mw7 center">
        <h1 className="h1 f1 near-white pb5">WorldTimeLite</h1>
        <TimeTable />
      </div>
    </section>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
