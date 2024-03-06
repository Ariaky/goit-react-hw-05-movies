import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByRewiews } from 'services/api';

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
          <li key={id}>
            <p>
              <b>Author: {author}</b>
            </p>
            <p>{content}</p>
            <p>{new Date(created_at).toUTCString()}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;