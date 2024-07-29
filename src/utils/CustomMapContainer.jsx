import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const CustomMapContainer = ({ 
  latitude, 
  longitude, 
  defaultCenter, 
  zoom, 
  height = "60vh", 
  width = "100%", 
  markers = [] 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const mapStyles = {
    height: height,
    width: width,
    borderRadius: "10px",
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
            hue: "#84bef1",
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

  const markerOptions = {
    cursor: 'default',
  };

  const isValidMarker = (marker) => {
    return marker.latitude && !isNaN(marker.latitude) && marker.longitude && !isNaN(marker.longitude);
  };

  return (
    <div style={{ display: isLoaded ? "block" : "none" }}>
      {isLoaded && (
        <LoadScript googleMapsApiKey="AIzaSyAmaZMMaAgoUxEmbWdg1Xv0d2dSibZcZs8">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={zoom}
            center={defaultCenter}
            options={mapOptions}
          >
            {markers.length > 0 ? (
              markers.filter(isValidMarker).map((marker, index) => (
                <MarkerF
                  key={index}
                  position={{
                    lat: parseFloat(marker.latitude),
                    lng: parseFloat(marker.longitude),
                  }}
                  options={markerOptions}
                />
              ))
            ) : (
              latitude &&
              !isNaN(latitude) &&
              longitude &&
              !isNaN(longitude) && (
                <MarkerF
                  position={{
                    lat: parseFloat(latitude),
                    lng: parseFloat(longitude),
                  }}
                  options={markerOptions}
                />
              )
            )}
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default CustomMapContainer;
