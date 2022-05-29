import React, { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Anime from "../models/Anime";
import Collection from "../models/Collection";

interface CollectionContextInterface {
    collections: Collection[];
    addCollection: () => void;
    removeCollection: (index: number) => void;
    saveAnimeToCollection: (anime: Anime, selectedCollectionNames: string[]) => void;
    updateCollectionByIndex: (collectionIndex: number, collection: Collection) => void;
}

export const CollectionContext = createContext({} as CollectionContextInterface);

interface CollectionContextProps {
    children: React.ReactNode;
}

const CollectionProvider: React.FC<CollectionContextProps> = (props) => {
    const [storedCollections, setStoredCollections] = useLocalStorage<Collection[]>("collections", []);
    const [collections, setCollections] = React.useState<Collection[]>([]);

    const addCollection = () => {
        setCollections([
            ...collections,
            {
                name: "Collection " + (collections.length + 1),
                animes: [],
            },
        ]);
    };

    const removeCollection = (index: number) => {
        const arr = [...collections];
        arr.splice(index, 1);
        setCollections(arr);
    };

    const saveAnimeToCollection = (anime: Anime, selectedCollectionNames: string[]) => {
        for (let i = 0; i < collections.length; i++) {
            if (selectedCollectionNames.includes(collections[i].name)) {
                collections[i].animes.push(anime);
                setCollections([...collections]);
            }
        }
    };

    const updateCollectionByIndex = (collectionIndex: number, collection: Collection) => {
        const arr = [...collections];
        arr.splice(collectionIndex, 1, collection);
        setCollections(arr);
    };

    useEffect(() => {
        setCollections(storedCollections);
    }, []);

    useEffect(() => {
        setStoredCollections([...collections]);
    }, [collections]);

    return (
        <CollectionContext.Provider
            value={{ collections, addCollection, removeCollection, saveAnimeToCollection, updateCollectionByIndex }}
        >
            {props.children}
        </CollectionContext.Provider>
    );
};

export function useCollectionContext() {
    return React.useContext(CollectionContext);
}

export default CollectionProvider;