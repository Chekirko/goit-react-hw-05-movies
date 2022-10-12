import { useEffect, useState } from 'react';
import { searchMovieByQuery } from 'Shared/API/fetcher';
import { useSearchParams } from 'react-router-dom';
import {
  Wrapper,
  SearchInput,
  SearchButton,
  MoviesList,
  Movie,
} from './Movies.styled';
import { Link } from 'react-router-dom';

export default function MoviesSearcher() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movie');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ movie: query });
    setQuery('');
  };

  useEffect(() => {
    if (movieName === null) return;
    searchMovieByQuery(movieName, setMovies, setError);
  }, [movieName]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
        ></SearchInput>
        <SearchButton type="submit">Search</SearchButton>
      </form>

      {error && <h2>Sorry, try it again</h2>}

      {movies && (
        <MoviesList>
          {movies.data.results.map(({ id, title, name }) => {
            return (
              <Movie key={id}>
                <Link to={`/goit-react-hw-05-movies/movies/${id}`}>
                  {title || name}
                </Link>
              </Movie>
            );
          })}
        </MoviesList>
      )}
    </Wrapper>
  );
}
