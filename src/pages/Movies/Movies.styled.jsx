import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 20px;
`;

export const SearchInput = styled.input`
  width: 300px;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  width: 60px;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  margin: 0;
  list-style: none;
`;

export const Movie = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
