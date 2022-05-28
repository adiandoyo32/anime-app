import styled from "@emotion/styled";
import React from "react";
import { ButtonStyles } from "../styles/Button";

interface ButtonProps {
    color?: "primary" | "secondary" | "danger";
    onClick?: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonStyles color={props.color} onClick={props.onClick}>
            {props.children}
        </ButtonStyles>
    );
};

export default Button;
