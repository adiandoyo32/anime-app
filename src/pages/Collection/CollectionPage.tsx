/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import { useCollectionContext } from "../../context/CollectionContext";
import CollectionCard from "../../components/CollectionCard";
import HomeWrapper from "../Home/components/HomeWrapper";
import CollectionGrid from "./components/CollectionGrid";

const CollectionPage = () => {
    const { collections, addCollection, removeCollection } = useCollectionContext();

    if (!collections) return <div>No yet</div>;
    return (
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
                <Button onClick={addCollection}>New Collection</Button>
            </div>
            <CollectionGrid collections={collections} />
        </HomeWrapper>
    );
};

export default CollectionPage;
