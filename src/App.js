import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WeatherDetails from './WeatherDetails';

function App() {

  
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/weather" component={WeatherDetails} />

        <Footer />

      </div>
    </Router>
  );
}

export default App;
