/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        // bl_latitude: 11.847676,
        // bl_longitude: 12.838442,
        // tr_longitude: 109.095887,
        // tr_latitude: 109.149359,
      },
      headers: {
        // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'x-rapidapi-key': 'e0c1a4cd62mshd89638a68b174c2p176d1djsncc879c7a44a7',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
