import ListItem from '../ListItem/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { getListItemAvatarUtilityClass } from '@mui/material';

function FavCard({ gif }) {
  // fetch the categories from the redux store
  const categoriesList = useSelector((store) => store.setCategories);

  const dispatch = useDispatch();

  console.log(`this is gif in FavCard`, gif);
  
  const handleCategory = (e) => {
    console.log('cat clicked');
    console.log('event is: ', e.target.value);
    dispatch({type: 'SELECT_CATEGORY', payload: {id: gif.id, category: e.target.value}})

  }
  return (
    <>
      <ListItem gif={gif} />
      <label for="categories">Choose a category:</label>
      <select onChange={handleCategory} id="categoriesDropdown" name="categories">
        {gif.category_id ? 
        <option selected='selected' hidden ></option>
        :
        <option hidden>Select a Category</option>
        }
        {categoriesList.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default FavCard;
