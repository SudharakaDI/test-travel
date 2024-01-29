import React from "react";
import GoogleMapReact from 'google-map-react';
import { CssBaseline, Grid } from "@material-ui/core";
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';
// import mapStyles from '../../mapStyles.js';
import useStyles from './styles.js';
import { Rating } from "@material-ui/lab";


export default function Map({ setCoords, setBounds, coords, places }) {

  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  // const coordinates = { lat: 0, lng: 0 }

  const defaultProps = {
    center: {
      lat: 7.514547,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className={classes.mapContainer}>
      <CssBaseline />
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCJAXJCim23dTUoFIKjITS0Fn0VIWeGTxs' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e);
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      >
        <div
          className={classes.markerContainer}
          lat={Number(7.2906)}
          lng={Number(80.6337)}
        >
          <LocationOnOutlinedIcon color="primary" fontSize="large" />
        </div>
        {console.log("Num of places :", places.length)}

        {/* {places.length && places.map((place, i) => (


          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {console.log("Matches: ", matches)}
            {console.log("Latitude :", place.latitude)}

            {!matches
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />

              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))} */}

      </GoogleMapReact>
    </div>
  );
}