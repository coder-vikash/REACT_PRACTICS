import axios from "axios";

const API_Key = import.meta.env.VITE_WEATHER_API;

import {
  FETCH_CURRENT_SUCCESS,
  FETCH_FORECAST_SUCCESS,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_ERROR,
  SET_CITY,
} from "../constant/WeatherConstant";

export const fetchWeatherPending = () => ({
  type: FETCH_WEATHER_PENDING,
});

export const fetchCurrentSuccess = (data) => ({
  type: FETCH_CURRENT_SUCCESS,
  payload: data,
});

export const fetchForecastSuccess = (data) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload: data,
});

export const fetchWeatherError = (error) => ({
  type: FETCH_WEATHER_ERROR,
  payload: error,
});

export const setCity = (city) => ({
  type: SET_CITY,
  payload: city,
});

export const fetchWeather = (city) => {
  return async (dispatch) => {
    if (!city || city.trim().length < 2) {
      return;
    }

    dispatch(fetchWeatherPending());

    try {
      const currentWeatherData = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`,
      );

      const forecastData = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_Key}&units=metric`,
      );

      dispatch(fetchCurrentSuccess(currentWeatherData.data));
      dispatch(fetchForecastSuccess(forecastData.data.list));

      console.log("Current Weather:", currentWeatherData.data);
      console.log("Forecast:", forecastData.data.list);
    } catch (error) {
      console.log("Error:", error.response?.data);

      dispatch(
        fetchWeatherError(error.response?.data?.message || error.message),
      );
    }
  };
};
