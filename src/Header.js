function Header() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('a click event!');
  }

  return(
    <header>
      <h1>👋 Hello, Weather!</h1>
      <form action="" >
        <label htmlFor="city">Where to friend?</label>
        <input type="text" id="city" placeholder="Enter a city..." required />
        <button 
          type="submit" 
          onClick={handleSubmit}
          >Show Me
        </button>
      </form>
    </header>
  )
}

export default Header;