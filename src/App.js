import React from 'react';
import Home from './pages/Home';
import MovieContent from './pages/MovieContent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie" exact component={MovieContent} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
