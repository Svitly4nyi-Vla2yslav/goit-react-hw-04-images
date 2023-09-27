import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';
import './Searchbar.css';

export function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      Notiflix.Notify.failure('Please enter your search query!🙏');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header onSubmit={handleSubmit} className="searchbar">
      <form className="form">
        <button type="submit" className="Search-button">
          <ImSearch style={{ marginRight: 8 }} />
          <span className="button-label">Search</span>
        </button>

        <input
          name="search"
          value={searchQuery}
          onChange={handleChange}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}


