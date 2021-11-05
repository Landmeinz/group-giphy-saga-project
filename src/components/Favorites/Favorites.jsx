import React from 'react';
import { useSelector } from 'react-redux';
import SearchList from '../SearchList/SearchList';

function Favorites() {

    const favorites = useSelector(store=>store.setFavorites)

    return(
        <div>
            <h1>Favorites</h1>
            <SearchList list={favorites} />
        </div>
        
    )
}

export default Favorites;