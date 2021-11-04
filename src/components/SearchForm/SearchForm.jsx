
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function SearchForm() {

    const dispatch = useDispatch();

    // using local state to grab the text input from the DOM; 
    const [search, setSearch] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        console.log('CLICKED on submit');

        dispatch({
            type:   'GET_RESULTS',
            payload: search
        });
        setSearch('');
    }; // handleSubmit

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit">SUBMIT</button>
        </form>
    )
};

export default SearchForm; 