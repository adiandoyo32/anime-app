import styled from "@emotion/styled";

const CollectionGrid = styled.div`
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export default CollectionGrid;
