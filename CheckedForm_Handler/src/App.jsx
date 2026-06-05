import { useState } from "react";

function App() {
  const [Country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const country = {
    India: ["Bangalore", "Delhi", "Mumbai"],
    Japan: ["Tokyo", "Osaka"],
    USA: ["New York", "Los Angeles"],
    China: ["Beijing", "Shanghai"],
  };

  console.log(Country, city);

  return (
    <div>
      {/* Country dropdown */}
      <select
        value={Country}
        onChange={(e) => {
          setCountry(e.target.value);
          setCity("");
        }}
      >
        <option value="">--Select Country--</option>
        {Object.keys(country).map((items) => (
          <option value={items} key={items}>
            {items.toLocaleUpperCase()}
          </option>
        ))}
      </select>

      {/* City dropdown (only shows when a country is selected) */}
      {Country && (
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          <option value="">--Select City--</option>
          {country[Country].map((items) => (
            <option value={items} key={items}>
              {items.toLocaleUpperCase()}
            </option>
          ))}
        </select>
      )}
      <p>Country : {Country}</p>
      <p>City : {city}</p>
    </div>
  );
}

export default App;
