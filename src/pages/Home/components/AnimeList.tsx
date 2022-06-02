import { memo } from "react";
import styled from "@emotion/styled";
import Anime from "../../../models/Anime";
import AnimeCard from "./AnimeCard";

const Grid = styled.div`
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
    @media (min-width: 442px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 880px) {
        grid-template-columns: repeat(5, 1fr);
    }
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
