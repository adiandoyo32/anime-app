import styled from "@emotion/styled";
import React from "react";
import Anime from "../../../models/Anime";
import AnimeCard from "./AnimeCard";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(200px, 1fr));
    grid-gap: 1rem;
`;

interface AnimeListProps {
    animeList: Anime[];
}

const AnimeList: React.FC<AnimeListProps> = ({ animeList }) => {
    return (
        <Grid>
            {animeList.map((anime, index) => (
                <AnimeCard key={index} anime={anime} />
            ))}
        </Grid>
    );
};

export default AnimeList;
