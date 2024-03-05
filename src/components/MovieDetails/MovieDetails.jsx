import { Link, useLocation } from 'react-router-dom';
import BackBtn from 'components/BackBtn/BackBtn';
import { useRef } from 'react';
import { MovieDetailsContainer } from './MovieDetails.styled';
import StarRatings from 'react-star-ratings';
import { Image, Title, RatingWrapper, Rating, Description, InfoWrapper } from './MovieDetails.styled';

const MovieDetailsComp = ({
  poster,
  title,
  releaseDate,
  voteAvarage,
  overview,
  genres,
}) => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');
  const defaultImg = `https://via.placeholder.com/200x300?text=No+Image`
  return (
    <MovieDetailsContainer>
      <BackBtn to={backLink.current}>← Go back</BackBtn>
      <InfoWrapper>
        <div>
          <Image
            src={
              poster ? `https://image.tmdb.org/t/p/w500/${poster}` : defaultImg
            }
            width={250}
            alt={title}
          />
        </div>
        <div>
          <Title>
            {title} ({releaseDate ? releaseDate.slice(0, 4) : null})
          </Title>
          <RatingWrapper>
            <StarRatings
                      rating={voteAvarage}
                      numberOfStars={10}
                      starRatedColor="#ffc414"
                      starDimension="22px"
                      starSpacing="3px"
            />
            <Rating>{voteAvarage}</Rating>
          </RatingWrapper>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <Description>
            {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
          </Description>
        </div>
      </InfoWrapper>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </MovieDetailsContainer>
    );
};

export default MovieDetailsComp;

