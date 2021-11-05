import { useSelector, useDispatch } from 'react-redux';

// import MUI components;
import Card from '@mui/material/Card';

function ListItem({ gif }) {
  console.log('this is gif in ListItem: ', gif);
  // this is the favorite list that we need to get from the store;

  // JUST TO TEST
  // const favoriteList = [{ giphy_id: '3o6gDRiDhpXBxUDtaU' }];

  // get an array of ids from the favoriteList
  // const favoriteListIds = favoriteList.map((favorite) => favorite.giphy_id);

  const dispatch = useDispatch();

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
      {(gif.isFavorite) ?
        (
          <div>
            <img src={gif.url} alt={gif.title} />
            <button onClick={() => handleClick('remove')}>REMOVE</button>
          </div>
        ) : (
          <div>
            <img src={gif.url} alt={gif.title} />
            <button onClick={() => handleClick('fav')}>FAV</button>
          </div>
        )}
    </Card>
  );
}

export default ListItem;
