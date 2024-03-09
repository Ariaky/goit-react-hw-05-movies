import Searchbar from '../components/Searchbar/Searchbar';
import MovieList from 'components/MoviesList/MoviesList';
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from '../services/api';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'; // component for rendering child components
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
      Notify.failure('An error occurred while searching for movies.');
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movies;

