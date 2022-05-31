/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  ModalBase,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "../styles/Modal";
import IconButton from "./IconButton";
import { XIcon } from "@heroicons/react/solid";
import { css } from "@emotion/react";
import Button from "./Button";
import TextButton from "./TextButton";

interface ModalProps {
  show: boolean;
  title: string;
  children?: React.ReactNode;
  close: () => void;
  confirm?: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ show, close, title, children, confirm }) => {
  if (!show) return null;

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
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <TextButton onClick={close}>Cancel</TextButton>
            <Button onClick={() => confirm?.(true)}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </ModalBase>
    </>,
    document.body
  );
};

export default Modal;
