import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../../services/themoviedb.api';

export default function Reviews() {
  const {movieId} = useParams();
  const {isLoading, data, error} = useQuery(['movies', movieId, 'reviews'],
    () => fetchMovieReviews(movieId));

  return (
    <div>
      <div>Reviews</div>
      {error && <h1>Error: {error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {!error && !isLoading && data && data.results.length === 0 &&
        <p>Reviews aren't found</p>
      }
      {!error && !isLoading &&
        <ul>
          {data && data.results.map((
            {author , id}) => {
            return <li key={id}>
              author - {author}</li>;
          })}
        </ul>
      }
    </div>
  );
};
