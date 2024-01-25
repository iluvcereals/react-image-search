import React, { useState } from 'react';
import { useGlobalContext } from './context';

function SearchForm() {
  const { setSearch } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(() => {
      return searchTerm;
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
        <button className="btn">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
