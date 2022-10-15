import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'Shared/API/fetcher';
import {
  Img,
  ImgWrap,
  Section,
  Wrapper,
  MovieCard,
  Text,
  Name,
  Title,
  Options,
  StyledLink,
  Btn,
  GenreName,
} from './MovieDetails.styled';

const imgUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w300/';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [error, setError] = '';
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId, setMovie, setError);
  }, [movieId]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const { overview, genres, title, vote_average, poster_path } = movie;

  return (
    <>
      <Section>
        {error && <p>{`Sorry, we have an error: ${error}`}</p>}

        <Btn type="button" onClick={handleClick}>
          Go back
        </Btn>

        <MovieCard>
          <ImgWrap>
            <Img
              src={poster_path && `${imgUrl}${imgSize}${poster_path}`}
              alt=""
            />
          </ImgWrap>

          <Wrapper>
            <Name>{title}</Name>
            <Text>User score: {Math.round(vote_average * 10)}%</Text>
            <Title>Overview</Title>
            <Text>{overview}</Text>
            <Title>Genres</Title>
            {genres && (
              <Text>
                {genres.map((genre, index) => {
                  return <GenreName key={index}>{genre.name}</GenreName>;
                })}
              </Text>
            )}
          </Wrapper>
        </MovieCard>
      </Section>

      <Section>
        <h2>Additional information</h2>
        <Options>
          <StyledLink to="cast">Cast</StyledLink>
          <StyledLink to="review">Reviews</StyledLink>
        </Options>
      </Section>

      <Outlet />
    </>
  );
}
