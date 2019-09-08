import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { loadCss, loadModules } from 'esri-loader';

import './App.scss';
loadCss();

class App extends Component {
  constructor() {
    super();
    this.state = {
      num: 111,
    };
  }

  async componentDidMount() {
    const [Map, MapView] = await loadModules(['esri/Map', 'esri/views/MapView']);

    const map = new Map({ basemap: 'gray-vector' });

    const view = new MapView({
      map: map,
      container: 'mapView',
      center: [10, 30],
      zoom: 3,
    });

    view.when().then(() => {
      console.log('map view is ready !!!!!!');
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world {this.state.num}.</h1>
        <div id="mapView" />
        <h3>This is new te 111-222-333</h3>
      </div>
    );
  }
}

export default hot(module)(App);
