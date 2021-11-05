import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchList from '../SearchList/SearchList';

function Favorites() {

    const dispatch = useDispatch();

    dispatch({type: 'GET_FAVORITES', payload: favorites});
    const favoriteList = useSelector((store) => store.storeFavorites);

    const favorites = useSelector(store=>store.storeFavorites)

    return(
        <div>
            <h1>Favorites</h1>
            <SearchList list={favoriteList} />
        </div>
        
    )
}

export default Favorites;