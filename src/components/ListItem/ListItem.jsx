import { useSelector, useDispatch } from 'react-redux';

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
        dispatch({ type: 'ADD_FAVORITE', payload: gif });
        break;
    }
  };

  return (
    <div>
      <img src={gif.images.fixed_height.url} alt={gif.title} />
      {favoriteListIds.includes(gif.id) ? (
        <button onClick={() => handleClick('remove')}>REMOVE</button>
      ) : (
        <button onClick={() => handleClick('fav')}>FAV</button>
      )}
    </div>
  );
}

export default ListItem;
