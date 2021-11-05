import React from 'react';
import Favorites from '../Favorites/Favorites.jsx';
import Search from '../Search/Search.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';

function App(props) {
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Search />
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
