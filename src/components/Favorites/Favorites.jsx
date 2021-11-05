import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchList from '../SearchList/SearchList';

function Favorites() {

    const dispatch = useDispatch();

    function getFavorites() {
        dispatch({type: 'GET_FAVORITES'});
    }

    const favoriteList = useSelector((store) => store.storeFavorites);

    // const favorites = useSelector(store=>store.storeFavorites)

    useEffect(() => {
        getFavorites()
    }, [])

    return(
        <div>
            <h1>Favorites</h1>
            <SearchList list={favoriteList} />
        </div>
        
    )
}

export default Favorites;