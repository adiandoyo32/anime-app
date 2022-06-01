/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Button from "../../components/Button";
import ErrorText from "../../components/ErrorText";
import FormControl from "../../components/FormControl";
import FormGroup from "../../components/FormGroup";
import FormLabel from "../../components/FormLabel";
import Modal from "../../components/Modal";
import { useCollectionContext } from "../../context/CollectionContext";
import useModal from "../../hooks/useModal";
import EmptyState from "../CollectionDetail/components/EmptyState";
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

    return (
        <>
            <HomeWrapper>
                <div
                    css={css`
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        margin-bottom: 1rem;
                    `}
                >
                    {collections.length > 0 && <Button onClick={onAddCollectionClick}>New Collection</Button>}
                </div>
                {collections.length > 0 ? (
                    <CollectionGrid collections={collections} />
                ) : (
                    <EmptyState
                        title="Collection is Empty"
                        description=""
                        action={() => onAddCollectionClick()}
                        actionText="New Collection"
                    />
                )}
            </HomeWrapper>

            <Modal
                close={toggle}
                show={visible}
                title="New Collection"
                confirm={onSaveCollectionClick}
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

export default CollectionPage;
