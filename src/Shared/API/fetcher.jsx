import axios from 'axios';

export const getMovies = async () => {
  try {
    const movies = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec'
    );
    return movies.data;
  } catch (error) {
    return error;
  }
};

const fetchCast = async id => {
  const cast = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US`
  );
  return cast;
};

export const getCastById = (id, setCast, setError) => {
  try {
    fetchCast(id).then(cast => {
      setCast(cast.data);
    });
  } catch (error) {
    setError(error);
  }
};

const fetchReview = async id => {
  const review = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US`
  );
  return review;
};

export const getReviewById = (id, setReview, setError) => {
  try {
    fetchReview(id).then(review => {
      setReview(review.data);
    });
  } catch (error) {
    setError(error);
  }
};

const fetchMovie = async id => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US`
  );
  return movie;
};

export const getMovieById = (id, setMovie, setError) => {
  try {
    fetchMovie(id).then(movie => {
      setMovie(movie.data);
    });
  } catch (error) {
    setError(error);
  }
};

const searchMovie = async query => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US&page=1&include_adult=false`
  );
  return result;
};

export const searchMovieByQuery = (query, setState, setError) => {
  try {
    searchMovie(query).then(res => {
      setState(res);
      console.log(res);
    });
  } catch (error) {
    setError(error.message);
  }
};
