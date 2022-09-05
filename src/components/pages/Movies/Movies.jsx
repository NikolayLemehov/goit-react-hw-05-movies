import { useContext, useEffect } from 'react';
import { useSearch } from './useSearch';
import s from './Movies.module.css';
import Container from '../../common/Container';
import MoviesSearchList from '../../common/MoviesSearchList';
import { moviesSearchValueCtx } from '../../../context/MoviesSearchValue/MoviesSearchValueCtx';

export default function Movies() {
  const { search, totalResults, setTotalResults, setMoviesCount } = useContext(moviesSearchValueCtx);
  const { error, loading, page, setPage, movies, totalPages } = useSearch(
    { search, totalResults, setTotalResults });

  useEffect(() => setMoviesCount(movies.length), [movies.length, setMoviesCount]);

  return (
    <div className={s.container}>
      <Container>
        {!error && movies?.length > 0 && <MoviesSearchList movies={movies} />}
        {error && <div>Error: {error}</div>}
        {loading && <div>Loading...</div>}
        {!loading && !error && page < totalPages
          && <button onClick={() => setPage(p => p + 1)}>
            More {page}/{totalPages}
          </button>}
      </Container>
    </div>
  );
};
