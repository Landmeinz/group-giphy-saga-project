import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchList from '../SearchList/SearchList';

function Favorites() {

    const favorites = useSelector(store=>store.setFavorites)

    const dispatch = useDispatch();

    dispatch({type: 'ADD_FAVORITE', payload: favorites});

    return(
        <div>
            <h1>Favorites</h1>
            <SearchList list={favorites} />
        </div>
        
    )
}

export default Favorites;