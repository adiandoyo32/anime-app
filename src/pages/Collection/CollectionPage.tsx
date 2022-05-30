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

const CollectionGrid = styled.div`
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
            <CollectionGrid>
                {collections.map((collection) => {
                    return (
                        <CollectionCard key={collection.name} collection={collection} />
                        // <div key={index}>
                        //     <Link to={`/collections/${collection.name}`}>{collection.name}</Link>
                        //     <h5>Added Anime {collection.animes.length}</h5>
                        //     {/* <ul>
                        //         {collection.animes.map((anime, index) => {
                        //             return <li key={index}>{anime.title.romaji}</li>;
                        //         })}
                        //     </ul> */}
                        //     <IconButton onClick={() => removeCollection(index)}>
                        //         <TrashIcon
                        //             css={css`
                        //                 color: red;
                        //                 width: 1rem;
                        //                 height: 1rem;
                        //             `}
                        //         />
                        //     </IconButton>
                        // </div>
                    );
                })}
            </CollectionGrid>
        </HomeWrapper>
    );
};

export default CollectionPage;
