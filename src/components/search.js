import React from 'react';

const SearchBar = function(props) {
  return (
    <div className="search-bar">
      <input onChange={event => props.searchTerm(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
