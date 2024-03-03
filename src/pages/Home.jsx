import MovieList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/api';


const Home = () => {
  const [films, setFilms] = useState([]);

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const filmList = await fetchMovies();
      setFilms(filmList);
    }
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList list={films} state={{ from: location }} />
    </>
  );
};

export default Home;