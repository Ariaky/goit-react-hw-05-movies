import MovieList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import Loader from '../components/Loader/Loader';


const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const filmList = await fetchMovies();
        setFilms(filmList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (<Loader />
      ) : ( 
        <>
          <h1>Trending today</h1>
          <MovieList list={films} state={{ from: location }} />
        </>
      )}
    </>
  );
};

export default Home;