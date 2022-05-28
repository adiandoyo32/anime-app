import React from "react";
import { IconButtonStyles } from "../styles/IconButton";

interface IconButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
    return <IconButtonStyles onClick={props.onClick}>{props.children}</IconButtonStyles>;
};

export default IconButton;
