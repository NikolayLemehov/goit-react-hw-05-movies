import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits, fetchMovieReviews } from '../../../services/themoviedb.api';

export default function Reviews() {
  const {movieId} = useParams();
  const {isLoading, data, error} = useQuery(['movies', movieId, 'cast'],
    () => fetchMovieReviews(movieId));
  return (
    <h1>
      Reviews
    </h1>
  );
};
