import ListItem from '../ListItem/ListItem';

function FavCard({ gif }) {
  return (
    <>
      <ListItem gif={gif} />
      <label for="categories">Choose a category:</label>
      <select id="categoriesDropdown" name="categories">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
    </>
  );
}

export default FavCard;
