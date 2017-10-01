import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps } from "recompose";

import { googleMapURL } from '../utilities/utilities';

const Gmap = compose(
  withProps({
    googleMapURL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: 33.4, lng: 18.2 }}
  >
  </GoogleMap>
)

class Map extends Component {
  render() {
    return (
      <div className="map-wrapper">
        <Gmap />
      </div>
    );
  }
}

export default Map;
