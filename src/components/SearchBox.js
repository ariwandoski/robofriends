import React from 'react';

const SearchBox = ( {searchField, searchChange} ) => {
    return (
        <input
        className='ma2 pa2 light-green tc'
        type='search' 
        placeholder='Search your robot' 
        onChange={searchChange}
        />
    );
}

export default SearchBox;