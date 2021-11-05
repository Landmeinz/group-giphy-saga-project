import { useSelector, useDispatch } from 'react-redux';

// import MUI components;
import Card from '@mui/material/Card';

function ListItem({ gif }) {
  // this is the favorite list that we need to get from the store;
  const favoriteList = useSelector((store) => store.setFavorites);

  const dispatch = useDispatch();

  // JUST TO TEST
  // const favoriteList = [{ giphy_id: '3o6gDRiDhpXBxUDtaU' }];

  // get an array of ids from the favoriteList
  const favoriteListIds = favoriteList.map((favorite) => favorite.giphy_id);

  const handleClick = (type) => {
    switch (type) {
      // just in case we want to remove the favorite item
      case 'remove':
        dispatch({ type: '' });
        break;
      // set this as a favorite
      case 'fav':
        dispatch({ type: 'SET_FAVORITE', payload: gif });
        break;
    }
  };

  return (
    <Card 
        variant="outlined"
        sx={{
            boxShadow:  2,
            maxWidth:   350,
            minWidth:   300,
            maxHeight:  200,
            minHeight:  200, 
        }}
    >
      <img src={gif.images.fixed_height.url} alt={gif.title} />
      {favoriteListIds.includes(gif.id) ? (
        <button onClick={() => handleClick('remove')}>REMOVE</button>
      ) : (
        <button onClick={() => handleClick('fav')}>FAV</button>
      )}
    </Card>
  );
}

export default ListItem;
