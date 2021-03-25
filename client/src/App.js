
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header'
import Home from './components/homepage/Home'
import Movies from './components/movies/Movies'
import Series from './components/series/Series'
import About from './components/About'
import Contact from './components/Contact'
import MovieDetails from './components/movies/MovieDetails'
import SeriesDetails from './components/series/SeriesDetails'
import WatchMovie from './components/movies/WatchMovie'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Footer from './components/layout/Footer'
import NoConnection from './components/NotFound'
import WatchEpisode from './components/series/WatchEpisode';
import UserContextProvider from './contexts/UserContext';

const App = () => {
  return (
    <div className="App">

      <Router>
        <UserContextProvider>
          <Header />
          <div className="main-container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/movies' component={Movies} />
              <Route path='/moviedetails/:id' component={MovieDetails} />
              <Route path='/series' component={Series} />
              <Route path='/seriesdetails/:id' component={SeriesDetails} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/watchmovie/:id' component={WatchMovie} />
              <Route path='/watchepisode/:id' component={WatchEpisode} />
              <Route path='*' component={NoConnection} />
            </Switch>
          </div>
          <Footer />
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;