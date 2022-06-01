/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import ErrorText from "../../components/ErrorText";
import FormControl from "../../components/FormControl";
import FormGroup from "../../components/FormGroup";
import FormLabel from "../../components/FormLabel";
import Modal from "../../components/Modal";
import { useCollectionContext } from "../../context/CollectionContext";
import useModal from "../../hooks/useModal";
import { Empty } from "../../images";
import HomeWrapper from "../Home/components/HomeWrapper";
import CollectionGrid from "./components/CollectionGrid";

const CollectionPage = () => {
    const { toggle, visible } = useModal();
    const { collections, findExistingCollection, addCollection } = useCollectionContext();
    const [collectionName, setCollectionName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const onAddCollectionClick = () => {
        setCollectionName("");
        setError("");
        toggle();
    };

    const onSaveCollectionClick = (values: boolean) => {
        if (!values) return;
        if (!collectionName || collectionName.length === 0) {
            setError("Collection name is required");
            return;
        }
        const foundCollection = findExistingCollection(collectionName);
        if (foundCollection) {
            setError("Collection name already exists");
            return;
        }
        addCollection(collectionName);
        setCollectionName("");
        toggle();
    };

    const onCollectionNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCollectionName(() => e.target.value);
        if (collectionName) setError("");
    };

    if (!collections.length)
        return (
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                `}
            >
                <img
                    css={css`
                        width: 10%;
                    `}
                    src={Empty}
                />
                No collection found
                <div>
                    <Button onClick={onAddCollectionClick}>New Collection</Button>
                </div>
            </div>
        );

    return (
        <>
            <HomeWrapper>
                <div
                    css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 1rem;
                    `}
                >
                    <h3>Collection</h3>
                    <Button onClick={onAddCollectionClick}>New Collection</Button>
                </div>
                <CollectionGrid collections={collections} />
            </HomeWrapper>

            <Modal close={toggle} show={visible} title="New Collection" confirm={onSaveCollectionClick}>
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

export default CollectionPage;
