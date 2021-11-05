
import SearchForm from '../SearchForm/SearchForm.jsx'
import SearchList from '../SearchList/SearchList.jsx'
import {useSelector} from 'react-redux';

function Search() {

    const results = useSelector(store=>store.setResults)
    const list =[]

    for(let index of results) {
        let newIndex = {
            title: index.title,
            url: index.images.fixed_height.url,
            id: index.id,
            isFavorite: false
        }
        list.push(newIndex)
    }

    return(
        <div>
            <h1>Giphy Search!</h1>
            <SearchForm />
            <SearchList list={list}/>
        </div>
    )
};

export default Search; 