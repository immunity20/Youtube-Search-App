import React from 'react';

const SearchBar = function(props) {
  return (
    <div className="search-bar" >
      <input onChange={event => props.searchTerm(event.target.value) }
      placeholder="kiteboarding"
      />
    </div>
  );
}

export default SearchBar;
