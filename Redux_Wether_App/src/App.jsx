import "./App.css";
import { Forecast } from "./components/Forcast";
import { SearchWeather } from "./components/SearchWeather";
import { WeatherCard } from "./components/WeatherCard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-300 via-blue-300 to-indigo-700 flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold text-white mb-8">Weather App</h1>

      <SearchWeather />

      <WeatherCard />
      <Forecast />
    </div>
  );
}

export default App;
