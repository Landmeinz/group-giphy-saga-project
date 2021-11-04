
import { useSelector } from 'react-redux';

function ListItem({gif}) {


    // this is the favorite list that we need to get from the store; 
    // const favoriteList = useSelector(store => store.setFavorites);



    return(
        <div>
             <img
                src={gif.images.fixed_height.url} 
                alt={gif.title} 
             />
             <button>FAV / REMOVE</button>
        </div>
    )
};

export default ListItem;