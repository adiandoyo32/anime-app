import styled from "@emotion/styled";

interface TextButtonStyledProps {
  size?: "large" | "medium" | "small";
  color?: string;
}

const resolveColor = (color?: string) => {
  switch (color) {
    case "primary":
      return "color: #3b82f6;;";
    case "danger":
      return "color: red;";
    default:
      return "color: #3b82f6;";
  }
};

const resolveSize = (size?: string) => {
  switch (size) {
    case "large":
      return "padding: 0.5rem 1rem;";
    case "small":
      return "padding: 0.5rem 0.75rem; font-size: 0.75rem";
    default:
      return "padding: 0.5rem 1rem;";
  }
};

export const TextButtonStyles = styled.button<TextButtonStyledProps>`
  width: max-content;
  ${({ size }) => resolveSize(size)};
  border-radius: 0.375rem;
  background: transparent;
  ${({ color }) => resolveColor(color)};
  border: 0;
  transition-duration: 200ms;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.1);
  }
`;
