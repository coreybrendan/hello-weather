import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Header() {
  let [city, setCity] = useState('');
  let history = useHistory();

  function handleSubmit() {
    // event.preventDefault();
    history.push("/weather");
  }

  const namePrefix = encodeURIComponent(city);

  function getCity(e) {
    e.preventDefault();
    axios({
      method: 'GET',
      url: `https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding`,
      params: {
        city: namePrefix,
        format: 'json',
      },
      headers: {
        'x-rapidapi-key': 'fc2f5f842fmsh9040c3bedc1e59ep161878jsn8475b76c4099',
        'x-rapidapi-host': 'geocoding-by-api-ninjas.p.rapidapi.com'
      }
    }).then((result) => {
      console.log(result.data[0].latitude);
      console.log(result.data[0].longitude);
      // setCity(result.data);
    });

  }

  return(
    <header>
      <h1>👋 Hello, Weather!</h1>
      <form action="" onSubmit={getCity} >
        <label htmlFor="city">Where to friend?</label>
        <input type="text" id="city" placeholder="Enter a city..." value={city.name} onChange={(e) => setCity(e.target.value)} required />
        <button type="submit" onClick={handleSubmit}>Show Me</button>
      </form>
    </header>
  )
}

export default Header;