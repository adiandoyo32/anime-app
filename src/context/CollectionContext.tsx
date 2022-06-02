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
    updateCollectionByIndex: (collectionIndex: number, collection: Collection) => void;
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
        outer: for (let i = 0; i < collections.length; i++) {
            if (selectedCollectionNames.includes(collections[i].name)) {
                for (let j = 0; j < collections[i].animes.length; j++) {
                    if (collections[i].animes[j].id === anime.id) {
                        break outer;
                    }
                }
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

    return (
        <CollectionContext.Provider
            value={{
                collections,
                findExistingCollection,
                addCollection,
                removeCollection,
                saveAnimeToCollection,
                updateCollectionByIndex,
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
