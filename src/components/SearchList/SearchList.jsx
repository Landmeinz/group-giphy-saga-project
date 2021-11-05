import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import FavCard from '../FavCard/FavCard.jsx';

import ListItem from '../ListItem/ListItem.jsx';

// import dataList from './dataList.js'

function SearchList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES' });
  }, []);

  // this is the list from the store;
  const gifList = props.list;
  console.log('gifList is: ', gifList);

  // console.log(dataList);

  // const gifList = dataList
  return (
    <div>
      {gifList.map((gif) => {
        console.log(`in gifList map, gif is`, gif);
        return props.parent === 'favorites' ? (
          <FavCard key={gif.id} gif={gif} />
        ) : (
          <ListItem key={gif.id} gif={gif} />
        );
      })}
    </div>
  );
}

export default SearchList;
