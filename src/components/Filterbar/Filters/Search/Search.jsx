import React from 'react';

const Search = (props) => {
    return (
        <div>
            <input value={props.search} onChange={props.onChangeSearch}/>
            <button onClick={props.onHandleSearch}>Search</button>
        </div>
    )
}

export default Search;