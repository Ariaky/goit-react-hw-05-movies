import { useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Img, RatingWrapper, RatingValue, StyledLink, Title } from "./MovieCard.styled";

const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/original';
const defaultImg = `https://via.placeholder.com/200x300?text=No+Image`;

export const MovieCard = ({
  info: { id, title, poster_path, release_date, vote_average },
}) => {
  const location = useLocation();
  const releaseDate = new Date(release_date);

  return (
    <StyledLink to={`/movies/${id}`} state={{ from: location }}>
      {poster_path ? (
        <Img src={`${BASIC_IMG_URL}${poster_path}`} alt={title} loading="lazy" />
      ) : (
        <Img src={defaultImg} alt="placeholder" loading="lazy" />
      )}
      <Title>
        {title} ({releaseDate.getFullYear()})
      </Title>
      <RatingWrapper>
        <StarRatings
          rating={vote_average}
          numberOfStars={10}
          starRatedColor="#ffc414"
          starDimension="15px"
          starSpacing="1px"
        />
        <RatingValue>{vote_average.toFixed(1)}</RatingValue>
      </RatingWrapper>
    </StyledLink>
  );
};