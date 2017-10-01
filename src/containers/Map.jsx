import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from 'react-google-maps';
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
)(({offices}) => {
    console.log(offices)
    return (
      <GoogleMap
        defaultZoom={2}
        defaultCenter={{ lat: 33.4, lng: 18.2 }}
      >
        {offices
          .map(office =>
            <Marker
              key={office.id}
              position={{
                lat: parseFloat(office.latitude),
                lng: parseFloat(office.longitude),
              }}
            >
            </Marker>
          )
        }
      </GoogleMap>
    );
  }
)

class Map extends Component {

  render() {
    const { offices } = this.props;
    return (
      <div className="map-wrapper">
        <Gmap offices={offices}/>
      </div>
    );
  }
}

export default Map;
