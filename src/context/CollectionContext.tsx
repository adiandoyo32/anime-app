import React, { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Anime from "../models/Anime";
import Collection from "../models/Collection";

interface CollectionContextInterface {
    collections: Collection[];
    findExistingCollection: (collectionName: string) => Collection | undefined;
    addCollection: (collectionName: string) => void;
    removeCollection: (index: number) => void;
    saveAnimeToCollection: (anime: Anime, selectedCollectionNames: string[]) => void;
    updateCollectionName: (collectionIndex: number, collectionName: string) => void;
    deleteCollectionByIndex: (collectionIndex: number, collection: Collection) => void;
}

export const CollectionContext = createContext({} as CollectionContextInterface);

interface CollectionContextProps {
    children: React.ReactNode;
}

const CollectionProvider: React.FC<CollectionContextProps> = (props) => {
    const [storedCollections, setStoredCollections] = useLocalStorage<Collection[]>("collections", []);
    const [collections, setCollections] = React.useState<Collection[]>([]);

    useEffect(() => {
        setCollections(storedCollections);
    }, []);

    useEffect(() => {
        setStoredCollections([...collections]);
    }, [collections]);

    const findExistingCollection = (collectionName: string) => {
        return collections.find((collection) => collection.name === collectionName);
    };

    const addCollection = (collectionName: string) => {
        setCollections([
            ...collections,
            {
                name: collectionName.trim(),
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
                const found = collections[i].animes.find((item) => item.id === anime.id);
                if (!found) {
                    collections[i].animes.push(anime);
                }
                setCollections([...collections]);
            }
        }
    };

    const updateCollectionName = (collectionIndex: number, collectionName: string) => {
        collections[collectionIndex].name = collectionName;
        setCollections([...collections]);
    };

    const deleteCollectionByIndex = (collectionIndex: number, collection: Collection) => {
        const arr = [...collections];
        arr.splice(collectionIndex, 1, collection);
        setCollections(arr);
    };

    return (
        <CollectionContext.Provider
            value={{
                collections,
                findExistingCollection,
                addCollection,
                removeCollection,
                saveAnimeToCollection,
                updateCollectionName,
                deleteCollectionByIndex,
            }}
        >
            {props.children}
        </CollectionContext.Provider>
    );
};

export function useCollectionContext() {
    return React.useContext(CollectionContext);
}

export default React.memo(CollectionProvider);
