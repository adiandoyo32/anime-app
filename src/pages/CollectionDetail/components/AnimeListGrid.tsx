/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import Modal from "../../../components/Modal";
import { useCollectionContext } from "../../../context/CollectionContext";
import useModal from "../../../hooks/useModal";
import Anime from "../../../models/Anime";
import Collection from "../../../models/Collection";
import AnimeListItem from "./AnimeListItem";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
`;
interface AnimeListGridProps {
    collectionIndex: number;
    collection: Collection;
}

const AnimeListGrid: React.FC<AnimeListGridProps> = ({ collection, collectionIndex }) => {
  const { updateCollectionByIndex } = useCollectionContext();  
  const { toggle, visible } = useModal();
    const [currentAnime, setCurrentAnime] = useState<Anime>();
    const currentAnimeIndex = useRef<number>(0);

    const onRemoveClick = (anime: Anime, index: number) => {
        setCurrentAnime(anime);
        currentAnimeIndex.current = index;
        toggle();
    };

    const confirmDelete = (values: boolean) => {
        if (!values) return;
        collection.animes.splice(currentAnimeIndex.current, 1);
        updateCollectionByIndex(collectionIndex, collection)
        toggle();
    };

    return (
        <>
            <Grid>
                {collection.animes.map((anime, index) => {
                    return (
                        <AnimeListItem
                            key={index}
                            anime={anime}
                            onRemoveClick={() => onRemoveClick(anime, index)}
                        />
                    );
                })}
            </Grid>

            <Modal close={toggle} show={visible} title="Delete Anime" confirm={confirmDelete} confirmText="Delete">
                <p
                    css={css`
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                        color: #828282;
                    `}
                >
                    Are you sure you want to delete {currentAnime?.title.userPreferred}?
                </p>
            </Modal>
        </>
    );
};

export default React.memo(AnimeListGrid);
