import { useHistory } from 'react-router-dom';

function Header() {
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/weather");
  }

  return(
    <header>
      <h1>👋 Hello, Weather!</h1>
      <form action="" >
        <label htmlFor="city">Where to friend?</label>
        <input type="text" id="city" placeholder="Enter a city..." required />
        <button type="submit" 
          onClick={handleSubmit}>Show Me</button>
      </form>
    </header>
  )
}

export default Header;