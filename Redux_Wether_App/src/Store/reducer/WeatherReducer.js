const initialState = {
  city: "",
  currentWeather: null,
  forecast: [],
  loading: false,
  error: null,
};

export const WeatherReducer = (state = initialState, action) => {
  if (action.type === "FEATCH_WEATHER_PENDING") {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === "FEATCH_CURRENT_SUCCESS") {
    return {
      ...state,
      loading: false,
      currentWeather: action.payload,
    };
  }

  if (action.type === "FEATCH_FORECAST_SUCCESS") {
    return {
      ...state,
      loading: false,
      forecast: action.payload,
    };
  }

  if (action.type === "FEATCH_WEHTER_ERROR") {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === "SET_CITY") {
    return {
      ...state,
      city: action.payload,
    };
  }

  return state;
};
