import React from 'react';

const MarkerContext = React.createContext({
  height: 0,
  left: 0,
  offset: 0,
  listOffset: 0,
  setLeft: () => {},
  setHeight: () => {},
  setResizePosition: () => {},
});

export default MarkerContext;
