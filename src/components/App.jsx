// import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import s from './App.module.css';
import Header from './common/Header';
import MoviesSearchValueCtx, { moviesSearchValueCtx } from '../context/MoviesSearchValue/MoviesSearchValueCtx';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Cast = lazy(() => import('./pages/Cast'));
const Movies = lazy(() => import('./pages/Movies'));
const Reviews = lazy(() => import('./pages/Reviews'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <MoviesSearchValueCtx value={moviesSearchValueCtx}>
        <div className={s.container}>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/movies/:movieId' element={<MovieDetails />}>
                <Route path={'cast'} element={<Cast />} />
                <Route path={'reviews'} element={<Reviews />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </MoviesSearchValueCtx>
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </QueryClientProvider>
  );
};
