import styled from '@emotion/styled';

export const Title = styled.h1`
  margin: 0 0 20px 0;
  padding-top: 10px;
  padding-left: 10px;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style: none;
`;

export const Movie = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
