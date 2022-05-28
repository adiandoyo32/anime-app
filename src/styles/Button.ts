import styled from "@emotion/styled";

interface ButtonStyledCProps {
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

export const ButtonStyles = styled.button<ButtonStyledCProps>`
    padding: 0.75rem 1.25rem;
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
