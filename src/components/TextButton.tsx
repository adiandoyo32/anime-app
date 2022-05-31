/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import React from "react";
import { TextButtonStyles } from "../styles/TextButton";

interface ButtonProps {
    css?: Interpolation<Theme>;
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "danger";
    onClick?: () => void;
    children?: React.ReactNode;
}

const TextButton: React.FC<ButtonProps> = (props) => {
    return (
        <TextButtonStyles css={props.css} size={props.size} color={props.color} onClick={props.onClick}>
            {props.children}
        </TextButtonStyles>
    );
};

export default TextButton;
