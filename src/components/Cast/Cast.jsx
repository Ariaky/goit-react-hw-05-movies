import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByCast } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const fetchCastById = useCallback(async () => {
    try {
      const castList = await fetchMoviesByCast(movieId);
      setCast(castList);
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchCastById();
  }, [fetchCastById]);

  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`
  return (
    <div>
      {cast && cast.length > 0 ? (
        cast.map(({ id, profile_path, name, character }) => {
          return (
            <div key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                width={150}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          );
        })
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
    </div>
  );
};

export default Cast;