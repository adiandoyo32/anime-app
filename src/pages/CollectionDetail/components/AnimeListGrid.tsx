import styled from "@emotion/styled";

export const AnimeListGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
`;
