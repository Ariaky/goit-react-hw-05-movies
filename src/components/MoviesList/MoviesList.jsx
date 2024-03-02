import { MovieCard } from 'components/MovieCard/MovieCard'; 

const MovieList = ({ list, state }) => {
    return (
        <>
            <ul>
                {list.map(movie => (
                <li key={movie.id}>
                    <MovieCard info={movie} />
                </li>
                ))}
            </ul>
        </>
    );
  };

  export default MovieList;

            /*<ul>
                {list.map(({ title, id }) => (
                <li key={id}>
                    <Link key={id} to={`/movies/${id}`} state={state}>
                    {title}
                    </Link>
                </li>
                ))}
            </ul>
            */