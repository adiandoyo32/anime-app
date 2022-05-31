import styled from "@emotion/styled";
import React, { useState } from "react";
import Anime from "../../../models/Anime";
import AnimeListItem from "./AnimeListItem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;
interface AnimeListGridProps {
  animes: Anime[];
}

const AnimeListGrid: React.FC<AnimeListGridProps> = ({ animes }) => {
  return (
    <>
      <Grid>
        {animes.map((anime, index) => {
          return <AnimeListItem key={index} anime={anime} animeIndex={index} />;
        })}
      </Grid>
    </>
  );
};

export default React.memo(AnimeListGrid);
