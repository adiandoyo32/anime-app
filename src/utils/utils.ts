import Collection from "../models/Collection";

export const validateCollectionName = (name: string, findExistingCollection: (name: string) => Collection | undefined) => {
    let collectionName = name.trim();
    if (!collectionName || collectionName.length === 0 || collectionName.trim().length === 0) {
        throw new Error("Collection name must not be empty");
    }

    const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    if (regex.test(collectionName)) {
        throw new Error("Collection name must not contain special characters");
    }

    if (findExistingCollection(collectionName)) {
        throw new Error("Collection name already exists");
    }

    return true;
};
