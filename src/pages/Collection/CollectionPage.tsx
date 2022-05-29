/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import { useCollectionContext } from "../../context/CollectionContext";

const CollectionPage = () => {
    const { collections, addCollection, removeCollection } = useCollectionContext();

    if (!collections) return <div>No yet</div>;
    return (
        <>
            <div>
                <h3>Collection</h3>
                <Button onClick={addCollection}>Add Collection</Button>
            </div>
            {collections.map((collection, index) => {
                return (
                    <div key={index}>
                        <Link to={`/collections/${collection.name}`}>{collection.name}</Link>
                        <h5>Added Anime {collection.animes.length}</h5>
                        {/* <ul>
                            {collection.animes.map((anime, index) => {
                                return <li key={index}>{anime.title.romaji}</li>;
                            })}
                        </ul> */}
                        <IconButton onClick={() => removeCollection(index)}>
                            <TrashIcon
                                css={css`
                                    color: red;
                                    width: 1rem;
                                    height: 1rem;
                                `}
                            />
                        </IconButton>
                    </div>
                );
            })}
        </>
    );
};

export default CollectionPage;
