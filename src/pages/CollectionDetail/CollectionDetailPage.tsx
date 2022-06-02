/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCollectionContext } from "../../context/CollectionContext";
import Collection from "../../models/Collection";
import HomeWrapper from "../Home/components/HomeWrapper";
import AnimeListGrid from "./components/AnimeGrid";
import EmptyState from "../../components/EmptyState";

const CollectionDetailPage = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const { collections } = useCollectionContext();
    const [collection, setCollection] = useState<Collection | null>(null);
    const collectionIndex = useRef<number>(0);

    useEffect(() => {
        collections.map((collection, index) => {
            if (collection.name == name) {
                collectionIndex.current = index;
                setCollection(collection);
            }
        });
    }, []);

    if (!collection) return <h3>Collection not found</h3>;

    return (
        <HomeWrapper>
            <h3
                css={css`
                    margin-bottom: 0.5rem;
                `}
            >
                {collection.name}
            </h3>
            {collection.animes.length > 0 ? (
                <AnimeListGrid collection={collection} collectionIndex={collectionIndex.current} />
            ) : (
                <EmptyState
                    title="This Collection is Empty"
                    description="Add an anime to this collection by clicking the button below"
                    action={() => navigate("/")}
                    actionText="Add more animes"
                />
            )}
        </HomeWrapper>
    );
};

export default React.memo(CollectionDetailPage);
