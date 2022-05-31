import styled from "@emotion/styled";
import React from "react";
import CollectionCard from "../../../components/CollectionCard";
import Collection from "../../../models/Collection";

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
  return (
    <Grid>
      {collections.map((collection) => {
        return <CollectionCard key={collection.name} collection={collection} />;
      })}
    </Grid>
  );
};

export default React.memo(CollectionGrid);
