import './index.css'
import sun from './assets/sun.png';
import cloud from './assets/cloud.png';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [forecast, setForecast] = useState([]);
  const [current, setCurrent] = useState({});


  useEffect(() => {
    axios({
      url: `https://api.openweathermap.org/data/2.5/onecall`,
      params: {
        appid: `bb76118f1042e0eac79c5ee53dfb64ca`,
        lat: 43.6662,
        lon: -79.3343,
        units: `metric`,
      },
    }).then((res) => {
      console.log(res);
      setForecast(res.data.daily);
      setCurrent(res.data.current);
    });
    
  }, []);

  
  return (
    <Router>
      <div>
        <Header />

        <div className="currentContainer wrapper">
          <img src={sun} alt="An illustrated sun" className="sun" />
          <h2>Your Current Conditions</h2>
          <p>Likely to encounter: {current.weather[0].description}</p>
          <p>Temperature: {Math.floor(current.temp)} ºC</p>
          <p>(But it really feels like): {Math.floor(current.feels_like)} ºC</p>
          <img src={cloud} alt="An illustrated cloud" className="cloud" />
        </div>
        <div className="forecastContainer wrapper">
        <h2>Your Look-Ahead</h2>
          <ul>
            {forecast.map((weather) => {
              return(
                <li key={weather.weather.id}>
                  <span>The high: {Math.floor(weather.temp.max)}ºC</span>
                  <span>The low: {Math.floor(weather.temp.min)}ºC</span>
                  <span>Wind speed: {weather.wind_speed} m/s</span>
                  <span>PoP: {weather.pop}</span>
                  <span>Humidity: {weather.humidity}%</span>
                </li>
              )
            }).slice(1)}
          </ul>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
