import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '75vh',
  borderRadius: "10px"
};
const mapOptions = {
    mapTypeControl: false,
    streetViewControl: false,
    minZoom: 1.5,
    styles: [
      {
        featureType: "all",
        elementType: "all",
        stylers: [
          {
            hue: "##F1F1EF",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeec", 
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff", 
          },
        ],
      },
    ],
  };

const MapComponent = ({ center, markers,zoom }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAmaZMMaAgoUxEmbWdg1Xv0d2dSibZcZs8">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={mapOptions}
      >
        {markers.map((marker) => (
          <MarkerF key={marker.id} position={marker.position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
