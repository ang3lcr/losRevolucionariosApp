import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './location.css';


const mapStyles = {
  height: "500px",
  width: "100%"
};

const defaultCenter = {
  lat: 19.7299655, // Nueva latitud de la ubicación
  lng: -101.1990733 // Nueva longitud de la ubicación
};

const locationCoordinates = {
  lat: 19.7299655, // Nueva latitud de la ubicación
  lng: -101.1990733 // Nueva longitud de la ubicación
};

const Location = () => {
  const [zoom, setZoom] = useState(19);
  const [center, setCenter] = useState(defaultCenter);
  const [infoOpen, setInfoOpen] = useState(false);

  const handleZoomChange = () => {
    const mapZoom = zoom;
    setZoom(mapZoom);
    setCenter(locationCoordinates);
  };

  const handleMarkerClick = () => {
    setInfoOpen(!infoOpen);
  };

  return (
    <div className="location-page">
      <div className="location-container">
        <div className="rectangle">
          <p>DIRECCIÓN: Av. Torreon Nuevo 519, Vicente Riva Palacio, 58116 Morelia, Mich.</p>
          <p>ABIERTO: 10am - 1am</p>
          <p>TELÉFONO: 4432324326</p>
        </div>
        <LoadScript googleMapsApiKey="AIzaSyAsOwUsKi91NMO00it1OXyaNk5ygW6qsiU">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={zoom}
            center={center}
            onZoomChanged={handleZoomChange}
          >
            <Marker position={locationCoordinates} onClick={handleMarkerClick}>
              {infoOpen && (
                <InfoWindow onCloseClick={handleMarkerClick}>
                  <div>
                    <p>DIRECCIÓN: Av. Torreon Nuevo 519, Vicente Riva Palacio, 58116 Morelia, Mich.</p>
                    <p>ABIERTO: 10am - 1am</p>
                    <p>TELÉFONO: 4432324326</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Location;