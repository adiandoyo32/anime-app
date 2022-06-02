/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import Modal from "../../../components/Modal";
import { useCollectionContext } from "../../../context/CollectionContext";
import useModal from "../../../hooks/useModal";
import Anime from "../../../models/Anime";
import Collection from "../../../models/Collection";
import AnimeListItem from "./AnimeItem";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
`;

interface AnimeListGridProps {
    collectionIndex: number;
    collection: Collection;
}

const AnimeListGrid: React.FC<AnimeListGridProps> = ({ collection, collectionIndex }) => {
    const { deleteCollectionByIndex } = useCollectionContext();
    const { toggle, visible } = useModal();
    const [currentAnime, setCurrentAnime] = useState<Anime>();
    const currentAnimeIndex = useRef<number>(0);

    const onRemoveClick = (e: React.MouseEvent<HTMLButtonElement>, anime: Anime, index: number) => {
        e.stopPropagation()
        setCurrentAnime(anime);
        currentAnimeIndex.current = index;
        toggle();
    };

    const confirmDelete = (values: boolean) => {
        if (!values) return;
        collection.animes.splice(currentAnimeIndex.current, 1);
        deleteCollectionByIndex(collectionIndex, collection);
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
                            onRemoveClick={(e) => onRemoveClick(e, anime, index)}
                        />
                    );
                })}
            </Grid>

            <Modal
                close={toggle}
                show={visible}
                title={currentAnime?.title.userPreferred ?? ""}
                confirm={confirmDelete}
                confirmText="Delete"
            >
                <p
                    css={css`
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                        color: #828282;
                        font-weight: 500;
                    `}
                >
                    Are you sure you want to delete {currentAnime?.title.userPreferred} from collection?
                </p>
            </Modal>
        </>
    );
};

export default React.memo(AnimeListGrid);
