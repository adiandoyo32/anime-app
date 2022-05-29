/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import Anime from "../../../models/Anime";
import { Card, CardContent, CardImage, CardPoster, CardTitle, Rate } from "../styles/AnimeCard";

interface AnimeCardProps {
    anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
    const navigate = useNavigate();
    const handleClick = (anime: Anime) => {
        navigate(`/anime/${anime.id}`);
    };

    return (
        <Card>
            <CardPoster onClick={() => handleClick(anime)}>
                <CardImage src={anime.coverImage.large} />
            </CardPoster>
            <CardContent>
                <CardTitle onClick={() => handleClick(anime)}>{anime.title.userPreferred}</CardTitle>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <StarIcon
                        css={css`
                            height: 1rem;
                            width: 1rem;
                            color: #ffc400;
                            margin-right: 0.2rem;
                        `}
                    />
                    <Rate>
                        <p>{anime.averageScore}</p>
                    </Rate>
                </div>
            </CardContent>
        </Card>
    );
};

export default AnimeCard;
