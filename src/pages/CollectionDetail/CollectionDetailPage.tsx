/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCollectionContext } from "../../context/CollectionContext";
import Collection from "../../models/Collection";
import { AnimeListGrid } from "./components/AnimeListGrid";
import AnimeListItem from "./components/AnimeListItem";

const CollectionDetailPage = () => {
    const { name } = useParams();
    const { collections, updateCollectionByIndex } = useCollectionContext();
    const [collectionIndex, setCollectionIndex] = useState<number>(0);
    const [collection, setCollection] = useState<Collection | null>(null);

    useEffect(() => {
        collections.map((collection) => {
            if (collection.name == name) {
                setCollectionIndex(collections.indexOf(collection));
                setCollection(collection);
            }
        });
    }, []);

    useEffect(() => {
        if (collection) {
            updateCollectionByIndex(collectionIndex, collection);
        }
    }, [collection]);

    if (!collection) return <h3>Collection not found</h3>;

    const removeAnime = (animeIndex: number) => {
        const arr = [...collection.animes];
        arr.splice(animeIndex, 1);
        setCollection((state) => ({
            ...state!,
            animes: arr,
        }));
    };

    return (
        <>
            <h3
                css={css`
                    margin-bottom: 0.5rem;
                `}
            >
                {collection.name}
            </h3>
            <AnimeListGrid>
                {collection.animes.map((anime, index) => {
                    return <AnimeListItem key={index} anime={anime} animeIndex={index} removeAnime={removeAnime} />;
                })}
            </AnimeListGrid>
        </>
    );
};

export default CollectionDetailPage;
