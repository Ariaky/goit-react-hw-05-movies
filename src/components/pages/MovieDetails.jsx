import MovieDetailsComp from 'components/MovieDetails/MovieDetails';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const fetchMoviesId = useCallback(async () => {
    try {
      const movieDetails = await fetchMoviesById(movieId);
      setMovie(movieDetails);
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMoviesId();
  }, [fetchMoviesId]);

  return (
    <>
      <MovieDetailsComp
        poster={movie.poster_path}
        title={movie.title}
        releaseDate={movie.release_date}
        voteAvarage={movie.vote_average}
        overview={movie.overview}
        genres={movie.genres}
      />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;