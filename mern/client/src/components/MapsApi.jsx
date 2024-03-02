import React from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

//dummy data. TODO-> update this with MONGODB data.
const coordinates = [
    {lat: -33.680640, lng: -209.698501},
    {lat: -33.845184, lng: -208.772438},
    {lat: -33.921355, lng: -208.741788},
    {lat: -33.680640, lng: -209.698501}
];

//centers around sydney
const center = {
  lat: -33.865143,
  lng: 151.209900,
};

const renderMarkers = () => {
    return coordinates.map((coordinate, index) => (
      <MarkerF key={`${coordinate.lat}-${coordinate.lng}`} position={coordinate} label="RESTAURANT!!" />
    ));
  }

//loads the google maps api with markers
const MapsApi = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCv2IBW9PPcUNPtn9AGl4YfxqlZ2z-5fYA',
    libraries,
  });

  //error checking
  if (loadError) {
    return <div>Error loading maps</div>;
  } else if (!isLoaded) {
    return <div>Loading maps</div>;
  }


  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
      >
        {renderMarkers()}
      </GoogleMap>
    </div>
  );
};

export default MapsApi;