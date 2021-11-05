import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchList from '../SearchList/SearchList';

function Favorites() {
  useEffect(() => {
    console.log(`in useEffect`);
    getFavorites();
  }, []);

  const dispatch = useDispatch();

  function getFavorites() {
    console.log(`in getFavorites`);
    dispatch({ type: 'GET_FAVORITES' });
  }

  const favoriteList = useSelector((store) => store.setFavorites);

  return (
    <div>
      <h1>Favorites</h1>
      <SearchList list={favoriteList} parent={'favorites'} />
    </div>
  );
}

export default Favorites;
