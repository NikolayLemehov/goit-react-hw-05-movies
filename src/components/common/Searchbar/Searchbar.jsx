import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { moviesSearchValueCtx } from '../../../context/MoviesSearchValue/MoviesSearchValueCtx';

function Searchbar() {
  const {setSearch} = useContext(moviesSearchValueCtx);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.elements['search'].value.toLowerCase().trim());
  };

  return (
    <header className={s.container}>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <button type='submit' className={s.btn}>
          <span className={s.btnLabel}>Search</span>
        </button>

        <input
          className={s.input}
          type='text'
          name='search'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
