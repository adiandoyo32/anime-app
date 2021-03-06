/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { PlaceHolder } from "../../../images";
import Anime from "../../../models/Anime";

const Card = styled.div`
    display: flex;
    overflow: hidden;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.875rem;
`;

const CardTitle = styled.p`
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
        color: #3b82f6;
    }
`;

const CardSubtitle = styled.p`
    width: auto;
    font-weight: 500;
    color: #8a8a8a;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    word-break: break-all;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
`;

const Rate = styled.span`
    font-size: 0.875rem;
    color: #fdcc0d;
    font-weight: 500;
`;

interface AnimeListItemProps {
    anime: Anime;
    removeAnime?: (index: number) => void;
    onRemoveClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AnimeListItem: React.FC<AnimeListItemProps> = (props) => {
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(`/animes/${props.anime.id}`)}>
            <CardImage
                css={css`
                    width: 8rem;
                    height: 12rem;
                `}
                src={props.anime.coverImage.large ?? PlaceHolder}
                alt={props.anime.title.userPreferred}
            />
            <CardContent>
                <div>
                    <CardTitle>{props.anime.title.userPreferred}</CardTitle>
                    <div
                        css={css`
                            width: 100%;
                        `}
                    >
                        <CardSubtitle
                            css={css`
                                font-size: 0.75rem;
                            `}
                        >
                            {props.anime.seasonYear ?? "-"}
                        </CardSubtitle>
                        {props.anime.averageScore ? (
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
                                    `}
                                />
                                <Rate>
                                    <span>{props.anime.averageScore}</span>
                                </Rate>
                            </div>
                        ) : (
                            <span
                                css={css`
                                    color: #8a8a8a;
                                    font-size: 0.8rem;
                                `}
                            >
                                Score not available
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    <Button
                        size="small"
                        color="danger"
                        onClick={(e?: React.MouseEvent<HTMLButtonElement>) => props.onRemoveClick?.(e!)}
                    >
                        Delete
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default React.memo(AnimeListItem);
