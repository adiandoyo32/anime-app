/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import CollectionCard from "../../../components/CollectionCard";
import Modal from "../../../components/Modal";
import useModal from "../../../hooks/useModal";
import Collection from "../../../models/Collection";
import { useCollectionContext } from "../../../context/CollectionContext";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 1rem;
  @media (min-width: 380px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  // @media (min-width: 60px) {
  //     grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  // }
`;

interface CollectionGridProps {
  collections: Collection[];
}

const CollectionGrid: React.FC<CollectionGridProps> = ({ collections }) => {
  const { removeCollection } = useCollectionContext();
  const { toggle, visible } = useModal();
  const [currentCollection, setCurrentCollection] = useState<Collection>();
  const currentCollectionIndex = useRef<number>(0);

  const onRemoveClick = (collection: Collection, index: number) => {
    setCurrentCollection(collection);
    currentCollectionIndex.current = index;
    toggle();
  };

  const confirmDelete = (values: boolean) => {
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
              onRemoveClick={() => onRemoveClick(collection, index)}
            />
          );
        })}
      </Grid>

      <Modal
        close={toggle}
        show={visible}
        title="Delete Collection"
        confirm={confirmDelete}
      >
        <p
          css={css`
            font-size: 0.875rem;
            line-height: 1.25rem;
            color: #828282;
          `}
        >
          Are you sure you want to delete {currentCollection?.name}?
        </p>
      </Modal>
    </>
  );
};

export default React.memo(CollectionGrid);
