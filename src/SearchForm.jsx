import React, { useState } from 'react';
import { useGlobalContext } from './context';

function SearchForm() {
  const { setSearch } = useGlobalContext();
  const [imageSearch, setImageSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(imageSearch);
    setImageSearch('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          className="form-input"
          value={imageSearch}
          onChange={(e) => setImageSearch(e.target.value)}
          placeholder="cat"
        />
        <button className="btn">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
