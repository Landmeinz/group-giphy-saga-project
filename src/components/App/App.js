import React from 'react';
import Favorites from '../Favorites/Favorites.jsx';
import Search from '../Search/Search.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();

  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Router>
    </>
  );
}

export default App;
