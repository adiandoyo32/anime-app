/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { PlaceHolder } from "../images";
import Collection from "../models/Collection";
import styled from "@emotion/styled";

const Card = styled.div`
    display: flex;
    overflow: hidden;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
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
    flex-grow: 1;
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
        color: red;
    }
`;

const CardSubtitle = styled.p`
    width: max-content;
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
    font-size: 0.75rem;
`;

interface CollectionCardProps {
    collection: Collection;
    onRemoveClick?: () => void;
    showAction?: boolean;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection, onRemoveClick, showAction }) => {
    const navigate = useNavigate();

    const handleClick = (collectionName: string) => {
        navigate(`/collections/${collectionName}`);
    };

    return (
        <>
            <Card>
                {/* <div
                    css={css`
                        width: 8rem;
                        height: 12rem;
                        overflow: hidden;
                    `}
                > */}
                <CardImage
                    css={css`
                        width: 8rem;
                        height: 12rem;
                    `}
                    src={
                        collection.animes.length > 0 && collection.animes[0].coverImage
                            ? collection.animes[0].coverImage.large
                            : PlaceHolder
                    }
                    alt=""
                />
                {/* </div> */}
                <CardContent>
                    <div>
                        <CardTitle>{collection.name} asdasd asd</CardTitle>
                        <CardSubtitle>
                            {collection.animes.length} anime
                            {collection.animes.length > 1 ? "s" : ""}
                        </CardSubtitle>
                    </div>
                    <div
                        css={css`
                            display: flex;
                        `}
                    >
                        <Button size="small" onClick={() => handleClick(collection.name)}>
                            Detail
                        </Button>

                        {showAction && (
                            <>
                                <span
                                    css={css`
                                        margin-left: 0.5rem;
                                    `}
                                />
                                <Button size="small" color="danger" onClick={onRemoveClick}>
                                    Delete
                                </Button>
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default React.memo(CollectionCard);
