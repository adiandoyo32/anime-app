/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCollectionContext } from "../../context/CollectionContext";
import Collection from "../../models/Collection";
import AnimeListGrid from "./components/AnimeListGrid";

const CollectionDetailPage = () => {
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
        <>
            <h3
                css={css`
                    margin-bottom: 0.5rem;
                `}
            >
                {collection.name}
            </h3>
            <AnimeListGrid collection={collection} collectionIndex={collectionIndex.current} />
        </>
    );
};

export default React.memo(CollectionDetailPage);
