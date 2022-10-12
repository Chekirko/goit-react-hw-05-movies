import { StyledHeader, Nav, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <Nav>
          <StyledLink to="/goit-react-hw-05-movies" end>
            Home
          </StyledLink>
          <StyledLink to="/goit-react-hw-05-movies/movies">Movies</StyledLink>
        </Nav>
      </StyledHeader>
    </>
  );
};
