import React from 'react';
import Search from '../Search/Search.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import { Route, HashRouter as Router, Link} from 'react-router-dom';

function App(props) {
  return (
    <>
      <Navbar />
    
      <Router>
        <Route path="/" exact>
          <Search />
        </Route>
        <Route path="/favorites">
          <
        </Route>


      </Router>
    
    <div>
      
    </div>
    </>
  );
}

export default App;
