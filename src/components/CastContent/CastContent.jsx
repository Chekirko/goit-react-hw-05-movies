import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastById } from 'Shared/API/fetcher';
import { ImgWrap, Img } from './CastContent.styled';

const imgUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w300/';

export default function CastContent() {
  const [cast, setCast] = useState();
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getCastById(movieId, setCast, setError);
  }, [movieId]);

  return (
    <div>
      {cast ? (
        <ul>
          {cast.cast.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                {profile_path ? (
                  <ImgWrap>
                    <Img src={`${imgUrl}${imgSize}${profile_path}`} alt="" />
                  </ImgWrap>
                ) : (
                  <div>Not found</div>
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We dont have cast for this movie</p>
      )}

      {error && <p>'Sorry, try again'</p>}
    </div>
  );
}
