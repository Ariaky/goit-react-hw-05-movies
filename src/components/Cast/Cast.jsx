import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByCast } from 'services/api';
import { CastMainWrapper, CastWrapper } from './Cast.styled';

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

  const defaultImg = `https://via.placeholder.com/200x300?text=No+Image`
  return (
    <CastMainWrapper>
      {cast && cast.length > 0 ? (
        cast.map(({ id, profile_path, name, character }) => {
          return (
            <CastWrapper key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                width={200}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </CastWrapper>
          );
        })
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
    </CastMainWrapper>
  );
};

export default Cast;