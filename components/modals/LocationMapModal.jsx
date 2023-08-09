import { useState } from 'react';

import styles from './modals.module.css';

import {
  GoogleApiWrapper,
  Marker,
  Map,
  InfoWindow,
} from 'google-maps-react-18-support';
import { Spinner } from '@utils/index';

const LoadingContainer = () => <Spinner />;

const locations = [
  {
    locationName: 'Rochdale',
    latitude: 53.6097,
    longitude: -2.1561,
    price: 'GBP 65,000',
    description:
      'Council sewage system often fails, & that means plenty of work!',
  },
  {
    locationName: 'Bradford',
    latitude: 53.7938,
    longitude: -1.7564,
    price: 'GBP 80,000',
    description: "Plenty of jobs here - it's all the great curries & kebabs!",
  },
  {
    locationName: 'Warrington',
    latitude: 53.39,
    longitude: -2.597,
    price: 'GBP 72,000',
    description: '17 square miles of toilets. All of them need stress tests!',
  },
  {
    locationName: 'Preston',
    latitude: 53.7632,
    longitude: -2.7031,
    price: 'GBP 80,000',
    description:
      'North End? South End more like it - lots of toilets hereabouts.',
  },
];

const LocationMapModal = (props) => {
  const [availableMarker, setAvailableMarker] = useState(null);
  const [selectPlace, setSelectPlace] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const onMarkerClick = (props, marker) => {
    setAvailableMarker(marker);
    setSelectPlace(props.location);
    setShowInfoWindow(true);
  };
  const onClose = () => {
    setAvailableMarker(null);
    setSelectPlace(null);
    setShowInfoWindow(false);
  };

  const handleBackdropClick = (event) => {
    if (event.target.classList.contains(styles.modalBackdrop)) {
      props.onClose();
    }
  };

  const rochdale = {
    lat: 53.6097,
    lng: -2.1561,
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={`${styles.modalContent}`} animated fadeInUp>
        <div className={styles.mapContainer}>
          <Map
            google={props.google}
            zoom={8}
            style={{
              width: '100%',
              height: '100%',
              margin: 'auto',
            }}
            containerStyle={{
              border: '2px solid white',
            }}
            initialCenter={rochdale}
            mapTypeControl={false}
            streetViewControl={false}
            panControl={false}
            fullscreenControl={false}
            zoomControl={false}
          >
            {locations.slice(0, 10).map((location, index) => (
              <Marker
                key={index}
                position={{ lat: location.latitude, lng: location.longitude }}
                title={location.locationName}
                location={location}
                price={location.price}
                onClick={onMarkerClick}
              />
            ))}
            {selectPlace && (
              <InfoWindow
                marker={availableMarker}
                visible={showInfoWindow}
                onClose={onClose}
              >
                <div className={styles.infoWindow}>
                  <h3>
                    {selectPlace.locationName}: {selectPlace.price}
                  </h3>
                  <p>{selectPlace.description}</p>
                </div>
              </InfoWindow>
            )}
          </Map>
        </div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  LoadingContainer: LoadingContainer,
})(LocationMapModal);
