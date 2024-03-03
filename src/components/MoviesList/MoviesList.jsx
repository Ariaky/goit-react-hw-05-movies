import { MovieCard } from 'components/MovieCard/MovieCard'; 
import { Wrapper, StyledMovieList, MovieItem } from './MoviesList.styled'

const MovieList = ({ list, state }) => {
    return (
        <>
            <Wrapper>
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

           