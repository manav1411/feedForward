import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '90vh', // Adjust height to allow space for the search bar
};

//dummy data. TODO-> update this with MONGODB data.
const coordinates = [
  { lat: -33.980640, lng: -208.788501 },
  { lat: -33.845184, lng: -208.772438 },
  { lat: -33.921355, lng: -208.741788 },
];

const siteLinks = [
    "dummy-restaurant1",
    "dummy-restaurant2",
    "dummy-restaurant3",
    "dummy-restaurant4"
  ];


  const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = () => {
      if (searchTerm.trim() !== "") {
        onSearch(searchTerm);
      }
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a place..."
          className="border border-input h-9 px-3 mr-2 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    );
  };
  

  const MapsApi = () => {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: 'AIzaSyCv2IBW9PPcUNPtn9AGl4YfxqlZ2z-5fYA', // Remember to replace with your actual API key
      libraries,
    });

    const navigate = useNavigate();
    const [center, setCenter] = useState(null);

    useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const searchTerm = searchParams.get('search');

      if (searchTerm && isLoaded) {
        const service = new window.google.maps.places.PlacesService(document.createElement('div'));

        service.findPlaceFromQuery({
          query: searchTerm,
          fields: ['name', 'geometry'],
        }, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0].geometry) {
            setCenter(results[0].geometry.location.toJSON());
          } else {
            console.error('Place not found:', status);
          }
        });
      } else {
        // Set default center only if searchTerm is not present
        setCenter({ lat: -37.865143, lng: 151.209900 });
      }
    }, [isLoaded]);

  const handleMarkerClick = (coordinate) => {
    // Find index based on matching coordinates
    const index = coordinates.findIndex(c => c.lat === coordinate.lat && c.lng === coordinate.lng);
    // Check if the index was found
    if(index !== -1){
      navigate("/" + siteLinks[index]);
    } else {
      // Handle the error case where the coordinate wasn't found
      console.error('restaurant subpage not found!');
    }
  };

  const handleSearchOnMap = (searchTerm) => {
    if (isLoaded) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));

      service.findPlaceFromQuery({
        query: searchTerm,
        fields: ['name', 'geometry'],
      }, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0].geometry) {
          setCenter(results[0].geometry.location.toJSON());
        } else {
          console.error('Place not found:', status);
        }
      });
    }
  };


  const renderMarkers = () => {
    return coordinates.map((coordinate, index) => (
      <MarkerF
        key={`${coordinate.lat}-${coordinate.lng}`}
        position={coordinate}
        label="RESTAURANT!!"
        onClick={() => handleMarkerClick(coordinate)}
      />
    ));
  }

  //error checking
  if (loadError) {
    return <div>Error loading maps</div>;
  } else if (!isLoaded) {
    return <div>Loading maps</div>;
  }

    // Use a conditional render for the GoogleMap component 
    // to ensure it only renders once the center state has been set
    return (
        <div>
          <SearchBar onSearch={handleSearchOnMap} />
          {center && (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={13}
              center={center}
            >
              {renderMarkers()}
            </GoogleMap>
          )}
          {!center && <div>Loading map...</div>}
        </div>
      );
    };
    
    export default MapsApi;
    