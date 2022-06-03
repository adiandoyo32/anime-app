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
import Button from "../../components/Button";
import useModal from "../../hooks/useModal";
import Modal from "../../components/Modal";
import FormGroup from "../../components/FormGroup";
import FormLabel from "../../components/FormLabel";
import FormControl from "../../components/FormControl";
import ErrorText from "../../components/ErrorText";
import { validateCollectionName } from "../../utils/utils";

const CollectionDetailPage = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const { collections, updateCollectionName, findExistingCollection } = useCollectionContext();
    const [collection, setCollection] = useState<Collection | null>(null);
    const collectionIndex = useRef<number>(0);
    const { toggle, visible } = useModal();
    const [collectionName, setCollectionName] = useState<string>("");
    const [error, setError] = useState<string>("");

    useEffect(() => {
        collections.forEach((collection, index) => {
            if (collection.name === name) {
                collectionIndex.current = index;
                setCollection(collection);
                setCollectionName(collection.name);
            }
        });
    }, []);

    if (!collection)
        return (
            <HomeWrapper>
                <EmptyState
                    title="Collection is not found"
                    description=""
                    actionText="Back to Collection Page"
                    action={() => navigate("/collections")}
                />
            </HomeWrapper>
        );

    const onCollectionNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCollectionName(() => e.target.value);
        if (collectionName) setError("");
    };

    const onUpdateCollectionClick = (values: boolean) => {
        if (!values) return;
        try {
            const isValid = validateCollectionName(collectionName, findExistingCollection);
            if (isValid) {
                updateCollectionName(collectionIndex.current, collectionName);
                setCollectionName(collectionName);
                toggle();
            }
        } catch (error: any) {
            setError(error.message as string);
        }
    };

    return (
        <>
            <HomeWrapper>
                <h3
                    css={css`
                        margin-bottom: 0.5rem;
                    `}
                >
                    <span css={css`margin-right: 1rem;`}>{collection.name}</span>
                    <Button size="small" onClick={toggle}>Edit</Button>
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
            <Modal
                close={toggle}
                show={visible}
                title={`Edit ${collection.name}`}
                confirm={onUpdateCollectionClick}
                confirmText="Save"
            >
                <FormGroup>
                    <FormLabel htmlFor="collection-name">Collection Name</FormLabel>
                    <FormControl
                        id="collection-name"
                        type="text"
                        placeholder="Enter collection name"
                        autoComplete="off"
                        onChange={onCollectionNameInputChange}
                        value={collectionName}
                        isInvalid={error ? true : false}
                    />
                    <ErrorText error={error} />
                </FormGroup>
            </Modal>
        </>
    );
};

export default React.memo(CollectionDetailPage);
