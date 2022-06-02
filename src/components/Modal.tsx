/** @jsxImportSource @emotion/react */
import ReactDOM from "react-dom";
import IconButton from "./IconButton";
import { XIcon } from "@heroicons/react/solid";
import { css } from "@emotion/react";
import Button from "./Button";
import TextButton from "./TextButton";
import styled from "@emotion/styled";

const ModalBase = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    z-index: 50;
`;

const ModalContent = styled.div`
    background-color: #fff;
    width: 80%;
    border-radius: 0.375rem;
    @media (min-width: 720px) {
        width: 50%;
    }
    @media (min-width: 970px) {
        width: 40%;
    }
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const ModalTitle = styled.div`
    font-size: 1.1rem;
    font-weight: 500;
`;

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
`;

const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    & > button:first-of-type {
        margin-right: 0.5rem;
    }
`;

interface ModalProps {
  show: boolean;
  title: string;
  children?: React.ReactNode;
  close: () => void;
  confirm?: (value: boolean) => void;
  confirmText?: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  if (!props.show) return null;

  return ReactDOM.createPortal(
    <>
      <ModalBase className="modalContainer" onClick={props.close}>
        <ModalContent className="modal" onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle> {props.title} </ModalTitle>
            <IconButton onClick={props.close}>
              <XIcon
                css={css`
                  color: black;
                  width: 1rem;
                  height: 1rem;
                `}
              />
            </IconButton>
          </ModalHeader>
          <ModalBody>{props.children}</ModalBody>
          <ModalFooter>
            <TextButton onClick={props.close}>Cancel</TextButton>
            <Button onClick={() => props.confirm?.(true)}>{ props.confirmText ?? "Ok"}</Button>
          </ModalFooter>
        </ModalContent>
      </ModalBase>
    </>,
    document.body
  );
};

export default Modal;
