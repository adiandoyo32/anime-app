import styled from "@emotion/styled";

export const IconButtonStyles = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    border-radius: 0.375rem;
    background: transparent;
    border: 0;
    outline: 0;
    transition-duration: 200ms;
    &:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
    }
`;
