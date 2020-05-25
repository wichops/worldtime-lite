import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './js/ui/Layout';
import MarkerContext from './js/MarkerContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setResizePosition = (x) => {
      this.setState((state) => ({
        listOffset: x,
        left: x + state.offset,
      }));
    };
    this.setScrollPosition = (x) => {
      if (x === this.state.scrollLeft) return;
      this.setState((state) => ({
        scrollLeft: x,
        left: state.left + (state.scrollLeft - x),
      }));
    };
    this.unsetMarker = () => {
      this.setState({ isSet: false });
    };
    this.setLeft = (x) => {
      if (this.state.left === x) return;
      this.setState((state) => {
        return {
          offset: x - state.listOffset,
          left: x,
        };
      });
    };
    this.setHeight = (height) => {
      this.setState({ height });
    };
    this.setListOffset = (x) => {
      this.setState((state) => ({ listOffset: x, offset: state.left - x }));
    };

    this.setScrollLeft = (x) => {
      this.setState((state) => ({
        scrollLeft: x,
      }));
    };

    this.state = {
      offset: 0,
      scrollLeft: 0,
      listOffset: 0,
      unsetMarker: this.unsetMarker,
      setLeft: this.setLeft,
      setHeight: this.setHeight,
      setScrollLeft: this.setScrollLeft,
      setListOffset: this.setListOffset,
      setResizePosition: this.setResizePosition,
      setScrollPosition: this.setScrollPosition,
    };
  }
  render() {
    return (
      <MarkerContext.Provider value={this.state}>
        <Layout />
      </MarkerContext.Provider>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
