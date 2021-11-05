import React from 'react';
import Favorites from '../Favorites/Favorites.jsx';
import Search from '../Search/Search.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';


function App(props) {
  return (
    <>
      <Navbar />
      <Router>
        <Route exact path='/'>
          <Search />
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
      </Router>
    </>
  );
}

export default App;
