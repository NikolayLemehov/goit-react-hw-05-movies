import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovieCredits } from '../../../services/themoviedb.api';

export default function Cast() {
  const {movieId} = useParams();
  // const originPath = useOriginPath();
  // console.log(movieId, originPath)
  const {isLoading, data, error} = useQuery(['movies', movieId, 'cast'],
    () => fetchMovieCredits(movieId));
  // const castList = data?.cast?.float(1)
  // const {cast} = data || {};
  const castList = typeof data?.cast === 'object' && data.cast
  return (
    <div>
      {error && <h1>Error: {error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {!error && !isLoading &&
        <>
          <div>Cast</div>

          <ul>
            {castList && castList.map((
              {name, character, credit_id}) => {
              // console.log('character', character)
              return <li key={credit_id}>
                character - {character}; actor - {name}</li>;
            })}
          </ul>
        </>
      }
    </div>
  );
};
