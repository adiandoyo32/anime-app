/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import Anime from "../../../models/Anime";

const Card = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex
    flex-direction: column;
    cursor: pointer;
`;

const CardImage = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 0.4rem;
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
`;

const CardTitle = styled.p`
    font-size: 1rem;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    word-break: break-all;
    margin-bottom: 0.3rem;
`;

const Rate = styled.span`
    font-size: 0.85rem;
    color: #ffc400;
    margin-bottom: 0.2rem;
    font-weight: 500;
`;

interface AnimeCardProps {
    anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
    return (
        <Card>
            <CardImage src={anime.coverImage.large} />
            <CardContent>
                <CardTitle>{anime.title.userPreferred}</CardTitle>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <StarIcon css={css`
                        height: 1rem;
                        width: 1rem;
                        color: #ffc400;
                        margin-right: 0.2rem;
                    `} />
                    <Rate>
                        <p>{anime.averageScore}</p>
                    </Rate>
                </div>
            </CardContent>
        </Card>
    );
};

export default AnimeCard;
