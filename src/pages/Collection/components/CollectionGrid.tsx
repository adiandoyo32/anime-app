/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import CollectionCard from "../../../components/CollectionCard";
import Modal from "../../../components/Modal";
import useModal from "../../../hooks/useModal";
import Collection from "../../../models/Collection";
import { useCollectionContext } from "../../../context/CollectionContext";
import { validateCollectionName } from "../../../utils/utils";
import FormGroup from "../../../components/FormGroup";
import FormLabel from "../../../components/FormLabel";
import FormControl from "../../../components/FormControl";
import ErrorText from "../../../components/ErrorText";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
`;

enum CollectionAction {
    Edit,
    Delete,
}

interface CollectionGridProps {
    collections: Collection[];
}

const CollectionGrid: React.FC<CollectionGridProps> = ({ collections }) => {
    const { removeCollection, findExistingCollection, updateCollectionName } = useCollectionContext();
    const { toggle, visible } = useModal();
    const [currentCollection, setCurrentCollection] = useState<Collection>();
    const [currentAction, setCurrentAction] = useState<CollectionAction>(CollectionAction.Edit);
    const currentCollectionIndex = useRef<number>(0);
    const [collectionName, setCollectionName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const onCollectionNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCollectionName(() => e.target.value);
        if (collectionName) setError("");
    };

    const onRemoveClick = (e: React.MouseEvent<HTMLButtonElement>, collection: Collection, index: number) => {
        e.stopPropagation();
        setCurrentAction(CollectionAction.Delete);
        setCurrentCollection(collection);
        currentCollectionIndex.current = index;
        toggle();
    };

    const onEditClick = (e: React.MouseEvent<HTMLButtonElement>, collection: Collection, index: number) => {
        e.stopPropagation();
        setCurrentAction(CollectionAction.Edit);
        setCurrentCollection(collection);
        setCollectionName(collection.name)
        currentCollectionIndex.current = index;
        toggle();
    };

    const onUpdateCollectionClick = (values: boolean) => {
        if (!values) return;
        try {
            const isValid = validateCollectionName(collectionName, findExistingCollection);
            if (isValid) {
                updateCollectionName(currentCollectionIndex.current, collectionName);
                setCollectionName("");
                toggle();
            }
        } catch (error: any) {
            setError(error.message as string);
        }
    };

    const onConfirmDeleteClick = (values: boolean) => {
        if (!values) return;
        removeCollection(currentCollectionIndex.current);
        toggle();
    };

    return (
        <>
            <Grid>
                {collections.map((collection, index) => {
                    return (
                        <CollectionCard
                            key={collection.name}
                            collection={collection}
                            onEditClick={(e: React.MouseEvent<HTMLButtonElement>) => onEditClick(e, collection, index)}
                            onRemoveClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                                onRemoveClick(e, collection, index)
                            }
                            showAction={true}
                        />
                    );
                })}
            </Grid>

            <Modal
                close={toggle}
                show={visible}
                title={currentCollection?.name ?? ""}
                confirm={currentAction === CollectionAction.Delete ? onConfirmDeleteClick : onUpdateCollectionClick}
                confirmText={currentAction === CollectionAction.Delete ? "Delete" : "Save"}
            >
                {currentAction === CollectionAction.Delete ? (
                    <p
                        css={css`
                            font-size: 0.875rem;
                            line-height: 1.25rem;
                            color: #828282;
                        `}
                    >
                        Are you sure you want to delete {currentCollection?.name}?
                    </p>
                ) : (
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
                )}
            </Modal>
        </>
    );
};

export default React.memo(CollectionGrid);
