/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ModalBase, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalTitle } from "../styles/Modal";
import IconButton from "./IconButton";
import { XIcon } from "@heroicons/react/solid";
import { css } from "@emotion/react";
import Button from "./Button";

interface ModalProps {
    show: boolean;
    close: () => void;
    title: string;
    children?: React.ReactNode;
}

const Modal2: React.FC<ModalProps> = ({ show, close, title, children }) => {
    const [collectionName, setCollectionName] = useState<string>("");

    if (!show) return null;

    const onChange = (e: any) => {
        console.log(e.target.value);
        setCollectionName(e.target.value);
    };

    return ReactDOM.createPortal(
        <>
            <ModalBase className="modalContainer" onClick={() => close()}>
                <ModalContent className="modal" onClick={(e) => e.stopPropagation()}>
                    <ModalHeader>
                        <ModalTitle> {title} </ModalTitle>
                        <IconButton onClick={() => close()}>
                            <XIcon
                                css={css`
                                    color: black;
                                    width: 1rem;
                                    height: 1rem;
                                `}
                            />
                        </IconButton>
                    </ModalHeader>
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            css={css`
                                margin-right: 1px;
                            `}
                            onClick={() => close()}
                        >
                            Cancel
                        </Button>
                        <Button>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </ModalBase>
        </>,
        document.body
    );
};

export default Modal2;
