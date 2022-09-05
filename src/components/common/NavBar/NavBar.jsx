import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import Container from '../Container';
import { useContext } from 'react';
import { moviesSearchValueCtx } from '../../../context/MoviesSearchValue/MoviesSearchValueCtx';

export default function NavBar() {
  const {totalResults, moviesCount} = useContext(moviesSearchValueCtx);

  return (
    <div className={s.container}>
      <Container>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <nav className={s.nav}>
            <NavLink className={s.link} to='/'>Home</NavLink>
            <NavLink className={s.link} to='/movies'>Movies</NavLink>
          </nav>
          <div className={s.stat}>Results: {moviesCount}/{totalResults}</div>
        </div>
      </Container>
    </div>
  );
};
