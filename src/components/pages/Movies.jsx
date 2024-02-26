import Searchbar from '../components/Searchbar/Searchbar';
import MovieList from 'components/MoviesList/MoviesList';
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from '../services/api';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  async function fetchMoviesFromApi(searchQuery) {
    try {
      const moviesFounded = await fetchMoviesByQuery(searchQuery);
      setMovies(moviesFounded);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (query) fetchMoviesFromApi(query);
  }, [query]);

  return (
    <>
      <Searchbar
        setSearchParams={setSearchParams}
        fetchMoviesFromApi={fetchMoviesFromApi}
      />
      <MovieList list={movies} />
    </>
  );
};

export default Movies;
