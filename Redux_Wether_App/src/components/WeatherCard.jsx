import { useSelector } from "react-redux";

export const WeatherCard = () => {
  const { currentWeather, loading, error } = useSelector(
    (state) => state.weather,
  );

  if (loading) {
    return (
      <div className="mt-8">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error mt-8 w-full max-w-md">
        <span>{error}</span>
      </div>
    );
  }

  if (!currentWeather) {
    return (
      <div className="mt-8 text-center text-gray-400">
        Search a city to view weather
      </div>
    );
  }

  return (
    <div className="card w-full max-w-md bg-base-100 shadow-2xl mt-8">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">{currentWeather.name}</h2>

        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt="weather"
          className="w-24"
        />

        <h1 className="text-6xl font-bold">
          {Math.round(currentWeather.main.temp)}°
        </h1>

        <p className="text-xl capitalize">
          {currentWeather.weather[0].description}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6 w-full">
          <div className="bg-base-200 p-4 rounded-xl">
            <p className="text-sm">Feels Like</p>
            <p className="font-bold">
              {Math.round(currentWeather.main.feels_like)}°
            </p>
          </div>

          <div className="bg-base-200 p-4 rounded-xl">
            <p className="text-sm">Humidity</p>
            <p className="font-bold">{currentWeather.main.humidity}%</p>
          </div>

          <div className="bg-base-200 p-4 rounded-xl">
            <p className="text-sm">Wind</p>
            <p className="font-bold">{currentWeather.wind.speed} m/s</p>
          </div>

          <div className="bg-base-200 p-4 rounded-xl">
            <p className="text-sm">Pressure</p>
            <p className="font-bold">{currentWeather.main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};
