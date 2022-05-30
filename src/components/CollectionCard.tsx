/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { PlaceHolder } from "../images";
import Collection from "../models/Collection";

interface CollectionCardProps {
    collection: Collection;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
    const navigate = useNavigate();
    const handleClick = (collectionName: string) => {
        navigate(`/collections/${collectionName}`);
    };

    return (
        <div
            css={css`
                display: flex;
                margin: 0.5rem 0;
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
                    src={
                        collection.animes.length > 0 && collection.animes[0].coverImage
                            ? collection.animes[0].coverImage.large
                            : PlaceHolder
                    }
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
                    <h5>{collection.name}</h5>
                    <p
                        css={css`
                            font-size: 0.75rem;
                        `}
                    >
                        {collection.animes.length} anime{collection.animes.length > 1 ? "s" : ""}
                    </p>
                </div>
                <Button size="small" onClick={() => handleClick(collection.name)}>
                    Detail
                </Button>
            </div>
        </div>
    );
};

export default CollectionCard;
