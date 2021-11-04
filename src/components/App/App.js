import React from 'react';
import Search from '../Search/Search.jsx';
import Navbar from '../Navbar/Navbar.jsx';

function App(props) {
  return (
    <>
    <Navbar />
    <div>
      <Search />
    </div>
    </>
  );
}

export default App;
