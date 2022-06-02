import React from "react";
import styled from "@emotion/styled";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
`;

interface MainGridProps {
    children?: React.ReactNode;
}

const MainGrid: React.FC<MainGridProps> = ({ children }) => {
    return <Grid>{children}</Grid>;
};

export default MainGrid;
