import { memo } from "react";
import styled from "@emotion/styled";
import Anime from "../../../models/Anime";
import AnimeCard from "./AnimeCard";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-auto-rows: 400px; 
    grid-gap: 1.5rem;
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

export default memo(AnimeList);
