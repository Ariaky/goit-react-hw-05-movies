import { MovieCard } from 'components/MovieCard/MovieCard'; 
import { Wrapper, Title, StyledMovieList, MovieItem } from './MoviesList.styled'

const MovieList = ({ list, state }) => {
    return (
        <>
            <Wrapper>
                <Title>Trending today</Title>
                <StyledMovieList>
                    {list.map(movie => (
                    <MovieItem key={movie.id}>
                        <MovieCard info={movie} />
                    </MovieItem>
                    ))}
                </StyledMovieList>
            </Wrapper>
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