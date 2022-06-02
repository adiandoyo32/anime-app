import styled from "@emotion/styled";

interface ButtonStyledProps {
    size?: "large" | "medium" | "small";
    color?: string;
}

const resolveColor = (color?: string) => {
    switch (color) {
        case "primary":
            return `color: #fff; 
                    background: #3b82f6; 
                    &:hover { background: #2563eb; }
                  `;
        case "danger":
            return "color: #fff; background: #FD413F; &:hover { background: #f5201e; }";
        default:
            return "color: #fff; background: #3b82f6; &:hover { background: #2563eb; }";
    }
};

const resolveSize = (size?: string) => {
    switch (size) {
        case "large":
            return "padding: 0.5rem 1rem;";
        case "small":
            return "padding: 0.3rem 0.6rem; font-size: 0.75rem";
        default:
            return "padding: 0.5rem 1rem;";
    }
};

export const ButtonStyles = styled.button<ButtonStyledProps & React.ButtonHTMLAttributes<HTMLButtonElement>>`
    width: max-content;
    ${({ size }) => resolveSize(size)};
    border-radius: 0.375rem;
    background: #3b82f6;
    ${({ color }) => resolveColor(color)};
    border: 0;
    transition-duration: 200ms;
    font-weight: 500;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`;
