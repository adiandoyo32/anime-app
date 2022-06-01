import styled from "@emotion/styled";

const CollectionGrid = styled.div`
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-gap: 1rem;
    @media (min-width: 380px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
`;

export default CollectionGrid;
