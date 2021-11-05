
import SearchForm from '../SearchForm/SearchForm.jsx'
import SearchList from '../SearchList/SearchList.jsx'
import {useSelector} from 'react-redux';

function Search() {

    const results = useSelector(store=>store.setResults)

    return(
        <div>
            <h1>Giphy Search!</h1>
            <SearchForm />
            <SearchList list={results}/>
        </div>
    )
};

export default Search; 