import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: pink;
  }

  &:not(:last-child) {
    margin-right: 40px;
  }
`;
