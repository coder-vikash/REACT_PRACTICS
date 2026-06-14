import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, setCity } from "../actions/WeatherActions";

export const SearchWeather = () => {
  const city = useSelector((state) => state.weather.city);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setCity(e.target.value));
  };

  const handleSearchButton = () => {
    if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }

    dispatch(fetchWeather(city.trim()));
  };

  return (
    <div className="w-full max-w-xl flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 shadow-2xl">
      <div className="flex-1 flex items-center gap-3 bg-white/30 rounded-xl border-2 border-black px-4 py-3">
        <svg
          className="h-5 w-5 text-white/70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>

        <input
          type="search"
          placeholder="Search City..."
          value={city}
          onChange={handleInput}
          className="w-full bg-transparent outline-none text-black font-bold placeholder:text-white/80 text-lg"
        />
      </div>

      <button
        onClick={handleSearchButton}
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
      >
        Search
      </button>
    </div>
  );
};
