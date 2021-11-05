import ListItem from '../ListItem/ListItem';
import { useSelector } from 'react-redux';

function FavCard({ gif }) {
  // fetch the categories from the redux store
  const categoriesList = useSelector((store) => store.setCategories);

  return (
    <>
      <ListItem gif={gif} />
      <label for="categories">Choose a category:</label>
      <select id="categoriesDropdown" name="categories">
        {categoriesList.map((category) => {
          return (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default FavCard;
