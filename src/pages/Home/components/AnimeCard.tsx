/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { StarIcon } from "@heroicons/react/solid";
import { memo } from "react";
import Anime from "../../../models/Anime";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow: hidden;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;

const CardPoster = styled.div`
    height: 80%;
    overflow: hidden;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.875rem;
`;

const CardTitle = styled.p`
    width: max-content;
    font-size: 1rem;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    word-break: break-all;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: red;
    }
`;

const CardSubtitle = styled.p`
    width: max-content;
    font-size: 14px;
    font-weight: 500;
    color: #8a8a8a;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    word-break: break-all;
    margin-bottom: 0.5rem;
`;

const Rate = styled.span`
    font-size: 1rem;
    color: #fdcc0d;
    font-weight: 500;
`;

interface AnimeCardProps {
    anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
    const navigate = useNavigate();
    const handleClick = (anime: Anime) => {
        navigate(`/anime/${anime.id}`);
    };

    return (
        <Card  onClick={() => handleClick(anime)}>
            <CardPoster>
                <CardImage src={anime.coverImage.large} alt={anime.title.userPreferred} />
            </CardPoster>
            <CardContent>
                <CardTitle>{anime.title.userPreferred}</CardTitle>
                <CardSubtitle>{anime.seasonYear}</CardSubtitle>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <StarIcon
                        css={css`
                            height: 1.2rem;
                            width: 1.2rem;
                            color: #ffc400;
                        `}
                    />
                    <Rate>
                        <span>{anime.averageScore}</span>
                    </Rate>
                </div>
            </CardContent>
        </Card>
    );
};

export default memo(AnimeCard);
