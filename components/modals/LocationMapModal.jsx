import { Typography } from '../typography';
import { size } from '../../styles/breakpoints';
import { useState } from 'react';

import { GoogleApiWrapper, Marker, Map, InfoWindow } from 'google-maps-react-18-support';

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
    description: "Plenty of jobs here - it's the curries.",
  },
  {
    locationName: 'Warrington',
    latitude: 53.39,
    longitude: -2.597,
    price: 'GBP 72,000',
    description:
      '17 square miles of toilets. All of them need stress tests!',
  },
  {
    locationName: 'Preston',
    latitude: 53.7632,
    longitude: -2.7031,
    price: 'GBP 80,000',
    description: "North End? South End more like it - lots of toilets hereabouts.",
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
    if (event.target.classList.contains('modalBackdrop')) {
      props.onClose();
    }
  };

  const rochdale = {
    lat: 53.6097,
    lng: -2.1561,
  };

  return (
    <>
      <div className="modalBackdrop" onClick={handleBackdropClick}>
        <div className="modalContent animated fadeInUp">
          <div className="mapContainer">
            <Map
              google={props.google}
              zoom={8}
              style={{ width: '100%', height: '100%', margin: 'auto' }}
              initialCenter={rochdale}
            >
              {locations.slice(0, 10).map((location, index) => (
                <Marker
                  key={index}
                  position={{ lat: location.latitude, lng: location.longitude }}
                  title={location.locationName}
                  location={location}
                  price={location.price}
                  onClick={onMarkerClick}
                  zIndex={1000}
                />
              ))}
              {selectPlace && (
                <InfoWindow
                  marker={availableMarker}
                  visible={showInfoWindow}
                  onClose={onClose}
                >
                  <div className="infoWindow">
                    <h3>{selectPlace.locationName}</h3>
                    <p>{selectPlace.description}</p>
                    <p>Frachise Price: {selectPlace.price}</p>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modalBackdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modalContent {
          position: relative;
          background-color: white;
          border-radius: var(--borderRadius);
          //padding: 1rem;
          color: var(--clr-text-light);
          border: none;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          max-height: 90%;
          max-width: 90%;
        }

        .mapContainer {
          flex: 1;
          //margin-top: 0.5rem;
          min-height: 400px;
          min-width: 1000px;
        }

        .mapContainer > div {
          position: relative;
        }

        .infoWindow {
          background-color: var(--clr-bg-light);
          color: var(--clr-text-secondary);
          padding: 1 rem 2rem;
        }

        .infoWindow h3 {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--clr-text-secondary);
        }

        .infoWindow p {
          font-size: 1rem;
          font-weight: 500;
          color: var(--clr-text-secondary);
          padding: 0.5rem 0rem;
        }

        .closeButton {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.5rem 1rem;
          background-color: var(--clr-bg-light);
          color: var(--clr-text-secondary);
          border: none;
          cursor: pointer;
          z-index: 2;
        }
      `}</style>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.FSP_GOOGLE_MAPS_API_KEY,
})(LocationMapModal);
