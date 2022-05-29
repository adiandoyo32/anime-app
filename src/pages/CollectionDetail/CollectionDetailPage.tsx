/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TrashIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconButton from "../../components/IconButton";
import { useCollectionContext } from "../../context/CollectionContext";
import Collection from "../../models/Collection";

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
    }, [collection])

    if (!collection) return <h3>Collection not found</h3>;

    const removeAnime = (animeIndex: number) => {
        const arr = [...collection.animes];
        arr.splice(animeIndex, 1);
        setCollection((state) => ({
            ...state!,
            animes: arr,
        }));
        // updateCollectionByIndex(collectionIndex, collection);
    }

    return (
        <>
            <h3>Collection Detail</h3>
            <h3>name: {collection.name}</h3>
            <h3>index: {collectionIndex}</h3>
            <h3>Anime List</h3>
            {collection.animes.map((anime, index) => {
                return (
                    <div key={index}>
                        <h5>{anime.title.romaji}</h5>
                        <IconButton onClick={() => removeAnime(index)}>
                            <TrashIcon
                                css={css`
                                    color: red;
                                    width: 1rem;
                                    height: 1rem;
                                `}
                            />
                        </IconButton>
                    </div>
                );
            })}
        </>
    );
};

export default CollectionDetailPage;
