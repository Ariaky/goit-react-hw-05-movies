import { Link, useLocation } from 'react-router-dom';
import BackBtn from 'components/BackBtn/BackBtn';
import { useRef } from 'react';
import { MovieDetailsContainer } from './MovieDetails.styled';
import StarRatings from 'react-star-ratings';
import { Image, MovieTitle, RatingWrapper, RatingValue, Description, InfoWrapper, TitleInfo, Overview, AddInfo, AddInfoItem } from './MovieDetails.styled';

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

  const roundedVoteAverage = voteAvarage ? voteAvarage.toFixed(1) : '';

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
          <MovieTitle>
            {title} ({releaseDate ? releaseDate.slice(0, 4) : null})
          </MovieTitle>
          <RatingWrapper>
            <StarRatings
                      rating={voteAvarage}
                      numberOfStars={10}
                      starRatedColor="#ffc414"
                      starDimension="16px"
                      starSpacing="3px"
            />
            <RatingValue>{roundedVoteAverage}</RatingValue>
          </RatingWrapper>
          <TitleInfo>Overview</TitleInfo>
          <Overview>{overview}</Overview>
          <TitleInfo>Genres</TitleInfo>
          <Description>
            {genres && genres.map(item => item.name).join(', ')}
          </Description>
        </div>
      </InfoWrapper>
      <TitleInfo>Additional information</TitleInfo>
      <AddInfo>
          <AddInfoItem to="cast">Cast</AddInfoItem>
          <AddInfoItem to="reviews">Reviews</AddInfoItem>
      </AddInfo>
    </MovieDetailsContainer>
    );
};

export default MovieDetailsComp;


/*{genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}*/