import styled from "@emotion/styled";

const AnimeTitle = styled.h1`
  overflow: hidden;
  line-height: 2rem;
  font-weight: 700;
  font-size: 1.4rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  @media (min-width: 400px) {
    font-size: 1.5rem;
  }
`;

export default AnimeTitle;
