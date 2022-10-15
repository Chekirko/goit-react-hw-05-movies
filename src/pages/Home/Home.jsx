import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from 'Shared/API/fetcher';
import { Title, MoviesList, Movie } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MoviesList>
        {movies.map(({ title, id, name }) => {
          return (
            <Movie key={id}>
              <Link to={`/movies/${id}`}>{title || name}</Link>
            </Movie>
          );
        })}
      </MoviesList>
    </>
  );
}
