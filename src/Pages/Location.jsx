import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapStyles = {
  height: "500px",
  width: "100%"
};

const defaultCenter = {
  lat: 19.7299655,
  lng: -101.1990733
};

const locationCoordinates = {
  lat: 19.7299655,
  lng: -101.1990733
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
    <div className="location-page flex flex-col items-center mt-8">
      <div className="w-full bg-black text-white text-center p-8 mb-8">
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">DIRECCIÓN: Av. Torreon Nuevo 519, Vicente Riva Palacio, 58116 Morelia, Mich.</p>
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">ABIERTO: 10am - 1am</p>
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">TELÉFONO: 4432324326</p>
      </div>
      <div className="location-container w-full max-w-screen-lg px-4">
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
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl">
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
