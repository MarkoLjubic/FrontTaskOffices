import React, { Component } from 'react';
import { withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  InfoWindow
} from 'react-google-maps';
import { compose, withProps } from "recompose";
import PropTypes from 'prop-types';

import { googleMapURL } from '../utilities/config';
import '../styles/Map.css';
import { officesModel } from '../utilities/models';

class innerMap extends Component {
  constructor(props){
    super(props);

    this.state={
      isOpen: -1,
    }

    this.showInfo = this.showInfo.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
  }

  showInfo(id) {
    this.setState({
      isOpen: id,
    });
  }

  hideInfo() {
    this.setState({
      isOpen: -1,
    });
  }

  render() {
    const { offices } = this.props;
    const { isOpen } = this.state;
    return (
      <GoogleMap
        defaultZoom={2}
        defaultCenter={{ lat: 33.4, lng: 18.2 }}
        onClick={() => this.hideInfo()}
      >
        {offices
          .map(office =>
            <Marker
              key={office.id}
              position={{
                lat: parseFloat(office.latitude),
                lng: parseFloat(office.longitude),
              }}
              onClick={() => this.showInfo(office.id)}
            >
            {isOpen === office.id && <InfoWindow>
              <div>
                <div className='marker-header'>
                  {office.name}
                </div>
                <div className='marker-description'>
                  {office.description.length > 60
                    ? <div>{office.description.slice(0, 60)}...</div>
                    : office.description
                  }
                </div>
              </div>
            </InfoWindow>}
            </Marker>
          )
        }
      </GoogleMap>
    );
  }
}

innerMap.defaultProps = {
  offices: [],
}

innerMap.propTypes = {
  offices: officesModel(PropTypes),
};

export const Map = compose(
  withProps({
    googleMapURL,
    loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(innerMap);
