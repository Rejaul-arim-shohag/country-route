import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <Router>
       <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/countrydetails/:countryName'>
            <CountryDetail/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
       </Switch>
    </Router>
  );
}

export default App;
