import MovieList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/api';

const Home = () => {
  const [films, setFilms] = useState([]);

  const location = useLocation();

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const filmList = await fetchMovies();
        setFilms(filmList);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList list={films} state={{ from: location }} />
    </>
  )
};

export default Home;