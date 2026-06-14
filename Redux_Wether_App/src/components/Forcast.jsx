import { useSelector } from "react-redux";

export const Forecast = () => {
  const forecast = useSelector((state) => state.weather.forecast);

  if (!forecast?.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
      {forecast.slice(0, 5).map((item, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg p-4 rounded-xl text-white text-center border-2 border-black"
        >
          <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>

          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt=""
            className="mx-auto"
          />

          <p className="font-bold">{Math.round(item.main.temp)}°</p>
        </div>
      ))}
    </div>
  );
};
