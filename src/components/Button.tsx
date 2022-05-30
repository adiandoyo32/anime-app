/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import React from "react";
import { ButtonStyles } from "../styles/Button";

interface ButtonProps {
    css?: Interpolation<Theme>;
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "danger";
    onClick?: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonStyles css={props.css} size={props.size} color={props.color} onClick={props.onClick}>
            {props.children}
        </ButtonStyles>
    );
};

export default Button;
