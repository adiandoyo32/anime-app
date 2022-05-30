import styled from "@emotion/styled";

interface ButtonStyledCProps {
    size?: "large" | "medium" | "small";
    color?: string;
}

const resolveColor = (color?: string) => {
    switch (color) {
        case "primary":
            return "color: #fff; background: #3b82f6;";
        case "danger":
            return "color: #fff; background: red;";
        default:
            return "color: #fff; background: #3b82f6;";
    }
};

const resolveSize = (size?: string) => {
    switch (size) {
        case "large":
            return "padding: 0.5rem 1rem;";
        case "small":
            return "padding: 0.25rem 0.5rem; font-size: 0.75rem";
        default:
            return "padding: 0.5rem 1rem;";
    }
};

export const ButtonStyles = styled.button<ButtonStyledCProps>`
    width: max-content;
    ${({ size }) => resolveSize(size)};
    border-radius: 0.375rem;
    background: #3b82f6;
    ${({ color }) => resolveColor(color)};
    border: 0;
    transition-duration: 200ms;
    &:hover {
        cursor: pointer;
        background: #2563eb;
    }
`;
