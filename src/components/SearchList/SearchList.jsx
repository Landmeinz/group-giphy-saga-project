import { useSelector } from 'react-redux';

import ListItem from '../ListItem/ListItem.jsx'

// import dataList from './dataList.js'

function SearchList(props) {

    // this is the list from the store; 
    const gifList = props.list;
    console.log('gifList is: ', gifList);

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