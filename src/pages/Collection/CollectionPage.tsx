/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../../components/Button";
import { useCollectionContext } from "../../context/CollectionContext";
import { Empty } from "../../images";
import HomeWrapper from "../Home/components/HomeWrapper";
import CollectionGrid from "./components/CollectionGrid";

const CollectionPage = () => {
  const { collections, addCollection } = useCollectionContext();

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
          <Button onClick={addCollection}>New Collection</Button>
        </div>
      </div>
    );
    
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
