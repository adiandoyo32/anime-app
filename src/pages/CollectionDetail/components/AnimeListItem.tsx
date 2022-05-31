/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import IconButton from "../../../components/IconButton";
import { PlaceHolder } from "../../../images";
import Anime from "../../../models/Anime";

interface AnimeListItemProps {
    anime: Anime;
    animeIndex: number;
    removeAnime?: (index: number) => void;
    onRemoveClick?: () => void;
}

const AnimeListItem: React.FC<AnimeListItemProps> = (props) => {
    console.log("render anime list item");

    return (
        <div
            css={css`
                display: flex;
                // margin-bottom: 1rem;
                border-radius: 0.5rem;
                overflow: hidden;
                &:hover {
                    // box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
                }
            `}
        >
            <div
                css={css`
                    width: 8rem;
                    height: 12rem;
                    background-color: #f5f5f5;
                    border-radius: 0.5rem;
                    overflow: hidden;
                `}
            >
                <img
                    css={css`
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    `}
                    src={props.anime.coverImage.large ?? PlaceHolder}
                />
            </div>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 0 1rem;
                `}
            >
                <div>
                    <h4>{props.anime.title.userPreferred}</h4>
                    <p
                        css={css`
                            font-size: 0.75rem;
                        `}
                    >
                        {props.anime.averageScore}
                    </p>
                </div>
                <div>
                    <IconButton onClick={props.onRemoveClick}>
                        <TrashIcon
                            css={css`
                                color: red;
                                width: 1rem;
                                height: 1rem;
                            `}
                        />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default React.memo(AnimeListItem);
