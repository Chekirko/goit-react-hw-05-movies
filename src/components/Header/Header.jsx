import { StyledHeader, Nav, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </StyledHeader>
    </>
  );
};
