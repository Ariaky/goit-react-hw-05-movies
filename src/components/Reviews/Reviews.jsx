import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByRewiews } from 'services/api';
import { ReviewsItem, Author, ReviewDate, ReviewText } from './Reviews.styled'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const fetchReviewsById = useCallback(async () => {
    try {
      const reviewsList = await fetchMoviesByRewiews(movieId);
      setReviews(reviewsList);
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchReviewsById();
  }, [fetchReviewsById]);

  return (
    <ul>
      {reviews && reviews.length > 0 ? (
        reviews.map(({ id, author, content, created_at }) => (
          <ReviewsItem key={id}>
            <Author>Author: {author}</Author>
            <ReviewText
              
            >
              {content}
            </ReviewText>
            <ReviewDate>{new Date(created_at).toUTCString()}</ReviewDate>
          </ReviewsItem>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;