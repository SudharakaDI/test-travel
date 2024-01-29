import logo from './logo.svg';
import { CssBaseline, Grid } from '@material-ui/core';
import './App.css';
import Map from './Components/Map/Map';
import List from './Components/List/List';
import Header from './Components/Header/Header';
import { useEffect, useState } from 'react';
import { getPlacesData } from './api/travelAdvisorAPI';


function App() {

  const [type, setType] = useState('attractions');
  const [rating, setRating] = useState('');

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);


  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      console.log('use effect');
      console.log(bounds);
      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          console.log('inside get places');
          console.log(data);
          setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          setRating('');
          setIsLoading(false);
        });
    }
  }, [bounds, type]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            places={places}

          />
        </Grid>

      </Grid>
    </>
    // <div>
    //   {/* <Header></Header> */}

    // </div>


  );
}

export default App;

// import { Map } from '@googlemaps/react-wrapper'
// import { Marker } from '@googlemaps/react-wrapper'

// function MyMarker() {
//   return <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
// }


// function App() {
//   return (
//     <div>
//       <Map
//         apiKey="AIzaSyCJAXJCim23dTUoFIKjITS0Fn0VIWeGTxs"
//         defaultZoom={8}
//         defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
//         defaultOptions={{ styles: customMapStyles, disableDefaultUI: true }}
//       >
//         <MyMarker />
//       </Map>



//     </div>
//   )
// }

// export default App;
