import { Link } from 'react-router-dom';

const MovieList = ({ list, state }) => {
    return (
        <>
            <ul>
                {list.map(({ title, id }) => (
                <li key={id}>
                    <Link key={id} to={`/movies/${id}`} state={state}>
                    {title}
                    </Link>
                </li>
                ))}
            </ul>
        </>
    );
  };

  export default MovieList;