import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewById } from 'Shared/API/fetcher';

export default function ReviewContent() {
  const [review, setReview] = useState();
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getReviewById(movieId, setReview, setError);
  }, [movieId]);

  return (
    <>
      {error && <p>Sorry, something went wrong</p>}
      {review ? (
        review.results.map(({ author, content }) => {
          return (
            <div key={author}>
              <p>{author}</p>
              <p>{content}</p>
            </div>
          );
        })
      ) : (
        <p>Reviews not found</p>
      )}
      {/* {!review.total_results && <p>Reviews not found</p>} */}
    </>
  );
}
