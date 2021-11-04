import { useSelector } from 'react-redux';

import ListItem from '../ListItem/ListItem.jsx'

// import dataList from './dataList.js'

function SearchList() {

    // this is the list from the store; 
    const gifList = useSelector(store => store.setResults);

    // console.log(dataList);

    // const gifList = dataList
    return(
        <div>
            {gifList.map(gif => (
                <ListItem 
                    key={gif.id}
                    gif={gif}
                />
            ))}
        </div>
    )
};

export default SearchList; 