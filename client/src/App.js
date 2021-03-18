import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Movies from './components/Movies'
import Series from './components/Series'
import About from './components/About'
import Contact from './components/Contact'
import MovieDetails from './components/MovieDetails'
import SeriesDetails from './components/SeriesDetails'
import WatchMovie from './components/WatchMovie'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import NoConnection from './components/NotFound'
import WatchEpisode from './components/WatchEpisode';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/moviedetails/:id' component={MovieDetails} />
            <Route path='/seriesdetails/:id' component={SeriesDetails} />
            <Route path='/watchmovie/:id' component={WatchMovie} />
            <Route path='/watchepisode/:id' component={WatchEpisode} />
            <Route path='*' component={NoConnection} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;