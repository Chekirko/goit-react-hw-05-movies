import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Btn = styled.button`
  margin-bottom: 10px;
`;

export const MovieCard = styled.div`
  display: flex;
`;

export const Name = styled.h1`
  margin: 0 0 10px;
`;

export const Text = styled.p`
  margin: 0 0 20px;
`;

export const Title = styled.h2`
  margin: 0 0 10px;
`;

export const ImgWrap = styled.div`
  width: 200px;
  height: 300px;
  background-color: papayawhip;
`;

export const Img = styled.img`
  width: 200px;
  height: 300px;
`;

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-top: 20px;
`;

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const GenreName = styled.span`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
