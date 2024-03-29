import "./App.css";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Centennial",
    time: "13:35, Friday (February 16, 2024)",
    description: "broken clouds",
    humidity: "67%",
    wind: "4.12km/h",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 3,
  };

  return (
    <div className="App">
      <div>
        <header>
          <h1>🌞WEATHER</h1>

          <form className="form-input">
            <input
              type="search"
              className="form-input-city"
              placeholder="Enter a City... "
              required
            />
            <input
              type="submit"
              className="form-input-button"
              value="🔍Search"
            />
          </form>
        </header>
      </div>

      <h2 className="weather-app-city">{weatherData.city}</h2>

      <div className="time">{weatherData.time}</div>
      <main className="weather-app-main">
        <div>
          <p className="weather-app-details">
            <br />
            <span className="material-symbols-outlined"></span>
            <span> {weatherData.description}</span>
            <br />
            <span className="material-symbols-outlined"></span>
            Humidity:
            <span>
              <strong> {weatherData.humidity} </strong>
            </span>
            <br />
            <span className="material-symbols-outlined"></span>
            Wind:
            <span>
              <strong> {weatherData.wind} </strong>
            </span>
          </p>
        </div>
        <div className="weather-app-box">
          <div className="weather-app-icon">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
          </div>
          <div className="weather-app-temperature">
            {weatherData.temperature}
          </div>
          <div className="weather-app-unit">°C</div>
        </div>
      </main>

      <footer>
        <p>
          👩‍💻Coded by{" "}
          <a
            href="https://github.com/roseann1024"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Rose Ann Austria
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/roseann1024/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://weather-app-react-rva.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
